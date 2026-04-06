---
title: Tool Use e Function Calling
description: Agentes precisam de ferramentas — mas como o LLM sabe quando e como usá-las? A resposta está no mecanismo de Tool Use, também chamado de Function Calling. É ...
order: 12
published: true
---

# Aula 12 — Tool Use e Function Calling

Agentes precisam de ferramentas — mas como o LLM sabe quando e como usá-las? A resposta está no mecanismo de Tool Use, também chamado de Function Calling. É a capacidade do modelo de identificar, em meio ao raciocínio, que precisa de uma ferramenta externa, gerar os parâmetros corretos para chamá-la e continuar o raciocínio com o resultado retornado. Tool Use é o que transforma um modelo que fala sobre ações em um agente que executa ações — e entender como funciona por dentro é essencial para construir sistemas confiáveis.

## Como o Function Calling funciona

:::conceito
**Definição:** Function Calling é o mecanismo pelo qual o LLM interrompe a geração de texto, emite uma chamada estruturada para uma função externa com os parâmetros corretos, aguarda o resultado e retoma a geração incorporando essa informação.
:::

O fluxo completo tem quatro etapas: o desenvolvedor descreve as ferramentas disponíveis no prompt — nome, o que faz e quais parâmetros aceita. O modelo raciocina e, quando decide usar uma ferramenta, para de gerar texto e emite um bloco estruturado com o nome da função e os parâmetros preenchidos. A aplicação executa a função de verdade e devolve o resultado ao modelo. O modelo retoma o raciocínio com essa informação e continua — podendo chamar outra ferramenta ou gerar a resposta final.

## Definindo ferramentas — o contrato entre modelo e código

:::importante
**Descrição boa vs descrição ruim:** O modelo decide quando e como usar uma ferramenta baseado exclusivamente na descrição que você escreve. Uma descrição vaga gera chamadas erradas ou ausentes. Uma descrição precisa — com nome claro, propósito específico e parâmetros bem documentados — garante que o modelo use a ferramenta no momento certo e com os valores corretos.
:::

Uma definição de ferramenta tem três partes essenciais:

- **Nome** — deve ser descritivo e único: `buscar_jurisprudencia`, não `busca` ou `func1`
- **Descrição** — explica o que a ferramenta faz, quando usá-la e o que ela retorna
- **Parâmetros** — cada argumento com tipo, descrição e se é obrigatório ou opcional

A qualidade da descrição é tão importante quanto a qualidade do código da ferramenta. O modelo nunca vê o código — só a descrição. Se a descrição for ruim, a ferramenta nunca será chamada corretamente.

## Tool Use na prática — paralelo e sequencial

:::exemplo
Function Calling é como um médico que, no meio da consulta, pede um exame. Ele não faz o exame — preenche a requisição com os parâmetros certos, manda para o laboratório e espera o resultado antes de dar o diagnóstico. O laboratório é a função. A requisição é o bloco de chamada. O resultado do exame é o retorno.
:::

Modelos avançados suportam dois modos de chamada:

- **Sequencial** — o modelo chama uma ferramenta, aguarda o resultado e decide se chama outra. Útil quando a segunda chamada depende do resultado da primeira.
- **Paralelo** — o modelo emite múltiplas chamadas ao mesmo tempo quando as ferramentas são independentes. Reduz a latência total do agente.

Saber qual modo o modelo suporta e como configurar o comportamento é parte do design do sistema — não toda API de LLM suporta chamadas paralelas por padrão.

## Questões de fixação

:::questao Um agente tem acesso a uma ferramenta chamada `get_data` com a descrição "obtém dados". O modelo raramente a usa, mesmo quando seria necessário. Qual é a causa mais provável e como corrigir?
a) O modelo não suporta Function Calling — é necessário trocar de provedor de LLM
b) Os parâmetros da ferramenta estão com tipos errados no schema de definição
c) descrição é vaga demais — o modelo não consegue inferir quando e por que usar a ferramenta *
d) O model temperature está alto demais, fazendo o modelo preferir gerar texto a chamar ferramentas
> A alternativa C está correta. O modelo decide usar uma ferramenta baseado inteiramente na descrição fornecida. "Obtém dados" não diz quais dados, de onde, quando usar ou o que retorna. Uma descrição como "Busca dados de processo judicial pelo número do processo no sistema TJPR, retornando partes, andamentos e decisões" guia o modelo a usar a ferramenta no contexto exato para o qual ela foi criada.
:::

:::questao Sobre o mecanismo de Function Calling, qual das afirmações a seguir NÃO é verdadeira?
a) O modelo emite uma chamada estruturada com nome e parâmetros quando decide usar uma ferramenta
b) função é executada pela aplicação, não pelo modelo — o modelo só gera a chamada
c) Chamadas paralelas reduzem a latência quando as ferramentas são independentes entre si
d) O modelo executa o código da função internamente e retorna o resultado sem precisar de integração externa *
> A alternativa D está incorreta — e essa é a resposta. O modelo nunca executa código. Ele gera uma chamada estruturada que a aplicação interpreta e executa — o modelo não tem acesso ao ambiente de execução, ao banco de dados ou a qualquer sistema externo. A separação entre geração da chamada e execução real é fundamental para entender como construir sistemas seguros com Function Calling.
:::

## Atividade prática

Defina em JSON três ferramentas para um agente assistente de desenvolvimento Python: uma que busca documentação, uma que executa código e uma que busca erros no Stack Overflow. Para cada ferramenta, escreva nome, descrição completa e pelo menos dois parâmetros com tipo e descrição. Depois escreva um exemplo de prompt de usuário que deveria acionar cada ferramenta.

:::importante
Arquivo JSON com as três definições de ferramentas no formato da API Anthropic ou OpenAI, mais um documento com os três prompts de exemplo e qual ferramenta cada um deveria acionar — com justificativa de uma linha.
:::

:::roteiro
Mostro ao vivo uma chamada de API com tool_use no terminal — copio o JSON de definição de uma ferramenta simples, faço a chamada e mostro o bloco de resposta com a chamada estruturada emitida pelo modelo. Depois mostro como a aplicação "executa" a função e devolve o resultado. Desmistificar que o modelo executa código é o ponto mais importante desta aula — a maioria dos iniciantes assume que o agente faz tudo sozinho.
:::

## Fechamento

:::resumo
- Function Calling permite ao modelo emitir chamadas estruturadas para ferramentas externas durante o raciocínio
- A qualidade da descrição da ferramenta determina quando e como o modelo a usa
- O modelo gera a chamada — a aplicação executa a função e devolve o resultado
:::
