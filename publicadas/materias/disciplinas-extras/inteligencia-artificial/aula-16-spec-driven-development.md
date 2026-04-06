---
title: Spec Driven Development
description: Existe uma forma de trabalhar com IA que parece rápida mas gera retrabalho infinito — e existe uma forma que parece mais lenta no início mas entrega sistemas...
order: 16
published: true
---

# Aula 16 — Spec Driven Development

Existe uma forma de trabalhar com IA que parece rápida mas gera retrabalho infinito — e existe uma forma que parece mais lenta no início mas entrega sistemas robustos e previsíveis. A primeira é o improviso prompt a prompt. A segunda é o Spec Driven Development: a prática de escrever a especificação do sistema antes de escrever qualquer código ou prompt. Quando você define claramente o que o sistema deve fazer, como deve se comportar e quais são seus limites, a IA vira um executor preciso — não um colaborador imprevisível.

## O que é Spec Driven Development

:::conceito
**Definição:** Spec Driven Development é a abordagem onde a especificação completa do sistema — comportamento esperado, casos de uso, restrições e critérios de sucesso — é escrita antes de qualquer implementação. A IA executa a partir da spec, não a partir de instruções vagas iteradas no chat.
:::

O ciclo tradicional sem spec é: "IA, faça isso" → resultado ruim → "não, faça assim" → resultado diferente mas ainda errado → repetição infinita. Com Spec Driven Development, o ciclo é: escreve a spec → valida a spec com stakeholders → implementa a partir da spec → testa contra a spec. A IA recebe contexto completo de uma vez, entende o sistema como um todo e gera código ou prompts alinhados com a intenção original — sem perda de contexto entre sessões.

## Os três componentes de uma spec eficaz

:::importante
**Spec vs documentação:** Documentação descreve o que foi construído. Spec descreve o que deve ser construído — antes de existir. Uma spec eficaz é precisa o suficiente para que dois desenvolvedores diferentes, lendo-a independentemente, cheguem a implementações compatíveis. Se a interpretação varia, a spec está incompleta.
:::

Uma spec eficaz tem três componentes obrigatórios:

- **Comportamento esperado** — o que o sistema faz em cada cenário possível, incluindo os casos de borda e os fluxos de erro
- **Restrições** — o que o sistema não faz, não pode fazer e como lida com entradas inválidas ou situações não previstas
- **Critérios de sucesso** — como saberemos que o sistema está funcionando corretamente? Métricas mensuráveis, não julgamentos subjetivos

O terceiro componente é o mais ignorado e o mais importante: sem critérios de sucesso, não há como saber quando parar de iterar.

## Spec Driven Development com IA — o fluxo completo

:::exemplo
Construir sem spec é como pedir para um arquiteto construir "uma casa boa". Construir com spec é dar a ele a planta, o memorial descritivo e o cronograma. O resultado é previsível, auditável e entregue no prazo — não porque o arquiteto é melhor, mas porque o pedido é claro.
:::

O fluxo completo com IA tem cinco etapas:

- **Escrever a spec** — em linguagem natural estruturada, cobrindo os três componentes
- **Validar com IA** — pedir ao modelo para identificar ambiguidades, lacunas e casos não cobertos
- **Implementar a partir da spec** — fornecer a spec completa como contexto em cada sessão de implementação
- **Testar contra a spec** — cada critério de sucesso vira um teste ou validação
- **Atualizar a spec antes do código** — qualquer mudança começa pela spec, não pelo código

## Questões de fixação

:::questao Um desenvolvedor está construindo um agente de IA com Claude e percebe que, a cada nova sessão, precisa re-explicar o que o sistema deve fazer. Qual prática do Spec Driven Development resolve diretamente esse problema?
a) Usar um modelo com janela de contexto maior para que ele lembre das sessões anteriores
b) Salvar o histórico do chat e colá-lo no início de cada nova sessão
c) Escrever a spec completa do sistema e fornecê-la como contexto no início de cada sessão de implementação *
d) Dividir o projeto em tasks menores para que cada sessão caiba numa única conversa
> A alternativa C está correta. A spec é o contexto persistente do projeto — ela não depende do histórico do chat. Em cada nova sessão, o desenvolvedor fornece a spec e a IA tem todo o contexto necessário para continuar de onde parou, sem re-explicação. A spec substitui a memória do chat como fonte de verdade do projeto.
:::

:::questao Sobre os componentes de uma spec eficaz, qual das afirmações a seguir NÃO é verdadeira?
a) Comportamento esperado deve cobrir casos de borda e fluxos de erro, não apenas o caminho feliz
b) Restrições definem o que o sistema não faz — limites tão importantes quanto as capacidades
c) Critérios de sucesso devem ser mensuráveis para que seja possível saber quando parar de iterar
d) spec deve ser escrita após a implementação inicial para refletir o que foi realmente construído *
> A alternativa D está incorreta — e essa é a resposta. Escrever a spec depois é documentação, não Spec Driven Development. A spec escrita após a implementação descreve o que foi feito — com todos os seus atalhos, débitos técnicos e decisões de último minuto. A spec escrita antes define o que deve ser feito — e orienta a implementação. A ordem importa fundamentalmente.
:::

## Atividade prática

Escreva a spec de um agente simples: um assistente que responde dúvidas sobre a linguagem Python para alunos iniciantes. Cubra os três componentes obrigatórios — comportamento esperado em pelo menos três cenários, restrições explícitas e três critérios de sucesso mensuráveis. Depois identifique dois casos de borda que a spec deve cobrir e que seriam ignorados numa abordagem de improviso.

:::importante
Spec completa do agente Python com os três componentes preenchidos e os dois casos de borda identificados. A spec deve ser clara o suficiente para que outra pessoa implemente o agente sem fazer perguntas adicionais.
:::

:::roteiro
Mostro ao vivo a spec do TRIARIO — documento real que guia o desenvolvimento. Leio um trecho do comportamento esperado e mostro como ele se traduz diretamente numa parte do system prompt do agente. Depois mostro o que acontecia antes da spec existir: retrabalho em cada sessão, decisões inconsistentes, código difícil de manter. O contraste entre "antes e depois da spec" é o argumento mais convincente para adotar a prática.
:::

## Fechamento

:::resumo
- Spec Driven Development escreve a especificação completa antes de qualquer implementação
- Uma spec eficaz cobre comportamento esperado, restrições e critérios de sucesso mensuráveis
- A spec é o contexto persistente do projeto — substitui a memória do chat entre sessões
:::
