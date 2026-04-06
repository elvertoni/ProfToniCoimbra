---
title: Embeddings, Chunks e Overlap
description: O RAG funciona — mas a qualidade do que ele recupera depende inteiramente de como os documentos foram preparados antes da busca. Três conceitos são o coração...
order: 9
published: true
---

# Aula 09 — Embeddings, Chunks e Overlap

O RAG funciona — mas a qualidade do que ele recupera depende inteiramente de como os documentos foram preparados antes da busca. Três conceitos são o coração dessa preparação: embeddings, que transformam texto em números que carregam significado; chunks, que definem como o texto é fatiado; e overlap, que garante que o corte não perca contexto importante. Entender esses três é entender por que dois sistemas RAG com os mesmos documentos podem ter qualidades radicalmente diferentes.

## Embeddings — texto transformado em significado numérico

:::conceito
**Definição:** Embedding é a representação numérica de um texto — um vetor de centenas ou milhares de dimensões. Textos com significados próximos geram vetores próximos no espaço matemático, independente das palavras usadas.
:::

Um modelo de embedding não lê palavras — ele lê significado. "Cachorro" e "cão" geram vetores muito próximos. "Cachorro" e "contrato judicial" geram vetores distantes. Isso permite que a busca semântica funcione: quando o usuário pergunta "qual é a penalidade por atraso?", o sistema encontra o trecho que fala em "multa por inadimplência" mesmo sem nenhuma palavra em comum. É a diferença entre busca por palavra-chave — que exige a palavra exata — e busca por significado — que entende a intenção.

## Chunks — como fatiar o documento certo

:::importante
**Chunk grande vs chunk pequeno:** Chunks grandes carregam mais contexto mas diluem o sinal semântico — o embedding representa o trecho inteiro, não o ponto específico. Chunks pequenos são mais precisos na busca mas podem perder contexto na geração. O tamanho ideal depende do tipo de documento e da pergunta esperada.
:::

Chunking é o processo de dividir o documento em pedaços antes de gerar os embeddings. Cada pedaço vira um vetor independente no vector store. As estratégias mais comuns são:

- **Por tamanho fixo** — a cada N tokens, corta. Simples, mas ignora a estrutura do texto.
- **Por separador semântico** — corta em parágrafos, seções ou títulos. Respeita a estrutura do documento.
- **Recursivo** — tenta cortar por parágrafo; se o pedaço ainda for grande, corta por frase; se ainda for grande, corta por tamanho. É o mais equilibrado para documentos variados.

A escolha da estratégia impacta diretamente a qualidade da recuperação.

## Overlap — preservando o contexto nas bordas

:::exemplo
Imagine um livro cortado em páginas — mas a última linha de cada página é repetida no início da próxima. Assim, quem lê uma página isolada não perde o fio da história. O overlap faz exatamente isso: repete um trecho do chunk anterior no início do próximo para preservar a continuidade.
:::

Quando um documento é fatiado, informações importantes podem ficar cortadas exatamente na fronteira entre dois chunks. O overlap resolve isso repetindo um número de tokens do final de um chunk no início do próximo. Se o chunk tem 512 tokens e o overlap é de 50 tokens, os últimos 50 tokens do chunk 1 aparecem também no início do chunk 2. Isso evita que uma frase importante seja partida ao meio e garante que o contexto de transição esteja disponível em ambos os pedaços. O custo é um leve aumento no volume total de dados indexados.

## Questões de fixação

:::questao Um sistema RAG está falhando em encontrar o trecho correto quando o usuário pergunta "qual o prazo de entrega?" — mas o documento usa a expressão "tempo estimado de envio". Qual é a causa mais provável desse problema e como o embedding resolve?
a) O chunk é muito pequeno e não captura o contexto completo da informação de prazo
b) O overlap está configurado com valor zero, cortando a frase no meio
c) O sistema usa busca por palavra-chave em vez de embeddings, que não encontra sinônimos semânticos *
d) O vector store está desatualizado e precisa ser reindexado com os documentos mais recentes
> A alternativa C está correta. Busca por palavra-chave exige correspondência exata — "prazo de entrega" não encontra "tempo estimado de envio". Embeddings resolvem isso porque representam o significado: as duas expressões geram vetores próximos no espaço semântico e a busca por similaridade as conecta mesmo sem palavras em comum. Essa é a principal vantagem dos embeddings sobre busca tradicional.
:::

:::questao Sobre chunking e overlap em sistemas RAG, qual das afirmações a seguir NÃO é verdadeira?
a) Chunks menores são mais precisos na busca semântica mas podem perder contexto na geração
b) O overlap repete tokens do final de um chunk no início do próximo para preservar continuidade
c) Chunking por separador semântico respeita a estrutura do documento melhor que corte por tamanho fixo
d) Aumentar o overlap reduz o volume total de dados indexados porque evita duplicação de conteúdo *
> A alternativa D está incorreta — e essa é a resposta. O overlap aumenta o volume de dados indexados, não reduz. Ao repetir tokens entre chunks consecutivos, o sistema armazena mais vetores no total. O overlap é um trade-off consciente: aceita-se um leve aumento de armazenamento em troca de melhor preservação de contexto nas bordas dos chunks.
:::

## Atividade prática

Pegue um documento de texto qualquer — pode ser um artigo, um capítulo de apostila ou um regulamento — e aplique manualmente três estratégias de chunking: por tamanho fixo de 200 palavras, por parágrafo e por seção/título. Compare os chunks gerados e responda: qual estratégia preserva melhor o significado para uma busca semântica sobre o conteúdo desse documento específico?

:::importante
Documento com os três conjuntos de chunks gerados e uma análise comparativa de 5 linhas justificando qual estratégia seria mais adequada para aquele tipo de conteúdo e por quê.
:::

:::roteiro
Uso o LangChain Text Splitter Playground ou um script Python simples para mostrar ao vivo como o mesmo parágrafo é cortado de formas diferentes com cada estratégia. O momento mais impactante é mostrar um chunk com overlap zero cortando uma frase no meio — e depois mostrar o mesmo trecho com overlap de 50 tokens preservando a continuidade. A diferença é imediatamente visível e justifica o conceito melhor que qualquer definição.
:::

## Fechamento

:::resumo
- Embeddings convertem texto em vetores numéricos que representam significado — não palavras
- Chunking define como o documento é fatiado antes da indexação — tamanho e estratégia impactam a qualidade
- Overlap preserva contexto nas bordas dos chunks repetindo um trecho entre pedaços consecutivos
:::
