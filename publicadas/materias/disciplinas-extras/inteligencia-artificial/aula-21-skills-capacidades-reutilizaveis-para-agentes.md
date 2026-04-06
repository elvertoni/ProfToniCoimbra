---
title: Skills — Capacidades Reutilizáveis para Agentes
description: Todo desenvolvedor aprende a não repetir código — DRY, Don't Repeat Yourself. Mas na maioria dos projetos de IA, comportamentos complexos são reescritos em c...
order: 21
published: true
---

# Aula 21 — Skills — Capacidades Reutilizáveis para Agentes

Todo desenvolvedor aprende a não repetir código — DRY, Don't Repeat Yourself. Mas na maioria dos projetos de IA, comportamentos complexos são reescritos em cada novo prompt, em cada novo agente, em cada novo sistema. Skills são a resposta para esse problema: blocos de comportamento bem definidos, testados e reutilizáveis que podem ser injetados em qualquer agente que precise daquela capacidade. É a modularidade aplicada à engenharia de IA — e dominar esse conceito é o que separa sistemas frágeis de sistemas que escalam.

## O que é uma Skill

:::conceito
**Definição:** Skill é um arquivo que encapsula uma capacidade específica de um agente: o que ele sabe fazer, como deve fazer, em qual formato deve entregar e quais regras nunca pode violar naquela tarefa. Uma skill bem escrita pode ser injetada em qualquer agente que precise daquela capacidade sem modificação.
:::

A diferença entre uma skill e um prompt comum é a intenção de reutilização. Um prompt é escrito para uma tarefa específica numa sessão específica. Uma skill é escrita para ser usada repetidamente, em contextos diferentes, por agentes diferentes — mantendo consistência em cada uso. O SKILL.md do CoimbraBot, por exemplo, define como gerar aulas no formato do ProfessorDash. Esse comportamento pode ser injetado no Claude Desktop, no Claude Code ou em qualquer agente que precise gerar aulas — sempre com o mesmo resultado.

## Anatomia de uma Skill eficaz

:::importante
**Skill genérica vs skill específica:** Uma skill genérica demais não agrega: "escreva bem" não é uma skill, é um desejo. Uma skill específica demais não reutiliza: "escreva exatamente essa frase" não é uma skill, é uma instrução. O ponto certo é: capacidade claramente definida, com variação controlada dentro de limites explícitos.
:::

Uma skill eficaz tem cinco partes:

- **Nome e propósito** — o que essa skill habilita o agente a fazer, em uma frase
- **Gatilho** — como o agente sabe quando aplicar essa skill — contexto, palavras-chave, tipo de tarefa
- **Comportamento** — o passo a passo de como executar a capacidade
- **Formato de saída** — estrutura, estilo, comprimento e elementos obrigatórios da entrega
- **Restrições** — o que nunca pode acontecer na execução dessa skill, independente do contexto

## Skills como biblioteca de capacidades

:::exemplo
Skills são como funções numa biblioteca de código: você escreve uma vez, testa bem, documenta claramente e importa onde precisar. A diferença é que em vez de importar para um compilador, você injeta no contexto do agente. O princípio DRY — Don't Repeat Yourself — se aplica à engenharia de IA da mesma forma que à engenharia de software.
:::

Um sistema maduro de IA tem uma biblioteca de skills que cresce com o projeto:

- **Skill de geração de aula** — como o CoimbraBot estrutura materiais didáticos
- **Skill de análise jurídica** — como o TRIARIO avalia admissibilidade de recursos
- **Skill de triagem** — como classificar e priorizar itens de uma lista
- **Skill de revisão de código** — como revisar Python com foco em performance
- **Skill de comunicação** — como formatar respostas para canais específicos (Slack, e-mail, relatório)

Cada skill é independente, testável e combinável com outras. Um agente pode ter múltiplas skills ativas simultaneamente, cada uma injetada condicionalmente quando a tarefa atual a requer.

## Questões de fixação

:::questao Um desenvolvedor tem três agentes diferentes — um para suporte, um para análise de dados e um para geração de relatórios — e todos precisam formatar respostas no padrão de comunicação da empresa. Ele está reescrevendo as regras de formatação em cada system prompt. Qual abordagem com Skills resolveria esse problema?
a) Criar um único agente que centraliza todas as tarefas e aplica a formatação uma vez
b) Usar um LLM diferente para cada agente, cada um especializado num estilo de comunicação
c) Criar uma Skill de comunicação com as regras de formatação e injetá-la nos três agentes *
d) Criar um agente de formatação que pós-processa a saída dos outros três antes de entregar ao usuário
> A alternativa C está correta. Uma Skill de comunicação encapsula as regras de formatação uma única vez — testada, documentada e versionada. Os três agentes injetam a mesma skill e mantêm consistência sem duplicação. Se as regras de formatação mudarem, você atualiza a skill em um lugar e todos os agentes herdam a mudança. É exatamente o princípio DRY aplicado à engenharia de IA.
:::

:::questao Sobre Skills em sistemas de agentes, qual das afirmações a seguir NÃO é verdadeira?
a) Uma skill bem escrita pode ser injetada em diferentes agentes sem modificação
b) Skills são reutilizáveis porque encapsulam comportamento com gatilho, execução e restrições definidos
c) Um agente pode ter múltiplas skills ativas, cada uma injetada condicionalmente pela tarefa atual
d) Skills substituem o SOUL.md — uma vez que o agente tem skills suficientes, a identidade é desnecessária *
> A alternativa D está incorreta — e essa é a resposta. Skills e SOUL.md têm papéis completamente distintos e complementares. SOUL.md define quem o agente é — sua identidade, valores e voz. Skills definem o que ele sabe fazer — suas capacidades específicas. Um agente sem identidade executa as skills de forma genérica e inconsistente. Um agente sem skills tem boa identidade mas sem capacidades estruturadas. Os dois são necessários e nenhum substitui o outro.
:::

## Atividade prática

Escreva uma Skill completa para o agente Python assistente das aulas anteriores. A skill deve cobrir a capacidade de explicar conceitos de programação para iniciantes. Inclua as cinco partes: nome e propósito, gatilho, comportamento passo a passo, formato de saída e pelo menos duas restrições absolutas. Depois teste a skill fornecendo-a ao Claude junto com um pedido de explicação de um conceito Python.

:::importante
Arquivo SKILL.md completo com as cinco partes preenchidas, mais print da sessão de teste mostrando o Claude aplicando a skill para explicar um conceito Python escolhido pelo aluno. A saída deve ser claramente diferente de uma resposta genérica do modelo sem a skill.
:::

:::roteiro
Esta é a aula de fechamento da apostila — faço questão de conectar todos os módulos. Mostro como uma skill do Módulo 5 usa embeddings do Módulo 3 para buscar exemplos relevantes, é executada por um agente do Módulo 4 que usa MCP para acessar dados externos, e foi especificada com Spec Engineering do Módulo 5. A apostila inteira é um sistema — cada peça se encaixa nas outras. Encerro perguntando: "qual skill você vai escrever esta semana?" — não é retórica, é o primeiro passo real de quem dominou a engenharia de intenção.
:::

## Fechamento

:::resumo
- Skills encapsulam capacidades reutilizáveis — escritas uma vez, injetadas onde forem necessárias
- Uma skill eficaz tem nome, gatilho, comportamento, formato de saída e restrições
- Skills e SOUL.md são complementares — identidade e capacidade constroem juntos um agente consistente
:::
