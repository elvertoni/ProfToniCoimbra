---
title: System Prompts e Identidade de Agentes
description: Todo agente de IA começa com uma identidade — e essa identidade vive no system prompt. É ele que define quem o modelo é, como ele se comporta, o que ele pode...
order: 7
published: true
---

# Aula 07 — System Prompts e Identidade de Agentes

Todo agente de IA começa com uma identidade — e essa identidade vive no system prompt. É ele que define quem o modelo é, como ele se comporta, o que ele pode e o que ele não faz. Sem um system prompt bem construído, você tem um modelo genérico. Com um bem feito, você tem um especialista com personalidade, foco e limites claros. Esta aula mostra como projetar identidades de agentes que funcionam de forma consistente, previsível e alinhada ao propósito para o qual foram criados.

## O que é o system prompt

:::conceito
**Definição:** O system prompt é uma instrução enviada ao modelo antes de qualquer mensagem do usuário. Ele é invisível para o usuário final mas molda todo o comportamento do agente — seu papel, seu tom, suas regras e seus limites de atuação.
:::

Quando você acessa o ChatGPT, o Claude ou qualquer produto com IA, há um system prompt rodando por baixo que você não vê. É ele que faz o assistente de suporte técnico de uma empresa não responder sobre concorrentes, ou que faz um tutor educacional sempre pedir que o aluno tente antes de dar a resposta. O system prompt é a camada de configuração do agente — e dominá-lo é essencial para quem constrói sistemas com IA.

## Os cinco componentes de um system prompt de qualidade

:::importante
**Identidade vs instrução:** System prompts fracos listam tarefas. System prompts fortes constroem identidade. Um agente que sabe quem é responde melhor do que um agente que só sabe o que fazer — porque a identidade guia decisões em situações não previstas.
:::

Um system prompt robusto tem cinco componentes:

- **Nome e papel** — quem é o agente e qual sua especialidade
- **Tom e estilo** — como ele se comunica: formal, direto, didático, técnico
- **Escopo** — o que ele faz e, tão importante, o que ele não faz
- **Regras de comportamento** — como agir em situações específicas ou ambíguas
- **Formato de saída** — como estruturar as respostas por padrão

Cada componente reduz a variabilidade do modelo e aumenta a previsibilidade do sistema.

## Identidade persistente — arquivos SOUL e SKILL

:::exemplo
Um system prompt é como o contrato de trabalho de um funcionário: define o cargo, as responsabilidades e as regras da empresa. Um arquivo de identidade como SOUL.md é como a cultura da empresa internalizada — vai além das regras e define valores que guiam decisões quando as regras não preveem a situação.
:::

Em sistemas de agentes mais elaborados, a identidade não fica só no system prompt da chamada — ela é externalizada em arquivos de referência como `SOUL.md` (quem o agente é, seus valores e sua voz) e `SKILL.md` (o que ele sabe fazer e como executar tarefas específicas). Esses arquivos são injetados no contexto quando necessário, permitindo que múltiplos agentes compartilhem a mesma identidade de forma consistente entre sessões e plataformas. É a diferença entre um agente que "lembra quem é" e um que começa do zero a cada conversa.

## Questões de fixação

:::questao Uma empresa cria um agente de IA para suporte ao cliente. Sem system prompt, o agente responde sobre concorrentes, usa linguagem informal e às vezes sugere que o cliente cancele o serviço. Qual componente do system prompt teria prevenido esses três problemas?
a) Nome e papel — definir o nome do agente resolve inconsistências de comportamento
b) Formato de saída — padronizar as respostas evita que o modelo fale sobre concorrentes
c) Escopo e regras de comportamento — definem o que o agente faz, o que não faz e como agir em situações ambíguas *
d) Tom e estilo — ajustar o tom para formal impede respostas sobre cancelamento
> A alternativa C está correta. Escopo define os limites de atuação — "não fale sobre concorrentes", "não sugira cancelamento" — e regras de comportamento cobrem situações específicas como linguagem e postura. Tom e estilo ajudam na formalidade, mas não resolvem os problemas de escopo. Os três comportamentos problemáticos são questões de limite e regra, não de estilo.
:::

:::questao Sobre arquivos de identidade como SOUL.md e SKILL.md em sistemas de agentes, qual das afirmações a seguir NÃO é verdadeira?
a) Esses arquivos permitem que múltiplos agentes compartilhem a mesma identidade de forma consistente
b) SOUL.md define valores e voz do agente além das regras explícitas do system prompt
c) Externalizar a identidade em arquivos permite reutilizá-la em diferentes plataformas e sessões
d) Arquivos de identidade substituem completamente o system prompt e tornam desnecessário configurar o agente a cada chamada *
> A alternativa D está incorreta — e essa é a resposta. Arquivos de identidade complementam o system prompt, não o substituem. Eles são injetados no contexto como referência, mas o sistema ainda precisa de uma instrução de sistema na chamada que diga ao modelo como e quando usar esses arquivos. Identidade externa e system prompt trabalham juntos.
:::

## Atividade prática

Escreva o system prompt de um agente chamado **DevBot** — um assistente técnico para desenvolvedores Python iniciantes. Inclua os cinco componentes: nome e papel, tom e estilo, escopo, regras de comportamento e formato de saída. O agente deve incentivar o aluno a tentar antes de dar a resposta pronta.

:::importante
System prompt completo do DevBot em texto corrido ou com seções marcadas, cobrindo os cinco componentes. Testar o prompt numa ferramenta como ChatGPT ou Claude e incluir print de uma interação de teste.
:::

:::roteiro
Mostro ao vivo dois chats side-by-side: um sem system prompt e um com o system prompt do CoimbraBot ou OpenClaw. Faço a mesma pergunta nos dois e mostro a diferença de tom, profundidade e formato. O impacto visual é imediato. Depois abro o arquivo SOUL.md como exemplo real de identidade externalizada — os alunos ficam surpresos que isso existe e é texto simples.
:::

## Fechamento

:::resumo
- O system prompt define identidade, tom, escopo, regras e formato do agente antes de qualquer mensagem
- Um bom system prompt constrói identidade, não apenas lista tarefas
- Arquivos como SOUL.md e SKILL.md externalizam a identidade para reutilização consistente entre sessões e agentes
:::
