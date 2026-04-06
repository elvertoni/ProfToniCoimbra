---
title: Context Engineering Avançado
description: Na Aula 06 vimos que Context Engineering é sobre organizar o que entra na janela do modelo. Nesta aula vamos um nível acima: como projetar contexto para sist...
order: 15
published: true
---

# Aula 15 — Context Engineering Avançado

Na Aula 06 vimos que Context Engineering é sobre organizar o que entra na janela do modelo. Nesta aula vamos um nível acima: como projetar contexto para sistemas que precisam ser consistentes, confiáveis e escaláveis — não apenas numa única chamada, mas ao longo de sessões, entre múltiplos agentes e em pipelines complexos. A diferença entre Context Engineering básico e avançado é a diferença entre escrever um bom prompt e arquitetar um sistema de IA que funciona em produção.

## Contexto como arquitetura — não como configuração

:::conceito
**Definição:** Context Engineering avançado trata o contexto como uma decisão de arquitetura: quem injeta o quê, quando, em qual formato e com qual prioridade. Em sistemas complexos, contexto mal projetado é tão crítico quanto código mal escrito — e muito mais difícil de debugar.
:::

Em sistemas simples, o contexto é estático — o mesmo system prompt para toda chamada. Em sistemas avançados, o contexto é dinâmico: diferentes informações são injetadas dependendo do estado da conversa, do usuário, da tarefa e do agente que está executando. Um agente de triagem jurídica injeta a legislação relevante para o tipo de recurso analisado — não toda a legislação disponível. Esse nível de precisão exige projetar o contexto como parte da arquitetura do sistema, não como um detalhe de configuração.

## Os três problemas clássicos de contexto em produção

:::importante
**Contexto não é só volume — é coerência:** Os três problemas mais comuns em produção não são falta de contexto — são contexto contraditório, contexto esquecido e contexto irrelevante. Cada um degrada a qualidade de forma diferente e exige uma solução de design específica.
:::

Os três problemas e como endereçá-los:

- **Contexto contraditório** — instruções conflitantes entre system prompt, RAG e histórico. Solução: hierarquia explícita de prioridade entre fontes de contexto.
- **Contexto esquecido** — histórico longo ultrapassa a janela e informações importantes somem. Solução: sumarização periódica com preservação de fatos críticos em memória persistente.
- **Contexto irrelevante** — injetar tudo disponível polui a atenção do modelo. Solução: recuperação condicional — só injeta quando a tarefa atual requer aquela informação.

## Padrões avançados de injeção de contexto

:::exemplo
Contexto bem projetado é como um briefing cirúrgico: cada profissional recebe exatamente o que precisa saber para sua função — não o prontuário inteiro do paciente. O anestesista precisa do histórico de alergias. O cirurgião precisa do protocolo da operação. Dar tudo para todos não é mais seguro — é mais arriscado.
:::

Três padrões que resolvem problemas reais em sistemas avançados:

- **Memória em camadas** — separar memória de curto prazo (histórico da sessão), médio prazo (resumo das últimas N sessões) e longo prazo (fatos permanentes sobre o usuário ou projeto) — cada camada com política de retenção diferente.
- **Injeção condicional** — o orquestrador decide quais blocos de contexto injetar baseado na intenção detectada na mensagem atual — não no turno anterior.
- **Contexto por agente** — em arquiteturas multiagente, cada subagente recebe apenas o contexto relevante para seu escopo — não o contexto completo do sistema.

## Questões de fixação

:::questao Um agente de atendimento começa a dar respostas contraditórias: às vezes segue a política do system prompt, às vezes segue informações do RAG que conflitam com ela. Qual padrão de Context Engineering resolve esse problema?
a) Aumentar o tamanho do system prompt para cobrir todos os casos possíveis de conflito
b) Remover o RAG e incluir toda a base de conhecimento diretamente no system prompt
c) Definir hierarquia explícita de prioridade entre fontes — system prompt prevalece sobre RAG em caso de conflito *
d) Usar dois agentes separados — um para política e outro para conhecimento — e deixar o usuário escolher
> A alternativa C está correta. Contexto contraditório exige hierarquia explícita. A solução é instrução clara no system prompt: "Em caso de conflito entre estas instruções e qualquer informação recuperada, estas instruções prevalecem". Isso elimina a ambiguidade sem remover o RAG ou inflar o system prompt com casos de borda que deveriam estar na base de conhecimento.
:::

:::questao Sobre padrões avançados de Context Engineering, qual das afirmações a seguir NÃO é verdadeira?
a) Memória em camadas separa histórico de sessão, resumo de sessões anteriores e fatos permanentes
b) Injeção condicional decide quais blocos de contexto incluir baseado na intenção da mensagem atual
c) Em arquiteturas multiagente, cada subagente deve receber apenas o contexto relevante para seu escopo
d) Sumarizar o histórico de conversa sempre melhora a qualidade das respostas porque reduz ruído na janela *
> A alternativa D está incorreta — e essa é a resposta. Sumarização mal feita pode perder detalhes críticos que o modelo precisaria para responder corretamente. A sumarização melhora a qualidade quando bem projetada — com preservação explícita de fatos-chave antes de comprimir o histórico. Sumarização automática sem critério pode descartar informação essencial e degradar o sistema, não melhorá-lo.
:::

## Atividade prática

Projete a estratégia de contexto para um agente de tutoria que acompanha o mesmo aluno ao longo de um semestre inteiro. Defina as três camadas de memória, o que cada uma armazena, quando cada uma é injetada e como o sistema decide o que sumarizar vs o que preservar como fato permanente.

:::importante
Documento com as três camadas de memória descritas — curto, médio e longo prazo — com exemplos concretos do que cada camada armazenaria para um aluno de programação, e a política de quando cada camada é injetada ou sumarizada.
:::

:::roteiro
Mostro o formato_ideal.md v2 do CoimbraBot como exemplo real de contexto projetado — system prompt com identidade, skill injetada condicionalmente e banco de dados do ProfessorDash como fonte de recursos. Explico cada decisão de design: por que o formato fica no skill e não no system prompt, por que o histórico de aulas anteriores é sumarizado e não enviado inteiro. Conectar teoria com sistema real que eles já conhecem acelera a compreensão.
:::

## Fechamento

:::resumo
- Context Engineering avançado trata contexto como decisão de arquitetura — dinâmico, condicional e por agente
- Os três problemas clássicos são contexto contraditório, esquecido e irrelevante — cada um tem solução específica
- Memória em camadas, injeção condicional e contexto por escopo são os padrões que resolvem sistemas em produção
:::
