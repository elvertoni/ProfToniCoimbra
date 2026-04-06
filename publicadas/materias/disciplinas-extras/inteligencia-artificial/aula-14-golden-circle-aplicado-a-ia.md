---
title: Golden Circle Aplicado à IA
description: A maioria dos desenvolvedores começa um projeto de IA pela ferramenta: "vou usar o GPT-4", "vou montar um RAG", "vou criar um agente". O resultado costuma se...
order: 14
published: true
---

# Aula 14 — Golden Circle Aplicado à IA

A maioria dos desenvolvedores começa um projeto de IA pela ferramenta: "vou usar o GPT-4", "vou montar um RAG", "vou criar um agente". O resultado costuma ser um sistema tecnicamente correto que não resolve o problema real — porque a pergunta errada foi feita primeiro. O Golden Circle, framework criado por Simon Sinek, inverte essa lógica: começa pelo porquê, passa pelo como e só então chega ao quê. Aplicado à IA, ele é o antídoto para projetos que impressionam na demo e decepcionam na produção.

## O que é o Golden Circle

:::conceito
**Definição:** O Golden Circle é um modelo de pensamento com três camadas concêntricas: Por quê — o propósito e o problema real; Como — a abordagem e as restrições; O quê — a solução, o produto, a tecnologia. Grandes decisões começam pelo centro e expandem para fora.
:::

No contexto original de Sinek, o Golden Circle explica por que algumas empresas e líderes inspiram mais do que outros — eles comunicam o porquê antes do quê. Aplicado à IA, o framework ganha uma função prática diferente: ele força o desenvolvedor a articular o problema antes de escolher a solução. "Quero construir um chatbot" é o quê. "Quero reduzir o tempo de resposta do suporte em 60%" é o porquê. O segundo orienta todas as decisões de design que vêm depois.

## As três camadas aplicadas a projetos de IA

:::importante
**De fora para dentro vs de dentro para fora:** Começar pelo quê — "vou usar RAG com embeddings da OpenAI" — é construir de fora para dentro. Você escolhe a tecnologia antes de entender o problema. Começar pelo porquê — "usuários não encontram a informação que precisam" — leva naturalmente ao como e ao quê certos para aquele problema específico.
:::

Como o Golden Circle se traduz num projeto de IA:

- **Por quê** — qual dor existe? Qual processo está quebrado? Qual resultado de negócio está em risco? Exemplo: "Analistas gastam 4 horas por dia lendo processos para triagem manual"
- **Como** — qual abordagem resolve o porquê dentro das restrições existentes? Dados disponíveis, orçamento, prazo, privacidade, regulação. Exemplo: "Automatizar a leitura com IA preservando o controle humano na decisão final"
- **O quê** — só agora: qual tecnologia, qual arquitetura, qual modelo. Exemplo: "Agente com RAG sobre jurisprudência + LLM para gerar relatório de admissibilidade"

## Golden Circle como ferramenta de validação

:::exemplo
Começar um projeto de IA pelo modelo é como escolher o martelo antes de saber o que vai construir. Talvez precise de uma chave de fenda. O Golden Circle garante que você entende a obra antes de abrir a caixa de ferramentas.
:::

O Golden Circle também funciona como filtro de escopo durante o projeto. Quando alguém pede uma nova feature, a pergunta certa é: "isso serve ao porquê original?" Se a resposta for não, a feature não entra — independente de quão interessante ela seja tecnicamente. Isso evita o desvio de escopo que afunda a maioria dos projetos de IA: começam resolvendo um problema claro e terminam como sistemas complexos que resolvem tudo vagamente.

## Questões de fixação

:::questao Um desenvolvedor recebe o pedido: "Quero um chatbot com GPT-4 integrado ao nosso sistema de RH". Aplicando o Golden Circle, qual deveria ser a primeira pergunta antes de qualquer decisão técnica?
a) Qual versão do GPT-4 tem melhor custo-benefício para esse volume de requisições?
b) API do sistema de RH tem documentação disponível para integração?
c) Qual problema os usuários do RH enfrentam hoje que esse chatbot deveria resolver? *
d) Qual framework de agente — LangChain ou LlamaIndex — se integra melhor com sistemas de RH?
> A alternativa C está correta. O pedido já chegou no quê — "chatbot com GPT-4". O Golden Circle exige voltar ao porquê antes de qualquer decisão técnica. Entender qual problema real os usuários de RH enfrentam pode revelar que o chatbot não é a melhor solução, ou que a solução certa é muito mais simples ou muito mais específica do que um chatbot genérico.
:::

:::questao Sobre o Golden Circle aplicado a projetos de IA, qual das afirmações a seguir NÃO é verdadeira?
a) O porquê define o problema real e o resultado esperado antes de qualquer escolha técnica
b) O como considera restrições como dados disponíveis, orçamento e regulação antes de escolher a tecnologia
c) O quê — modelo, arquitetura, ferramentas — é definido por último, guiado pelo porquê e pelo como
d) Começar pelo quê é aceitável quando o time já tem experiência com a tecnologia escolhida *
> A alternativa D está incorreta — e essa é a resposta. A experiência com a tecnologia não justifica pular o porquê. Um time experiente em RAG que começa pelo RAG ainda corre o risco de construir a solução errada para o problema errado — só que com mais velocidade e convicção. O Golden Circle não é sobre competência técnica: é sobre alinhar a solução ao problema real antes de qualquer linha de código.
:::

## Atividade prática

Escolha um projeto de IA que você conhece ou imagina — pode ser real ou hipotético. Preencha as três camadas do Golden Circle para esse projeto: escreva o porquê em uma frase de impacto, o como em três restrições ou abordagens e o quê em termos de tecnologia e arquitetura. Depois verifique: a tecnologia escolhida no quê é realmente a melhor resposta para o porquê definido?

:::importante
Documento com o Golden Circle preenchido para o projeto escolhido — porquê, como e quê — mais um parágrafo de análise crítica verificando se a tecnologia escolhida é realmente a melhor resposta para o problema definido.
:::

:::roteiro
Uso o TRIARIO como exemplo real: mostro como o projeto nasceu de um porquê claro — analistas gastando horas em triagem manual — e como cada decisão técnica de arquitetura foi guiada por esse porquê. Depois pergunto para a turma: "alguém já trabalhou num projeto onde a tecnologia foi escolhida antes do problema ser entendido?" — a maioria levanta a mão, e aí a discussão se abre sozinha.
:::

## Fechamento

:::resumo
- Golden Circle: porquê define o problema, como define a abordagem, quê define a tecnologia
- Projetos de IA bem-sucedidos começam pelo centro — o problema real — e expandem para fora
- O framework também funciona como filtro de escopo para evitar desvios durante o projeto
:::
