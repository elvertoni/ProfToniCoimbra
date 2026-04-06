---
title: PRD — Product Requirements Document
description: A spec define como o sistema se comporta. O PRD define o que o produto é, para quem existe e por que alguém pagaria por ele. O Product Requirements Document ...
order: 19
published: true
---

# Aula 19 — PRD — Product Requirements Document

A spec define como o sistema se comporta. O PRD define o que o produto é, para quem existe e por que alguém pagaria por ele. O Product Requirements Document é o documento que conecta o problema de negócio à solução técnica — e com IA gerando código em velocidade industrial, o PRD se tornou ainda mais crítico. Sem ele, a IA constrói o produto errado com eficiência impressionante. Com ele, cada decisão técnica tem uma âncora no problema real que o produto existe para resolver.

## O que é um PRD e por que ele importa agora mais do que nunca

:::conceito
**Definição:** PRD é o documento que descreve o produto a ser construído: quem são os usuários, qual problema eles têm, quais funcionalidades resolvem esse problema, quais são os critérios de sucesso e quais são as restrições de prazo, orçamento e escopo.
:::

Antes da IA, o PRD era importante porque alinhava times grandes. Agora ele é crítico porque a IA executa rápido demais — sem um PRD claro, você entrega a funcionalidade errada em tempo recorde. O desenvolvedor solo que usa IA como parceira de desenvolvimento precisa de um PRD tanto quanto um time de 20 pessoas: é o documento que responde "estamos construindo a coisa certa?" antes de perguntar "estamos construindo certo?".

## Os seis componentes de um PRD para produtos com IA

:::importante
**PRD de software tradicional vs PRD com IA:** Um PRD tradicional descreve funcionalidades determinísticas — clique aqui, acontece isso. Um PRD para produto com IA precisa de dois componentes adicionais: o comportamento esperado do modelo em situações ambíguas e os critérios de qualidade da saída gerada — porque IA não é binária, é probabilística.
:::

Os seis componentes de um PRD para produtos com IA:

- **Problema** — qual dor existe, para quem e com que frequência e intensidade
- **Usuários** — quem são, qual seu nível técnico e o que eles sabem e não sabem sobre IA
- **Funcionalidades** — o que o produto faz, priorizadas por valor e separadas em MVP e versões futuras
- **Comportamento do modelo** — como a IA deve se comportar em cenários de sucesso, falha e ambiguidade
- **Critérios de qualidade** — o que define uma boa resposta ou ação da IA neste produto específico
- **Restrições** — prazo, orçamento, privacidade, regulação e dependências técnicas

## PRD como ferramenta de conversa com a IA

:::exemplo
Um PRD bem escrito é como o briefing de uma agência de publicidade: o cliente não diz "faça um anúncio bonito" — descreve o público, a mensagem, o canal e o resultado esperado. A agência executa com criatividade dentro de um espaço bem definido. A IA faz o mesmo: criatividade e velocidade dentro do espaço que o PRD delimita.
:::

Com um PRD bem escrito, você pode fornecer o documento inteiro à IA e pedir: "com base neste PRD, gere a spec técnica do módulo X", ou "sugira a arquitetura de agentes para atender os requisitos desta seção", ou "identifique os riscos técnicos que este PRD não endereça". O PRD vira o contexto de alto nível que orienta toda a conversa de implementação — você não começa do zero em cada sessão, começa do produto.

## Questões de fixação

:::questao Um time está construindo um assistente de IA para triagem de currículos. O PRD descreve as funcionalidades mas não especifica o comportamento do modelo quando um currículo é ambíguo — por exemplo, experiência que pode ser relevante ou não dependendo da interpretação. Qual risco direto essa lacuna cria?
a) O sistema vai rejeitar todos os currículos ambíguos para evitar erros de classificação
b) O modelo vai pedir confirmação ao usuário em todos os casos, mesmo os óbvios
c) O comportamento em casos ambíguos será inconsistente — o modelo tomará decisões diferentes para entradas similares *
d) O sistema vai funcionar perfeitamente porque o modelo infere o comportamento correto a partir das funcionalidades descritas
> A alternativa C está correta. Sem especificação do comportamento em casos ambíguos, o modelo decide sozinho — e decisões probabilísticas para entradas similares geram resultados inconsistentes. Em sistemas de triagem isso é crítico: dois currículos igualmente ambíguos podem receber classificações opostas dependendo de variações mínimas no contexto. O PRD deve antecipar esses casos e definir a política explicitamente.
:::

:::questao Sobre o uso do PRD no desenvolvimento com IA, qual das afirmações a seguir NÃO é verdadeira?
a) O PRD pode ser fornecido à IA como contexto para gerar specs técnicas e arquiteturas de implementação
b) Produtos com IA precisam de componentes adicionais no PRD para cobrir comportamento do modelo e critérios de qualidade
c) O PRD responde "estamos construindo a coisa certa" antes de perguntar "estamos construindo certo"
d) Um desenvolvedor solo que usa IA não precisa de PRD — o documento só faz sentido para times grandes com múltiplos stakeholders *
> A alternativa D está incorreta — e essa é a resposta. O desenvolvedor solo com IA precisa de PRD talvez mais do que um time grande — porque a IA executa tão rápido que sem um documento de referência é fácil construir a funcionalidade errada em tempo recorde. O PRD não é sobre coordenar pessoas: é sobre manter o foco no problema certo durante todo o desenvolvimento, independente do tamanho do time.
:::

## Atividade prática

Escreva o PRD de um produto com IA que você gostaria de construir ou que seria útil no seu contexto profissional. Cubra os seis componentes. Na seção de comportamento do modelo, descreva pelo menos dois cenários de borda e como o sistema deve se comportar em cada um.

:::importante
PRD completo com os seis componentes, priorizando clareza sobre completude. O documento deve ser específico o suficiente para que outra pessoa consiga escrever a spec técnica a partir dele sem fazer perguntas adicionais sobre o produto.
:::

:::roteiro
Mostro o PRD do ProfessorDash como exemplo real — destaco especialmente a seção de comportamento do CoimbraBot em casos ambíguos: o que acontece quando o aluno pede um conteúdo fora da grade, quando o tema é muito avançado para a série, quando não há material de referência disponível. Cada caso tem uma política explícita. Depois abro o template em branco e preencho ao vivo com a turma um PRD para um produto hipotético simples — o processo colaborativo é mais valioso que o resultado.
:::

## Fechamento

:::resumo
- PRD conecta o problema de negócio à solução técnica antes de qualquer implementação
- Produtos com IA precisam de componentes extras: comportamento do modelo e critérios de qualidade da saída
- O PRD é o contexto de alto nível que orienta toda a conversa de implementação com a IA
:::
