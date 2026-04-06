---
title: Memory e Arquivos de Projeto
description: LLMs não têm memória entre sessões — cada conversa começa do zero. Para projetos simples, isso não é problema. Para sistemas complexos desenvolvidos ao longo...
order: 20
published: true
---

# Aula 20 — Memory e Arquivos de Projeto

LLMs não têm memória entre sessões — cada conversa começa do zero. Para projetos simples, isso não é problema. Para sistemas complexos desenvolvidos ao longo de semanas ou meses, é fatal. A solução não é esperar que os modelos evoluam para ter memória persistente — é arquitetar a memória você mesmo, através de arquivos de projeto que carregam o contexto necessário em cada sessão. CLAUDE.md, SOUL.md, SKILL.md, AGENTS.md — esses arquivos são a memória externalizada do seu sistema de IA.

## O problema da amnésia entre sessões

:::conceito
**Definição:** Arquivos de projeto são documentos estruturados que carregam o contexto essencial de um sistema ou projeto para dentro de cada sessão de desenvolvimento ou execução. Eles substituem a memória que o modelo não tem por uma memória externalizada que você controla.
:::

O desenvolvedor que trabalha com IA sem arquivos de projeto passa metade do tempo re-explicando o que o sistema é, como funciona e quais são as regras. Com arquivos de projeto bem estruturados, você abre o editor, carrega os arquivos e a IA já sabe o contexto completo — arquitetura, convenções, restrições, histórico de decisões. A sessão começa onde a anterior terminou, não do zero.

## Os arquivos essenciais de um projeto de IA

:::importante
**Arquivo certo para o contexto certo:** Cada arquivo tem um papel específico. Misturar identidade do agente com convenções de código no mesmo arquivo cria confusão — o modelo não consegue priorizar o que é regra de comportamento e o que é preferência técnica. Separação clara entre arquivos é separação clara de responsabilidades.
:::

Os principais arquivos de projeto e o que cada um carrega:

- **CLAUDE.md / AGENTS.md** — contexto do projeto para o desenvolvedor: arquitetura, stack, convenções de código, comandos úteis e decisões técnicas registradas
- **SOUL.md** — identidade do agente: quem ele é, seus valores, seu tom, sua voz e o que o diferencia de um modelo genérico
- **SKILL.md** — capacidades específicas: como executar tarefas determinadas, formatos de saída, regras de comportamento em contextos específicos
- **SPEC.md** — especificação do sistema: o contrato de comportamento gerado nas aulas anteriores
- **PRD.md** — requisitos do produto: o documento de alto nível que orienta todas as decisões de implementação

## Estratégia de carregamento — o que injetar e quando

:::exemplo
Arquivos de projeto são como o dossiê que um agente recebe antes de uma missão: tudo que precisa saber para começar a agir sem briefing adicional. Cada missão pode ter um dossiê diferente — mas o agente que recebe o dossiê completo e bem organizado performa infinitamente melhor do que o que recebe um resumo verbal apressado.
:::

Nem todo arquivo precisa ser carregado em toda sessão. A estratégia de carregamento depende da tarefa:

- **Sessão de desenvolvimento** — CLAUDE.md + SPEC.md + código relevante da tarefa atual
- **Sessão de identidade e comportamento** — SOUL.md + SKILL.md relevante para a tarefa do agente
- **Sessão de planejamento** — PRD.md + SPEC.md + histórico de decisões
- **Execução em produção** — SOUL.md + SKILL.md injetados no system prompt + RAG para dados dinâmicos

O objetivo é sempre o mesmo: máxima relevância, mínimo volume desnecessário.

## Questões de fixação

:::questao Um desenvolvedor trabalha num agente de IA há três semanas. A cada nova sessão com Claude Code, precisa re-explicar a arquitetura, as convenções de código e as decisões tomadas nas semanas anteriores. Qual arquivo de projeto resolve diretamente esse problema?
a) SOUL.md — define a identidade do agente para que o modelo saiba quem ele é em cada sessão
b) PRD.md — descreve o produto e seus requisitos para orientar as decisões de desenvolvimento
c) CLAUDE.md — carrega arquitetura, stack, convenções e decisões técnicas registradas para o desenvolvedor *
d) SKILL.md — define as capacidades do agente para que ele execute tarefas específicas corretamente
> A alternativa C está correta. O CLAUDE.md é o arquivo de contexto do projeto para o desenvolvedor. Ele carrega o que o modelo precisa saber sobre o projeto para continuar o desenvolvimento: arquitetura, stack, convenções, comandos e decisões técnicas registradas. É o primeiro arquivo a ser lido no início de qualquer sessão de desenvolvimento — exatamente para eliminar o re-briefing.
:::

:::questao Sobre estratégia de carregamento de arquivos de projeto, qual das afirmações a seguir NÃO é verdadeira?
a) Diferentes sessões requerem diferentes combinações de arquivos dependendo da tarefa
b) Em produção, SOUL.md e SKILL.md são injetados no system prompt do agente em execução
c) O objetivo da estratégia de carregamento é máxima relevância com mínimo volume desnecessário
d) Todos os arquivos de projeto devem ser carregados em toda sessão para garantir que o modelo tenha contexto completo *
> A alternativa D está incorreta — e essa é a resposta. Carregar todos os arquivos em toda sessão viola o princípio de relevância do Context Engineering: contexto irrelevante polui a atenção do modelo. Uma sessão de desenvolvimento não precisa do SOUL.md do agente — precisa do CLAUDE.md e da spec. Uma sessão de identidade não precisa do PRD inteiro. A estratégia de carregamento é uma decisão de design, não uma política de "quanto mais, melhor".
:::

## Atividade prática

Crie a estrutura de arquivos de projeto para o agente Python assistente que você especificou nas aulas anteriores. Escreva o conteúdo inicial de pelo menos três arquivos: SOUL.md com a identidade do agente, SKILL.md com as capacidades de tutoria e CLAUDE.md com as convenções de desenvolvimento do projeto.

:::importante
Três arquivos Markdown — SOUL.md, SKILL.md e CLAUDE.md — com conteúdo inicial para o agente Python. Cada arquivo deve ser funcional: ao carregar os três numa sessão com Claude, o modelo deve entender completamente o projeto sem perguntas adicionais.
:::

:::roteiro
Abro ao vivo o SOUL.md e o SKILL.md do OpenClaw e leio as seções principais. Mostro como esses arquivos são referenciados no system prompt de cada agente. Depois mostro o CLAUDE.md de um dos projetos e explico como cada seção elimina uma categoria de pergunta que eu teria que responder toda sessão. A sensação de "isso é simples e resolve um problema real" é o momento de adesão — a maioria vai querer criar os próprios arquivos logo depois.
:::

## Fechamento

:::resumo
- Arquivos de projeto externalizam a memória que o LLM não tem entre sessões
- CLAUDE.md, SOUL.md, SKILL.md e SPEC.md têm papéis distintos e complementares
- A estratégia de carregamento define quais arquivos injetar em cada tipo de sessão — relevância acima de volume
:::
