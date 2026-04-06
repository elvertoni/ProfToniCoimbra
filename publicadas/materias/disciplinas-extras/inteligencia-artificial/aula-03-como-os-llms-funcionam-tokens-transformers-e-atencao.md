---
title: Como os LLMs Funcionam — Tokens, Transformers e Atenção
description: Você já usou um modelo de linguagem e ficou impressionado com a resposta — mas já parou para pensar no que acontece por baixo? LLMs, ou Large Language Models...
order: 3
published: true
---

# Aula 03 — Como os LLMs Funcionam — Tokens, Transformers e Atenção

Você já usou um modelo de linguagem e ficou impressionado com a resposta — mas já parou para pensar no que acontece por baixo? LLMs, ou Large Language Models, não entendem texto como humanos entendem. Eles operam com números, probabilidades e uma arquitetura chamada Transformer, que revolucionou a IA a partir de 2017. Entender esse mecanismo não é detalhe técnico opcional — é o que separa quem usa IA de quem sabe trabalhar com ela de verdade.

## Tokens — a unidade mínima de linguagem

:::conceito
**O que é um token:** Token é o pedaço de texto que o modelo processa de uma vez. Pode ser uma palavra inteira, parte de uma palavra ou um símbolo. A frase "inteligência artificial" pode virar quantidades diferentes de tokens dependendo do idioma e do tokenizador.
:::

O modelo nunca lê letras nem palavras inteiras diretamente — ele lê tokens. Antes de processar qualquer texto, um componente chamado **tokenizador** quebra o input em pedaços e converte cada pedaço em um número. A partir daí, tudo é matemática. Isso explica comportamentos estranhos: o modelo pode errar ao contar letras ou sílabas porque ele nunca viu a palavra como caracteres isolados — viu como tokens.

Cada modelo tem um vocabulário fixo de tokens, geralmente entre dezenas de milhares e centenas de milhares de entradas. Isso afeta custo, velocidade e desempenho. Em português, e especialmente com nomes próprios, siglas e termos jurídicos ou técnicos, a tokenização pode ficar menos eficiente do que em inglês. Um texto sobre o **TJPR** ou sobre normas da **SEED-PR** pode ocupar mais tokens do que o aluno imagina, e isso interfere diretamente no limite de contexto e no custo por chamada de API.

:::questao Um aluno tenta usar um LLM para contar quantas vezes a palavra " seed " aparece em um texto da SEED-PR. O modelo dá um número que não corresponde à contagem real. Qual característica dos LLMs melhor explica esse erro?
a) O modelo foi mal treinado e precisa de mais dados em português
b) O modelo processa tokens, não caracteres ou palavras isoladas como um editor de texto faria *
c) O modelo sempre erra quando o texto tem mais de mil palavras
d) Esse tipo de tarefa exige que o texto seja enviado como imagem, não como texto
> A alternativa B está correta. O tokenizador divide o texto em pedaços que não correspondem necessariamente a palavras inteiras. "seed" pode aparecer como parte de um token maior ou junto com espaços, o que faz com que uma contagem literal de palavras pelo modelo possa ser imprecisa. Essa é uma limitação direta do mecanismo de tokenização.
:::

## Transformers e atenção — o salto que mudou o campo

:::importante
**Antes vs depois dos Transformers:** Antes de 2017, muitos modelos processavam texto palavra por palavra em sequência — eram lentos e esqueciam o início da frase. Os Transformers processam os tokens em paralelo e conseguem relacionar qualquer parte do texto com qualquer outra.
:::

O artigo *Attention Is All You Need* (Google, 2017) introduziu a arquitetura Transformer. A grande sacada foi usar o mecanismo de **atenção** para decidir, a cada etapa da geração, quais partes do texto merecem mais peso. Em vez de caminhar palavra por palavra como uma fila, o modelo observa relações entre vários tokens ao mesmo tempo.

É por isso que um LLM consegue interpretar que a palavra "banco" pode significar instituição financeira ou margem de rio dependendo do contexto. Ele não consulta um dicionário interno com definições prontas: ele calcula relações estatísticas entre tokens. Quanto mais camadas e parâmetros, maior a capacidade de capturar nuances, ambiguidades e padrões complexos de linguagem.

:::exemplo
Imagine um aluno pedindo: "Resuma esta decisão do TJPR em linguagem simples". Para responder bem, o modelo precisa dar mais peso aos trechos que explicam o pedido, a decisão e a consequência prática, e menos peso a cabeçalhos, assinaturas e trechos repetitivos. O mecanismo de atenção faz justamente essa priorização.
:::

## Janela de contexto — a memória de curto prazo do modelo

:::conceito
**Context window:** A janela de contexto é a quantidade total de tokens que o modelo consegue considerar de uma vez ao gerar a resposta. Tudo o que está fora dessa janela simplesmente não entra no raciocínio daquela chamada.
:::

Uma boa analogia é pensar numa **mesa de estudos**. Se a mesa é pequena, você não consegue deixar todos os livros, anotações e exercícios abertos ao mesmo tempo. Então precisa escolher o que fica visível. A janela de contexto funciona assim: ela é a mesa disponível para o modelo trabalhar. Se o material é maior do que a mesa, alguma coisa fica de fora.

Na prática, isso importa muito. Se você enviar um regulamento inteiro, uma conversa longa e mais um conjunto de instruções, o modelo pode perder partes importantes do começo ou comprimir demais o conteúdo relevante. É por isso que aplicações sérias usam resumo, chunking e RAG em vez de simplesmente despejar documentos gigantes no prompt.

:::questao Um advogado envia um contrato de 50 páginas para um LLM e pede um resumo de todos os pontos de atenção. O modelo resume apenas as primeiras 10 páginas e ignora o restante. Qual conceito explica esse comportamento?
a) O modelo foi projetado para recusar documentos longos
b) A janela de contexto tem um limite de tokens que, quando excedido, faz partes do documento ficarem de fora *
c) Contratos jurídicos contêm palavras que o modelo não consegue processar
d) O modelo故意mente ignora textos que menciona nomes de pessoas
> A alternativa B está correta. A janela de contexto define a quantidade máxima de tokens que o modelo consegue considerar em uma única chamada. Quando o documento excede esse limite, as partes iniciais podem ser "empurradas" para fora da janela e simplesmente não são processadas naquela resposta. Por isso, estratégias como chunking e RAG existem — para contornar essa limitação.
:::

:::atencao
Janela de contexto grande não significa compreensão perfeita. O modelo pode receber muitos tokens e ainda assim priorizar trechos errados, misturar contextos ou responder com confiança sobre algo mal interpretado. Esse é um dos caminhos para a **alucinação**.
:::

## Temperatura e sampling — como a resposta é escolhida

:::importante
**Previsão, não certeza:** O LLM não "sabe" a próxima palavra; ele calcula probabilidades para vários próximos tokens possíveis. O sampling define como essa escolha é feita, e a temperatura ajusta o grau de diversidade dessa escolha.
:::

Quando o modelo gera uma resposta, ele não tira texto do nada. Para cada próximo token, ele calcula uma distribuição de probabilidades. O processo de **sampling** escolhe qual token sai dessa distribuição. Se a temperatura está baixa, o modelo tende a escolher opções mais previsíveis e conservadoras. Se está alta, ele aceita opções menos prováveis, o que aumenta criatividade, mas também aumenta variação e risco de erro.

Isso ajuda a entender por que a mesma pergunta pode render respostas diferentes. Em tarefas como classificação, extração de dados ou geração de JSON, normalmente queremos temperatura baixa. Em brainstorming, slogans ou ideias de campanha, uma temperatura um pouco maior pode fazer sentido. O erro comum é usar alta criatividade em tarefas que exigem precisão factual.

:::questao Um desenvolvedor configurou temperatura alta para uma chamada de API que extrai dados de uma nota fiscal e percebe que os campos estão chegando com valores incorretos ou em posições trocadas. O que a temperatura alta provavelmente está causando?
a) Nada — temperatura só afeta o estilo da resposta, não o conteúdo factual
b) O modelo está escolhendo tokens menos prováveis também nos campos de dados, aumentando variação e erro *
c) O modelo está se recusando a acessar os campos da nota fiscal
d) Temperatura alta exige mais memória e o modelo estoura o limite, causando reset
> A alternativa B está correta. Com temperatura alta, o modelo aceita alternativas menos prováveis com maior frequência. Em tarefas que exigem precisão factual — como extração de dados — isso é prejudicial, porque o modelo pode escolher um token semanticamente próximo mas numericamente errado. Para extração, classificação e JSON, temperatura baixa é o padrão recomendado.
:::

## Limites importantes dos LLMs

LLMs impressionam porque parecem conversar, resumir e argumentar como humanos. Mas essa aparência engana. Eles não têm compreensão humana, não verificam fatos automaticamente e não possuem memória confiável fora do contexto disponível. Um modelo pode explicar muito bem um conceito de redes neurais e, na linha seguinte, inventar um artigo, uma lei ou uma referência que nunca existiu.

Esse fenômeno é a **alucinação**: quando o modelo produz uma resposta plausível na forma, mas incorreta no conteúdo. Por isso, em contextos críticos — como educação, saúde, jurídico ou atendimento institucional — a saída do modelo precisa de verificação. IA generativa acelera trabalho, mas não substitui checagem.

:::questao Sobre os limites e capacidades dos LLMs, qual alternativa expressa um erro conceitual comum?
a) LLMs processam tokens convertidos em números — não "leem" palavras como humanos
b) Alucinação acontece quando o modelo gera uma resposta bem estruturada mas com informações incorretas
c) LLMs modernos têm compreensão profunda e intencional como um ser humano experiente *
d) A janela de contexto funciona como uma memória de curto prazo com limite real de tokens
> A alternativa C está correta. Achar que LLMs têm compreensão profunda, intencionalidade ou consciência é um erro conceitual importante. Eles calculam probabilidades em grandes volumes de texto e produzem resultados que parecem coerentes, mas não "entendem" no sentido humano. Essa aparência de compreensão é o que leva muitos usuários a confiar demais nas respostas.
:::

## Questões de fixação

:::questao Um desenvolvedor percebe que o modelo errou ao contar quantas letras "r" existem em uma palavra. Qual característica dos LLMs explica melhor esse comportamento?
a) O modelo não foi treinado com vocabulário suficiente
b) O mecanismo de atenção ignora palavras curtas
c) O modelo processa tokens, não caracteres individuais, então não enxerga letras como um editor de texto *
d) O problema acontece apenas em modelos com janela de contexto pequena
> A alternativa C está correta. O LLM trabalha com tokens convertidos em números, não com caracteres isolados. Por isso ele pode ter dificuldade em tarefas que exigem contagem literal de letras, sílabas ou posições exatas dentro de uma palavra.
:::

:::questao Um sistema recebe um regulamento longo da SEED-PR, vários anexos e uma conversa extensa. Mesmo assim, responde ignorando uma regra importante do começo do documento. Qual conceito explica melhor esse problema?
a) Fine-tuning insuficiente do modelo
b) Limite da janela de contexto e priorização imperfeita dos trechos relevantes *
c) Falta de internet durante a chamada da API
d) Temperatura baixa demais, que bloqueia leitura de documentos longos
> A alternativa B está correta. A janela de contexto define quanto material o modelo consegue considerar por vez. Mesmo quando o texto cabe, o modelo ainda pode dar mais peso aos trechos errados. Por isso, organizar bem o contexto é tão importante quanto escolher o modelo.
:::

## Atividade prática

Pegue um texto real com pelo menos três parágrafos — pode ser uma notícia, um edital curto ou um aviso escolar — e faça dois testes em um LLM: primeiro, peça um resumo simples; depois, envie o mesmo texto com uma instrução específica dizendo quais pontos devem ter prioridade. Compare o resultado e identifique quais partes o modelo destacou em cada caso.

:::exercicio
Monte uma tabela com três colunas: trecho enviado, instrução usada e resposta obtida. Ao final, escreva um parágrafo explicando onde você percebeu a ação da atenção, o efeito do contexto e algum limite prático do modelo.
:::

:::roteiro
Se eu quiser demonstrar em aula, posso usar um comunicado escolar da SEED-PR ou um aviso do aplicativo usado pelos alunos. Primeiro mostro o resumo genérico. Depois peço: "Resuma destacando prazo, público-alvo e ação necessária". A diferença ajuda a visualizar que o modelo não entende o texto como humano — ele prioriza padrões conforme o contexto dado.
:::

## Fechamento

:::resumo
- LLMs processam tokens, não letras ou palavras do jeito que humanos percebem
- Transformers usam atenção para relacionar partes do texto e priorizar o que importa a cada resposta
- A janela de contexto funciona como uma memória de curto prazo com limite real
- Temperatura e sampling afetam previsibilidade, criatividade e risco de erro
- Alucinação é uma limitação importante: resposta fluente não é garantia de verdade
:::
