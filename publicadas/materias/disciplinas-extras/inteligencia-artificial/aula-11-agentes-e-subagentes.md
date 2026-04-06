---
title: Agentes e Subagentes
description: Um LLM que responde perguntas é útil. Um agente que age no mundo é transformador. A diferença está no loop: enquanto um modelo convencional recebe uma pergun...
order: 11
published: true
---

# Aula 11 — Agentes e Subagentes

Um LLM que responde perguntas é útil. Um agente que age no mundo é transformador. A diferença está no loop: enquanto um modelo convencional recebe uma pergunta e devolve uma resposta, um agente observa o ambiente, decide o que fazer, executa uma ação, observa o resultado e repete — até completar o objetivo. Agentes são LLMs equipados com ferramentas e autonomia para usá-las. E quando um agente começa a orquestrar outros agentes, temos arquiteturas multiagente — o padrão que está redefinindo o que é possível construir com IA hoje.

## O que é um agente de IA

:::conceito
**Definição:** Um agente de IA é um sistema onde o LLM controla um loop de raciocínio e ação. Ele decide quais ferramentas usar, executa as ações, observa os resultados e decide o próximo passo — repetindo até completar a tarefa ou atingir um limite.
:::

O loop fundamental de um agente segue o padrão **ReAct** — Reasoning and Acting: o modelo raciocina sobre o estado atual, decide uma ação, executa via ferramenta, observa o resultado e raciocina novamente. Esse ciclo transforma o LLM de um gerador de texto em um executor de tarefas. Um agente pode pesquisar na web, ler arquivos, escrever código, executar consultas SQL, enviar e-mails — qualquer coisa que uma ferramenta permita.

## Agentes e Subagentes — dividindo para conquistar

:::importante
**Agente único vs multiagente:** Um único agente com muitas ferramentas fica lento, confuso e difícil de depurar. Arquiteturas multiagente dividem a responsabilidade: um agente orquestrador coordena subagentes especializados, cada um com escopo reduzido e ferramentas específicas para seu domínio.
:::

A arquitetura multiagente funciona como uma empresa: o **orquestrador** é o gerente que recebe a tarefa, planeja e delega. Os **subagentes** são especialistas que executam partes específicas — um pesquisa, outro escreve, outro revisa, outro publica. Cada subagente tem seu próprio system prompt, suas próprias ferramentas e seu próprio escopo. O orquestrador coleta os resultados e sintetiza a entrega final. Isso permite paralelismo, especialização e muito mais controle sobre o que cada parte do sistema pode fazer.

## Padrões de arquitetura multiagente

:::exemplo
Um único agente tentando fazer tudo é como um médico que também faz a recepção, o laboratório e a farmácia. Funciona num consultório pequeno, trava numa clínica grande. Multiagente é a especialização da medicina: cada profissional faz o que sabe melhor, e o sistema funciona em escala.
:::

Os três padrões mais usados hoje:

- **Sequencial** — cada agente processa e passa o resultado para o próximo, como uma linha de montagem
- **Paralelo** — múltiplos subagentes executam tarefas independentes ao mesmo tempo, o orquestrador agrega os resultados
- **Hierárquico** — orquestrador delega para subagentes que podem delegar para sub-subagentes, formando uma árvore de responsabilidades

A escolha do padrão depende de quantas tarefas são independentes entre si e de quão crítica é a latência total.

## Questões de fixação

:::questao Um sistema precisa gerar um relatório de mercado que envolve: pesquisar notícias recentes, analisar dados financeiros e redigir o texto final. As três tarefas são independentes entre si. Qual padrão de arquitetura multiagente é mais eficiente para esse caso?
a) Sequencial — pesquisa passa para análise que passa para redação, garantindo ordem
b) Paralelo — pesquisa e análise rodam ao mesmo tempo, o orquestrador agrega e passa para redação *
c) Agente único — um só agente com todas as ferramentas executa as três tarefas em sequência
d) Hierárquico — cada tarefa delega para sub-subagentes para aumentar a profundidade da análise
> A alternativa B está correta. Pesquisa de notícias e análise financeira são independentes — não precisam do resultado uma da outra para começar. Rodando em paralelo, o tempo total é o da tarefa mais longa, não a soma das três. Só a redação final precisa aguardar os resultados anteriores. Paralelismo é a escolha certa quando as tarefas não têm dependência entre si.
:::

:::questao Sobre agentes e arquiteturas multiagente, qual das afirmações a seguir NÃO é verdadeira?
a) O padrão ReAct alterna entre raciocínio e ação num loop até a tarefa ser concluída
b) Subagentes especializados têm escopo reduzido e ferramentas específicas para seu domínio
c) O orquestrador coordena subagentes e sintetiza os resultados parciais na entrega final
d) Um agente com mais ferramentas sempre performa melhor do que uma arquitetura com múltiplos subagentes especializados *
> A alternativa D está incorreta — e essa é a resposta. Mais ferramentas num único agente aumentam a complexidade do raciocínio, elevam o risco de escolha errada de ferramenta e tornam o sistema mais difícil de depurar. Subagentes especializados com escopo reduzido são mais confiáveis, mais rápidos e mais fáceis de manter — cada um domina seu próprio conjunto pequeno de ferramentas sem confusão.
:::

## Atividade prática

Projete no papel a arquitetura de um sistema multiagente para automatizar a triagem de processos judiciais. Defina: qual é o orquestrador, quais são os subagentes, quais ferramentas cada um tem e qual padrão de coordenação você usaria. Desenhe o fluxo com caixas e setas mostrando como os dados fluem entre os agentes.

:::importante
Diagrama do sistema multiagente — pode ser desenhado à mão, no Excalidraw ou em qualquer ferramenta — com legenda identificando orquestrador, subagentes, ferramentas e padrão de coordenação. Incluir uma descrição de 5 linhas justificando as escolhas de design.
:::

:::roteiro
Mostro ao vivo um agente simples rodando no terminal — um loop ReAct com duas ferramentas: busca web e calculadora. A turma vê o modelo raciocinar, escolher a ferramenta, executar, observar o resultado e continuar. Depois mostro o TRIARIO como exemplo real de arquitetura com agente orquestrador. Ver um sistema real que eles podem estudar é sempre mais motivador do que exemplos abstratos.
:::

## Fechamento

:::resumo
- Agentes executam loops de raciocínio e ação com ferramentas até completar o objetivo
- Arquiteturas multiagente dividem responsabilidades entre orquestrador e subagentes especializados
- Os padrões sequencial, paralelo e hierárquico se aplicam conforme a dependência entre as tarefas
:::
