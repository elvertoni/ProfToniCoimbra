---
title: Tool Use e Function Calling
description: Agentes precisam de ferramentas — mas como o LLM sabe quando e como usá-las? A resposta está no mecanismo de Tool Use, também chamado de Function Calling. É ...
order: 12
published: true
---

# Aula 12 — Tool Use e Function Calling

Agentes precisam de ferramentas — mas como o LLM sabe quando e como usá-las? A resposta está no mecanismo de Tool Use, também chamado de Function Calling. É a capacidade do modelo de identificar, em meio ao raciocínio, que precisa de uma ferramenta externa, gerar os parâmetros corretos para chamá-la e continuar a resposta com o resultado retornado. Tool Use é o que transforma um modelo que fala sobre ações em um agente que realmente executa ações.

## Como o Function Calling funciona

:::conceito
**Definição:** Function Calling é o mecanismo pelo qual o LLM interrompe a geração de texto, emite uma chamada estruturada para uma função externa com parâmetros validados, aguarda o resultado e retoma a geração incorporando essa informação.
:::

O fluxo completo tem quatro etapas. Primeiro, o desenvolvedor descreve as ferramentas disponíveis: nome, descrição e schema dos parâmetros. Depois, o modelo analisa a pergunta do usuário e decide se alguma ferramenta deve ser usada. Em seguida, a aplicação executa a função de verdade fora do modelo. Por fim, o resultado volta para o LLM, que continua o raciocínio e produz a resposta final.

Essa separação é crucial: o modelo **não executa código**, não consulta o banco diretamente e não faz chamadas HTTP sozinho. Ele apenas gera uma intenção estruturada. A aplicação ao redor é que interpreta, valida, executa e devolve o retorno.

## Definindo ferramentas — o contrato entre modelo e código

:::importante
**Descrição boa vs descrição ruim:** O modelo decide quando e como usar uma ferramenta com base na descrição e no schema que você fornece. Se a descrição for vaga ou o schema for confuso, a chamada tende a sair errada ou nem acontecer.
:::

Uma definição de ferramenta normalmente tem três partes essenciais:

- **Nome** — claro e específico, como `consultar_processo_tjpr`
- **Descrição** — explica quando usar, o que a ferramenta faz e o que retorna
- **Input schema** — define parâmetros, tipos e campos obrigatórios em JSON Schema

Se você escrever `get_data`, o modelo sabe quase nada. Se escrever `consultar_processo_tjpr` com descrição dizendo que recebe número CNJ e retorna andamento resumido, o comportamento tende a melhorar muito. Em agentes reais, o schema é parte do design pedagógico do sistema: ele ensina o modelo a pedir a informação certa.

## Exemplo técnico com a SDK da Anthropic

Abaixo está um exemplo enxuto em Python mostrando o ciclo completo: definição da ferramenta com JSON schema, chamada ao modelo, captura do `tool_use`, execução local e devolução do resultado ao modelo.

```python
from anthropic import Anthropic
client = Anthropic()
def consultar_processo(numero): return {"status": "em andamento", "fonte": "TJPR"}
tools = [{"name": "consultar_processo_tjpr", "description": "Busca andamento resumido no TJPR", "input_schema": {"type": "object", "properties": {"numero": {"type": "string", "description": "Número CNJ"}}, "required": ["numero"]}}]
mensagem = "Consulte o processo 0001234-56.2025.8.16.0001"
# 1) chama o modelo com a ferramenta disponível
resp = client.messages.create(model="claude-3-5-sonnet-latest", max_tokens=300, tools=tools, messages=[{"role": "user", "content": mensagem}])
# 2) captura o bloco tool_use emitido pelo modelo
tool_use = next(bloco for bloco in resp.content if bloco.type == "tool_use")
# 3) executa a função local com os parâmetros recebidos
resultado = consultar_processo(tool_use.input["numero"])
# 4) devolve o resultado para o modelo concluir a resposta
final = client.messages.create(model="claude-3-5-sonnet-latest", max_tokens=300, tools=tools, messages=[{"role": "user", "content": mensagem}, {"role": "assistant", "content": resp.content}, {"role": "user", "content": [{"type": "tool_result", "tool_use_id": tool_use.id, "content": str(resultado)}]}])
print(final.content[0].text)
```

## Tool Use na prática — sequencial, paralelo e segurança

:::exemplo
Pense em um agente que ajuda um cidadão a consultar situação de um processo no TJPR e, em seguida, buscar o significado de um termo jurídico. A primeira chamada depende do número do processo; a segunda pode depender do que veio na resposta anterior. Isso é fluxo sequencial.
:::

Modelos mais avançados podem trabalhar de duas formas:

- **Sequencial** — chamam uma ferramenta, esperam o resultado e decidem a próxima ação
- **Paralela** — emitem várias chamadas de uma vez quando elas são independentes

Mas aqui entra um ponto importante: mais poder exige mais controle. Se uma ferramenta envia e-mail, faz Pix, apaga arquivo ou altera cadastro, a aplicação precisa validar parâmetros, controlar permissões e registrar o que foi feito. Um LLM pode sugerir uma ação com aparência correta e ainda assim pedir algo inadequado, incompleto ou perigoso.

:::atencao
Tool Use amplia capacidade, mas também amplia risco operacional. Nunca entregue execução sensível sem validação, logs e limites claros na aplicação.
:::

## Limitações comuns em sistemas com Function Calling

Mesmo quando o modelo aciona a ferramenta certa, ainda existem limitações práticas. A chamada pode vir com parâmetros incompletos, o schema pode não refletir todas as regras reais do sistema, a ferramenta pode falhar no backend ou o retorno pode ser ambíguo demais para o modelo usar bem.

Outro erro comum é achar que o modelo "entendeu o banco" ou "aprendeu a API". Não: ele aprendeu apenas o contrato textual que você descreveu. Se o contrato for ruim, o comportamento será ruim. Por isso, projetar ferramentas para agentes é tanto um trabalho de engenharia quanto de comunicação.

## Questões de fixação

:::questao Um agente tem acesso a uma ferramenta chamada `get_data` com a descrição "obtém dados". O modelo quase nunca a usa, mesmo quando seria útil. Qual é a causa mais provável?
a) O modelo não suporta tool use
b) A descrição da ferramenta é vaga demais para orientar quando ela deve ser chamada *
c) O problema só pode ser resolvido aumentando a temperatura
d) Toda ferramenta precisa ter pelo menos cinco parâmetros para ser usada
> A alternativa B está correta. O modelo decide com base no contrato textual que recebeu. Uma descrição vaga não deixa claro o contexto de uso, o tipo de dado esperado nem o que será retornado.
:::

:::questao Sobre o mecanismo de Function Calling, qual afirmação está correta?
a) O modelo executa a função internamente e só devolve o resultado pronto
b) O JSON schema é opcional e não interfere na qualidade da chamada
c) A aplicação executa a função real e devolve o resultado para o modelo continuar a resposta *
d) Tool use só serve para responder perguntas da web, não para ações locais
> A alternativa C está correta. O modelo emite uma chamada estruturada, mas quem executa a ação é a aplicação externa. Essa separação é central para segurança e confiabilidade.
:::

## Atividade prática

Defina três ferramentas para um agente de apoio ao estudante de desenvolvimento de sistemas: uma que consulta documentação, uma que roda testes automatizados e uma que busca prazos ou avisos em um sistema interno fictício. Para cada ferramenta, escreva nome, descrição, schema e um exemplo de pergunta de usuário que deveria ativá-la.

:::exercicio
Entregue um arquivo com as três definições de ferramentas e um parágrafo explicando quais exigem mais cuidado de segurança e por quê.
:::

:::roteiro
Uma boa demonstração ao vivo é mostrar um tool use simples, como consulta de processo ou busca de documentação, e depois enfatizar que a ação real aconteceu na aplicação. Esse é o ponto que mais confunde iniciantes.
:::

## Fechamento

:::resumo
- Tool Use permite ao modelo pedir ferramentas externas com chamadas estruturadas
- Nome, descrição e JSON schema formam o contrato que orienta o comportamento do LLM
- O modelo gera a chamada, mas a execução real acontece fora dele
- Fluxos podem ser sequenciais ou paralelos, dependendo da dependência entre tarefas
- Segurança e validação são parte obrigatória do desenho de agentes com ferramentas
:::
