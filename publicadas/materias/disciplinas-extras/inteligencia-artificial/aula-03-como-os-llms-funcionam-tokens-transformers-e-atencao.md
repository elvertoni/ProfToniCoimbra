---
title: Como os LLMs Funcionam — Tokens, Transformers e Atenção
description: Você já usou um modelo de linguagem e ficou impressionado com a resposta — mas já parou para pensar no que acontece por baixo? LLMs, ou Large Language Models...
order: 3
published: true
---

# Aula 03 — Como os LLMs Funcionam — Tokens, Transformers e Atenção

Você já usou um modelo de linguagem e ficou impressionado com a resposta — mas já parou para pensar no que acontece por baixo? LLMs, ou Large Language Models, não entendem texto como humanos entendem. Eles operam com números, probabilidades e uma arquitetura chamada Transformer que revolucionou a IA a partir de 2017. Entender esse mecanismo não é detalhe técnico opcional — é o que separa quem usa IA de quem sabe trabalhar com ela de verdade.

## Tokens — a unidade mínima de linguagem

:::conceito
**O que é um token:** Token é o pedaço de texto que o modelo processa de uma vez. Pode ser uma palavra inteira, parte de uma palavra ou um símbolo. A frase "inteligência artificial" vira aproximadamente 4 tokens em inglês e 5 em português.
:::

O modelo nunca lê letras nem palavras inteiras diretamente — ele lê tokens. Antes de processar qualquer texto, um componente chamado **tokenizador** quebra o input em pedaços e converte cada pedaço em um número. A partir daí, tudo é matemática. Isso explica comportamentos estranhos: o modelo pode errar ao contar letras ou sílabas porque ele nunca viu a palavra como caracteres — viu como tokens. Cada modelo tem um vocabulário fixo de tokens, geralmente entre 50 mil e 100 mil entradas.

## Transformers — a arquitetura que mudou tudo

:::importante
**Antes vs depois dos Transformers:** Antes de 2017, modelos de linguagem processavam texto palavra por palavra em sequência — eram lentos e esqueciam o início da frase. Os Transformers processam todos os tokens ao mesmo tempo e conseguem relacionar qualquer parte do texto com qualquer outra.
:::

O artigo *"Attention is All You Need"* (Google, 2017) introduziu a arquitetura Transformer. A ideia central é processar o texto em paralelo, não em sequência, usando um mecanismo chamado **atenção**. Isso permitiu treinar modelos muito maiores, com muito mais dados, em muito menos tempo. GPT, Claude, Gemini, LLaMA — todos são Transformers. A arquitetura virou o padrão absoluto do campo.

## Atenção — o que o modelo prioriza ao responder

:::exemplo
Imagine que você está lendo uma bula de remédio e alguém pergunta "qual a dose para adultos?". Seus olhos ignoram a composição química e vão direto para a seção de posologia. O mecanismo de atenção faz exatamente isso — decide quais tokens são relevantes para responder aquele ponto específico.
:::

O mecanismo de **atenção** permite que o modelo saiba, ao gerar cada token da resposta, quais partes do input merecem mais peso. Numa frase como "O banco estava cheio de pessoas sentadas à beira do rio", o modelo precisa decidir se "banco" é instituição financeira ou margem de rio — e faz isso pesando a relação entre "banco" e os outros tokens ao redor. Quanto mais camadas de atenção, mais nuances o modelo consegue capturar. Modelos grandes têm dezenas dessas camadas operando em paralelo.

## Questões de fixação

:::questao Um desenvolvedor percebe que o modelo de linguagem errou ao contar quantas letras "r" existem na palavra "strawberry". Qual característica dos LLMs explica melhor esse comportamento?
a) O modelo não foi treinado com palavras em inglês suficientes
b) O mecanismo de atenção ignorou a palavra por ser muito curta
c) O modelo processa tokens, não caracteres individuais, então não "vê" letras separadas
d) tokenização fragmenta palavras em pedaços que não correspondem a letras, impedindo contagem direta de caracteres *
> A alternativa D está correta. "Strawberry" pode ser tokenizada como "str", "aw", "berry" — o modelo nunca processou as letras individualmente. Contar letras exigiria raciocínio sobre caracteres que o modelo simplesmente não tem acesso direto durante a geração. Esse é um limite estrutural da arquitetura, não falta de treinamento.
:::

:::questao Sobre a arquitetura Transformer e o mecanismo de atenção, qual das afirmações a seguir NÃO é verdadeira?
a) Transformers processam todos os tokens simultaneamente, não em sequência
b) O mecanismo de atenção permite relacionar qualquer token com qualquer outro no contexto
c) Modelos baseados em Transformers leem o texto caractere por caractere para garantir precisão ortográfica *
d) GPT, Claude e Gemini são todos baseados na arquitetura Transformer
> A alternativa C está incorreta — e essa é a resposta. Transformers não leem caractere por caractere: operam sobre tokens, que são fragmentos de texto convertidos em números. A precisão ortográfica não é garantida pela arquitetura — o modelo aprende padrões estatísticos de quais tokens costumam aparecer juntos, não regras gramaticais explícitas.
:::

## Atividade prática

Acesse o **Tokenizer do OpenAI** em [platform.openai.com/tokenizer](https://platform.openai.com/tokenizer) e experimente tokenizar três textos: uma frase simples em português, um trecho de código Python e uma palavra inventada. Observe como o tokenizador fragmenta cada um e anote as diferenças. Depois responda: por que código e texto natural geram quantidades de tokens diferentes para o mesmo número de caracteres?

:::importante
Print dos três exemplos tokenizados com uma análise curta — 3 a 5 linhas — explicando o padrão observado e respondendo à pergunta sobre código vs texto natural.
:::

:::roteiro
Faço ao vivo no projetor: digito "inteligência artificial" no tokenizador e mostro os números gerados. Depois digito a mesma frase em inglês e comparo a contagem. Isso gera discussão imediata sobre por que modelos em inglês são mais eficientes — e já abre o gancho para falar de custo por token nas APIs.
:::

## Fechamento

:::resumo
- LLMs processam tokens — fragmentos numéricos de texto — não palavras ou letras diretamente
- A arquitetura Transformer processa todos os tokens em paralelo, superando modelos sequenciais anteriores
- O mecanismo de atenção decide quais tokens são relevantes para cada parte da resposta gerada
:::
