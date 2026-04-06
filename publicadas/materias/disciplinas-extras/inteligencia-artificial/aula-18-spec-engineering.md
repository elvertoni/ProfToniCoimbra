---
title: Spec Engineering
description: Spec Driven Development é a filosofia — Spec Engineering é o ofício. Saber que você deve escrever uma spec antes de implementar é o começo. Saber como escrev...
order: 18
published: true
---

# Aula 18 — Spec Engineering

Spec Driven Development é a filosofia — Spec Engineering é o ofício. Saber que você deve escrever uma spec antes de implementar é o começo. Saber como escrever uma spec que a IA execute com precisão, que sobreviva a mudanças de requisito e que sirva como contrato entre você e o sistema é outra habilidade completamente diferente. Spec Engineering é a técnica de redigir especificações que funcionam como fonte de verdade — para a IA, para o time e para o projeto inteiro.

## O que torna uma spec executável pela IA

:::conceito
**Definição:** Uma spec executável é aquela que a IA consegue seguir sem pedir esclarecimentos. Ela é precisa sem ser rígida, completa sem ser exaustiva e estruturada de forma que o modelo consiga identificar o que é regra, o que é contexto e o que é exemplo.
:::

A diferença entre uma spec que a IA executa bem e uma que ela interpreta mal está na estrutura. Texto corrido longo mistura regras com contexto com exemplos — o modelo trata tudo com o mesmo peso. Uma spec bem estruturada usa hierarquia explícita: seções com títulos claros, regras numeradas, exemplos marcados como exemplos e exceções identificadas como exceções. O modelo navega por estrutura, não por intenção.

## Os cinco elementos de uma spec bem escrita

:::importante
**Spec ambígua vs spec precisa:** Spec ambígua: "O agente deve responder de forma útil e profissional". Spec precisa: "O agente responde em até 3 parágrafos, usa linguagem técnica sem jargão, nunca responde fora do escopo jurídico e sempre termina com uma pergunta de confirmação". A segunda é executável. A primeira é decorativa.
:::

Cinco elementos que tornam uma spec executável:

- **Objetivo** — uma frase que define o propósito do sistema sem ambiguidade
- **Escopo** — lista explícita do que está dentro e do que está fora
- **Comportamentos** — regras numeradas descrevendo o que o sistema faz em cada situação
- **Exemplos** — casos concretos de entrada e saída esperada para os comportamentos mais críticos
- **Restrições** — limites absolutos que nunca podem ser violados, separados dos comportamentos preferenciais

## Spec como contrato vivo — versionamento e evolução

:::exemplo
Uma spec é como uma Constituição: ela define os princípios que guiam todas as decisões menores. Quando surge um caso novo, você não improvisa — você verifica se a Constituição já cobre, e se não cobre, você a emenda formalmente antes de agir. Mudar o comportamento sem mudar a spec é como governar por decreto — rápido, mas instável.
:::

Uma spec não é um documento estático — ela evolui com o projeto. Mas a evolução deve ser controlada:

- **Versione a spec** — cada mudança significativa gera uma nova versão, não sobrescreve a anterior
- **Mude a spec antes do sistema** — qualquer novo comportamento começa como atualização da spec, não como ajuste direto no prompt
- **Use a spec para revisar** — ao testar o sistema, a spec é o gabarito. Se o sistema e a spec divergem, um dos dois está errado — e normalmente é o sistema

## Questões de fixação

:::questao Um desenvolvedor escreve na spec: "O agente deve ser útil e responder bem as perguntas dos usuários". Após implementar, o comportamento é inconsistente. Qual problema de Spec Engineering explica essa inconsistência?
a) spec está muito curta — o modelo precisa de pelo menos 500 palavras para entender o comportamento esperado
b) spec foi escrita em português — modelos performam melhor com specs em inglês
c) spec é ambígua — "útil" e "responder bem" não são critérios executáveis, o modelo interpreta como pode *
d) O modelo não suporta Spec Engineering — seria necessário usar fine-tuning para esse nível de controle
> A alternativa C está correta. "Útil" e "responder bem" são avaliações subjetivas — o modelo não tem como determinar o que é suficientemente útil para aquele contexto específico. Uma spec executável define comportamentos concretos: "responde em até 3 parágrafos", "usa exemplos de código quando a pergunta envolve sintaxe", "confirma o entendimento antes de responder perguntas ambíguas". Concretude é o que torna uma spec executável.
:::

:::questao Sobre o versionamento e evolução de uma spec, qual das afirmações a seguir NÃO é verdadeira?
a) Mudanças de comportamento devem começar pela atualização da spec, não pelo ajuste direto no sistema
b) spec funciona como gabarito para revisar se o sistema está se comportando conforme esperado
c) Versionar a spec permite rastrear por que o sistema se comporta de determinada forma em cada momento
d) Quando o sistema e a spec divergem, a spec deve ser atualizada para refletir o comportamento atual do sistema *
> A alternativa D está incorreta — e essa é a resposta. Quando sistema e spec divergem, o primeiro passo é entender por quê — não assumir que o sistema está certo. Se o sistema desenvolveu um comportamento não especificado que é desejável, a spec deve ser atualizada deliberadamente para incorporá-lo. Se o comportamento é indesejado, o sistema deve ser corrigido. Atualizar a spec automaticamente para refletir o sistema inverte a relação de autoridade — a spec perde sua função de fonte de verdade.
:::

## Atividade prática

Pegue a spec que você escreveu na aula anterior — o agente de dúvidas sobre Python — e reescreva-a usando os cinco elementos de Spec Engineering: objetivo, escopo, comportamentos numerados, exemplos concretos e restrições absolutas. Compare a versão original com a reescrita e identifique quais ambiguidades foram eliminadas.

:::importante
Spec reescrita com os cinco elementos claramente identificados por seção, mais um parágrafo comparando com a versão anterior: quais ambiguidades foram resolvidas e quais comportamentos ficaram mais previsíveis após a reescrita.
:::

:::roteiro
Abro o SKILL.md do CoimbraBot e leio as restrições absolutas em voz alta — "nunca usar aside", "nunca colocar # dentro de HTML", "sempre gerar exatamente 2 questões". Mostro como cada restrição é concreta, verificável e não deixa margem de interpretação. Depois comparo com uma versão hipotética vaga: "gerar questões adequadas ao nível dos alunos". A diferença entre as duas versões é a diferença entre Spec Engineering e intenção decorativa.
:::

## Fechamento

:::resumo
- Uma spec executável é estruturada, concreta e não deixa margem para interpretação subjetiva
- Os cinco elementos são: objetivo, escopo, comportamentos, exemplos e restrições
- A spec é fonte de verdade — mudanças começam nela, não no sistema
:::
