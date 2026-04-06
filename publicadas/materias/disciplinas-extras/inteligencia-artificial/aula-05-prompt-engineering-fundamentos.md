---
title: Prompt Engineering — Fundamentos
description: Se o modelo de linguagem é o motor, o prompt é o volante. A qualidade da resposta que você recebe depende diretamente da qualidade da instrução que você escr...
order: 5
published: true
---

# Aula 05 — Prompt Engineering — Fundamentos

Se o modelo de linguagem é o motor, o prompt é o volante. A qualidade da resposta que você recebe depende diretamente da qualidade da instrução que você escreve — e isso não é intuitivo. A maioria das pessoas usa LLMs como um campo de busca glorificado, jogando perguntas vagas e aceitando respostas medianas. Prompt Engineering é a disciplina de escrever instruções precisas, estruturadas e eficazes para extrair o máximo de um modelo. É a habilidade mais acessível e mais subestimada de quem trabalha com IA hoje.

## O que é um prompt e por que ele importa

:::conceito
**Definição:** Prompt é toda a entrada enviada ao modelo — inclui a instrução, o contexto, exemplos, restrições e o formato esperado da resposta. O modelo não lê intenção: ele lê tokens. O que você não escreve, ele não considera.
:::

Um prompt mal escrito não é culpa do modelo — é um problema de comunicação. O modelo não tem acesso ao que você estava pensando, só ao que foi digitado. Por isso, a diferença entre "resuma esse texto" e "resuma esse texto em 3 tópicos objetivos, sem jargões, para alunos do 2º ano técnico" é enorme. A segunda instrução reduz ambiguidade e guia o modelo para um resultado útil.

:::questao Um professor enviou o prompt "Explique inteligência artificial" para o modelo e recebeu uma resposta acadêmica, longa e cheia de termos técnicos. O que melhor explica o porquê de a resposta não ter sido útil para a turma?
a) O modelo não sabe quem é a turma e não consegue adivinhar o nível de conhecimento *
b) O modelo foi mal treinado em português
c) Prompts curtos são sempre ruins para qualquer finalidade
d) IA generativa não consegue explicar conceitos complexos
> A alternativa A está correta. O prompt não informava o público-alvo, o nível de profundidade nem o formato esperado. Sem essa informação, o modelo usou seu padrão genérico. Um prompt que incluísse "explique para alunos do 2º ano técnico, em 4 tópicos curtos, sem termos técnicos" tenderia a ser muito mais útil.
:::

Em projetos reais, isso afeta produtividade, custo e confiança. Um prompt vago pode gerar retrabalho, respostas longas demais ou saídas inconsistentes. Um prompt estruturado aproxima o modelo do comportamento esperado e torna o uso mais reaproveitável em automações, bots e assistentes.

## As quatro partes de um prompt eficaz

:::importante
**Estrutura vs improviso:** Prompts improvisados geram respostas inconsistentes. Prompts estruturados com papel, tarefa, contexto e formato geram saídas mais previsíveis e reutilizáveis.
:::

Um prompt bem construído costuma ter quatro elementos centrais:

- **Papel** — quem o modelo deve ser: "Você é um tutor técnico de programação"
- **Tarefa** — o que precisa ser feito: "Explique este erro de Python"
- **Contexto** — informações que o modelo precisa conhecer: "A turma é iniciante e usa exemplos do cotidiano escolar"
- **Formato** — como a resposta deve ser entregue: "Responda em 4 tópicos curtos e finalize com um exemplo"

Nenhum dos quatro é luxo. Se a tarefa é importante, todos ajudam. Sem papel, o tom pode ficar genérico. Sem contexto, o modelo preenche lacunas por conta própria. Sem formato, a resposta pode vir boa no conteúdo e ruim para uso prático.

## Exemplo de chamada de API com prompt estruturado

O padrão papel + tarefa + contexto + formato não precisa ficar só na teoria. Abaixo está um exemplo simples em Python usando a SDK da Anthropic para pedir um resumo voltado ao contexto escolar.

```python
from anthropic import Anthropic

client = Anthropic()
prompt = """
Papel: você é um professor de informática da SEED-PR.
Tarefa: explicar o que é phishing.
Contexto: a turma é iniciante e usa celular no dia a dia.
Formato: responda em 3 tópicos e feche com 1 exemplo prático.
"""
resp = client.messages.create(
    model="claude-3-5-sonnet-latest",
    max_tokens=250,
    messages=[{"role": "user", "content": prompt}],
)
print(resp.content[0].text)
```

## Técnicas essenciais de Prompt Engineering

:::exemplo
Escrever um bom prompt é como passar uma tarefa para um estagiário muito competente, mas que não pode adivinhar contexto oculto. Ele faz exatamente o que foi pedido — então o pedido precisa ser claro.
:::

Além da estrutura básica, algumas técnicas aumentam bastante a qualidade do resultado:

- **Few-shot prompting** — mostrar dois ou três exemplos do padrão esperado antes do pedido
- **Delimitadores** — separar instrução, dados e contexto com marcadores como `###`, `---` ou blocos claros
- **Decomposição de tarefa** — dividir o pedido em etapas menores para reduzir confusão
- **Restrições de formato** — exigir tabela, tópicos, JSON ou número máximo de linhas
- **Checklist de critérios** — dizer explicitamente o que deve aparecer e o que deve ser evitado

Essas técnicas não competem entre si. Em aplicações sérias, elas costumam ser combinadas.

:::questao Um desenvolvedor quer que o modelo gere respostas em formato JSON estruturado, mas ele nunca especifica isso no prompt. O que provavelmente acontece?
a) O modelo nunca gera JSON porque essa capacidade precisa de fine-tuning
b) O modelo tende a devolver texto livre em vez do formato estruturado esperado *
c) Especificar formato JSON reduz a criatividade e por isso nunca deve ser feito
d) Few-shot prompting substitui a necessidade de especificação de formato
> A alternativa B está correta. Se o formato não for explicitamente solicitado, o modelo retorna texto livre por padrão. Isso não é um defeito — é o comportamento esperado quando a instrução é incompleta. Especificar o formato desejado (JSON, tabela, tópicos numerados) é parte essencial de um prompt bem feito.
:::

## Chain of Thought na prática — melhor do que a fórmula vaga

Muita gente aprende Prompt Engineering ouvindo a frase "peça para o modelo pensar passo a passo". Isso é superficial demais. O que realmente ajuda é transformar um pedido confuso em uma sequência clara de ações.

**Antes:**

> Analise este chamado de suporte e me dê a resposta.

**Depois:**

> Você é um analista de suporte de TI da escola. Leia o chamado abaixo, identifique o problema principal, separe o que é sintoma e o que é causa provável, proponha uma ação imediata e responda em até 5 linhas para o aluno.

O segundo prompt funciona melhor porque organiza o raciocínio. Em vez de depender de uma instrução genérica, ele informa o papel, o objetivo e a sequência de etapas. Isso reduz respostas soltas e melhora consistência.

## Limites, riscos e alucinação

Prompt Engineering melhora muito o desempenho prático de um LLM, mas não faz milagre. Um prompt excelente não transforma o modelo em fonte garantida de verdade. Se o modelo não tiver contexto suficiente, se a tarefa exigir conhecimento atualizado ou se a pergunta estiver ambígua, ele ainda pode inventar detalhes com aparência convincente.

Essa é a **alucinação**: uma resposta fluente, bem escrita e potencialmente errada. Em tarefas como resumo de norma, explicação jurídica, orientação institucional ou geração de conteúdo acadêmico, o prompt deve incluir instruções para admitir incerteza, citar a base usada e evitar inventar. Mesmo assim, revisão humana continua necessária.

:::questao Um aluno pede ao modelo: "Com base no regulamento da SEED-PR que eu enviei, me diga se posso faltar na prova final". O modelo responde com confiança: "Não, falta não é permitida". O regulamento, na verdade, não mencionava esse cenário. Qual risco se materializou?
a) A temperatura estava alta demais, causando resposta inventada
b) O modelo usou informação fora do regulamento enviado — alucinação sobre norma institucional *
c) O modelo entendeu errado porque o texto era muito longo
d) Few-shot prompting fez o modelo inventar a resposta
> A alternativa B está correta. Mesmo com um documento como contexto, o modelo pode gerar uma resposta confiante sobre algo que não está no texto — isso é alucinação. O risco aumenta quando a pergunta toca em cenários específicos, exceções ou casos não cobertos explicitamente pelo material enviado. Por isso, respostas em contextos institucionais sempre precisam de verificação.
:::

:::atencao
Prompts melhores reduzem ruído, mas não eliminam alucinação. Eles guiam o modelo; não substituem validação de fatos, leitura da fonte e responsabilidade de quem usa a saída.
:::

## Questões de fixação

:::questao Sobre Prompt Engineering, qual afirmação está correta?
a) Um bom prompt elimina completamente o risco de alucinação
b) Delimitadores só servem para prompts de programação
c) Few-shot prompting ajuda o modelo a reproduzir padrão de tom e estrutura desejados *
d) O formato da resposta é sempre inferido corretamente, então não precisa ser especificado
> A alternativa C está correta. Few-shot prompting mostra exemplos do padrão esperado e aumenta a consistência da resposta. As outras alternativas exageram capacidades do modelo ou subestimam a importância da instrução explícita.
:::

:::questao Sobre técnicas de Prompt Engineering, qual alternativa NÃO representa uma prática recomendada?
a) Usar delimitadores para separar instrução, dados e contexto
b) Decompor tarefas complexas em etapas menores e sequenciais
c) Usar alta temperatura para todas as tarefas, incluindo extração de dados e classificação *
d) Fornecer exemplos com few-shot prompting para guiar o padrão de resposta
> A alternativa C está correta. Alta temperatura aumenta a diversidade de escolhas do modelo, o que é desejável em brainstorming, mas prejudicial em tarefas que exigem precisão como extração de dados ou classificação. Usar alta temperatura sistematicamente em todas as tarefas é um erro que compromete a confiabilidade dos resultados.
:::

## Atividade prática

Reescreva o prompt fraco abaixo em duas versões melhores, usando o contexto brasileiro ou escolar:

> "Explique como evitar golpes na internet."

Na primeira versão, use apenas papel + tarefa + formato. Na segunda, acrescente contexto, delimitadores e uma checklist de critérios. Se quiser, use como cenário um aviso para alunos da **SEED-PR** ou um comunicado para famílias no aplicativo escolar.

:::exercicio
Entregue os dois prompts reescritos, a resposta gerada para cada um e um parágrafo comparando clareza, adequação ao público e risco de resposta vaga ou alucinada.
:::

:::roteiro
Uma boa demonstração ao vivo é comparar "Explique phishing" com um prompt estruturado para alunos do ensino técnico. O contraste aparece rápido: o primeiro tende a ser genérico; o segundo costuma trazer linguagem, profundidade e formato muito mais úteis.
:::

## Fechamento

:::resumo
- Prompt é toda a entrada enviada ao modelo, não apenas a pergunta principal
- Papel, tarefa, contexto e formato formam a base de um prompt forte
- Técnicas como few-shot, delimitadores, decomposição e checklist aumentam consistência
- Um bom prompt organiza o raciocínio do modelo, mas não garante verdade factual
- Alucinação continua sendo um risco e exige revisão humana em contextos importantes
:::
