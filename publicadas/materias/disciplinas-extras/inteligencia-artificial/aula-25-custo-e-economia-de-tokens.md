---
title: Custo e Economia de Tokens
description: Como tokens viram custo em APIs de IA e quais estratégias simples reduzem gasto sem destruir qualidade.
order: 25
published: true
---

# Aula 25 — Custo e Economia de Tokens

Quando alguém começa a usar IA por API, o foco costuma ficar em qualidade da resposta. Depois de pouco tempo, aparece outra pergunta inevitável: quanto isso custa? Em sistemas reais, cada mensagem enviada e cada resposta recebida consomem tokens — e tokens viram dinheiro. Entender essa conta é parte da engenharia de IA.

## O que são tokens e por que eles importam

:::objetivo
Ao final da aula, o estudante será capaz de relacionar tokens, contexto e escolha de modelo com o custo operacional de um sistema de IA.
:::

:::conceito
**Token** é a unidade de texto processada pelo modelo. O custo de uma chamada costuma depender da quantidade de tokens de entrada, da quantidade de tokens de saída e do preço do modelo escolhido.
:::

Em geral, texto longo custa mais do que texto curto. Conversas extensas, documentos inteiros, instruções duplicadas e respostas muito abertas fazem a conta subir. Isso vale ainda mais quando o sistema atende muitas pessoas ao longo do dia.

A conta básica envolve três fatores:

- **tokens de entrada** — tudo o que você envia ao modelo
- **tokens de saída** — tudo o que o modelo devolve
- **preço do modelo** — alguns são mais baratos, outros mais poderosos e mais caros

:::questao Em um cenário real, um chatbot escolar envia o histórico completo de cada conversa, um regulamento inteiro e um prompt enorme toda vez que um aluno pergunta algo simples como “qual é o horário da secretaria?”. Qual é a consequência mais provável?
a) O custo por chamada sobe porque a entrada ficou desnecessariamente grande *
b) O sistema fica mais barato porque prompts longos aumentam eficiência automática
c) O modelo deixa de usar tokens quando a pergunta é curta
d) O custo só depende da velocidade da internet, não do tamanho do contexto
> A alternativa A está correta. Mesmo perguntas simples ficam caras quando o sistema manda contexto demais em toda chamada. Em IA, contexto útil é bom; contexto inchado é desperdício.
:::

## Como o custo aparece na prática

Nem sempre a cobrança é igual entre provedores, mas a lógica costuma ser parecida: você paga por volume de processamento. Se um modelo cobra separadamente entrada e saída, duas decisões importam muito:

- quanto texto você manda
- quanto texto você permite o modelo gerar

Por isso, sistemas mal projetados gastam sem perceber. Um prompt repetitivo, uma base RAG que injeta trechos demais ou uma resposta sem limite podem fazer o orçamento escapar rápido.

:::importante
Mais contexto não significa automaticamente mais qualidade. Às vezes significa só mais custo, mais latência e mais chance de distrair o modelo com informação irrelevante.
:::

Veja um exemplo didático em Python para estimar custo:

```python
# Exemplo simplificado de estimativa de custo.
# Valores fictícios apenas para demonstrar a lógica.

preco_entrada_por_mil = 0.50   # custo por 1.000 tokens de entrada
preco_saida_por_mil = 1.50     # custo por 1.000 tokens de saída

entrada_tokens = 1800
saida_tokens = 600

custo_entrada = (entrada_tokens / 1000) * preco_entrada_por_mil
custo_saida = (saida_tokens / 1000) * preco_saida_por_mil
custo_total = custo_entrada + custo_saida

print(f"Custo estimado: R$ {custo_total:.2f}")
```

Se esse valor parece pequeno numa chamada, imagine 2.000 chamadas por dia. Otimização deixa de ser capricho e vira necessidade operacional.

:::questao Um desenvolvedor percebe que o sistema ficou caro demais depois de ativar RAG. Qual erro ou problema explica melhor esse aumento?
a) O sistema começou a recuperar trechos demais e enviar contexto redundante ao modelo *
b) O modelo parou de usar embeddings
c) Toda aplicação com RAG é necessariamente inviável financeiramente
d) O custo cresceu porque o nome do prompt ficou mais técnico
> A alternativa A está correta. RAG mal calibrado pode injetar mais texto do que o necessário. O problema não é usar RAG, mas usar recuperação sem controle de quantidade e relevância.
:::

## Estratégias simples de economia

Há várias formas práticas de reduzir custo sem destruir qualidade:

- encurtar prompts repetitivos
- resumir histórico antes de reenviar
- limitar tamanho máximo da resposta
- escolher modelo mais barato para tarefas simples
- usar modelo mais caro só em casos complexos
- reutilizar resultados estáveis com cache

Essa lógica é chamada às vezes de **roteamento por tarefa**. Um classificador simples de intenção pode usar um modelo barato. Já uma análise mais sofisticada pode subir para um modelo melhor. Nem toda pergunta precisa do “motor mais potente”.

Outra estratégia importante é cache. Se a pergunta é recorrente e a resposta muda pouco — por exemplo, horário da secretaria, data de conselho de classe ou lista de documentos — você pode reaproveitar saídas prontas ou recuperar a resposta de uma base antes de chamar o modelo de novo.

:::atencao
Economizar não é só cortar custo. Se a otimização for agressiva demais, o sistema pode perder contexto importante, responder mal ou encaminhar o usuário errado.
:::

:::questao Uma equipe quer reduzir gastos sem piorar muito a experiência do usuário. Qual decisão tende a ser mais inteligente?
a) Usar sempre o modelo mais caro, até para perguntas repetidas e simples
b) Restringir respostas a uma frase em qualquer contexto, mesmo quando a tarefa exige detalhe
c) Usar cache para perguntas frequentes e reservar modelos mais fortes para casos realmente complexos *
d) Remover toda validação para que a resposta saia mais barata
> A alternativa C está correta. Economia boa é economia com critério: reaproveitar o que é estável e gastar mais apenas onde isso gera valor real.
:::

## Questões de fixação

:::questao Uma escola vai lançar um assistente para atender 5 mil alunos. Em um teste, a equipe percebe que o mesmo prompt longo está sendo reenviado inteiro em toda interação, mesmo quando a dúvida é curta e repetida. Qual decisão prática tende a reduzir custo imediatamente?
a) Guardar versões resumidas do contexto e evitar reenviar informação fixa desnecessária *
b) Aumentar a temperatura para o modelo responder com mais criatividade
c) Substituir todas as respostas por áudios gerados automaticamente
d) Pedir para os alunos escreverem perguntas mais difíceis
> A alternativa A está correta. Reduzir repetição e tamanho de contexto é uma das medidas com melhor impacto imediato em custo e latência.
:::

:::questao Sobre custo e economia de tokens, qual afirmação está correta?
a) O custo depende apenas dos tokens de saída; entrada não influencia
b) Resposta longa, histórico enorme e modelo premium ao mesmo tempo tendem a aumentar a conta *
c) Cache não faz diferença porque toda chamada precisa gerar tudo do zero
d) Escolher modelo mais barato sempre entrega o mesmo resultado de um modelo mais forte
> A alternativa B está correta. Em geral, custo sobe quando a entrada cresce, a saída cresce e o modelo escolhido é mais caro. Otimização envolve equilibrar esses três fatores.
:::

## Atividade prática

:::exercicio
Imagine um assistente de IA para uma escola técnica. Monte uma estimativa simples para 100 atendimentos por dia com três colunas: tokens médios de entrada, tokens médios de saída e custo estimado por atendimento. Depois proponha duas estratégias concretas para reduzir esse custo em pelo menos 20% sem comprometer a utilidade do sistema.
:::

:::roteiro
Uma boa dinâmica é comparar três arquiteturas: tudo em um modelo premium, roteamento por tarefa e uso de cache para perguntas frequentes. A turma enxerga rápido que custo também é arquitetura, não só tabela de preços.
:::

## Fechamento

:::resumo
- Tokens são a unidade que liga texto processado a custo em sistemas de IA
- Entrada, saída e escolha de modelo influenciam diretamente o gasto
- Contexto excessivo e respostas longas elevam custo sem garantir melhor qualidade
- Cache, prompts enxutos, limite de saída e roteamento por tarefa ajudam a economizar
- Boa otimização reduz custo preservando contexto útil e qualidade suficiente para a tarefa
:::
