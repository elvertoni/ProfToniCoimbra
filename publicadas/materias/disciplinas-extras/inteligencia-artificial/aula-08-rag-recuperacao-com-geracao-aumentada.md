---
title: RAG — Recuperação com Geração Aumentada
description: LLMs são poderosos, mas têm um limite fundamental: só sabem o que aprenderam durante o treinamento. Eles não conhecem seus documentos internos, sua base de c...
order: 8
published: true
---

# Aula 08 — RAG — Recuperação com Geração Aumentada

LLMs são poderosos, mas têm um limite fundamental: só sabem o que aprenderam durante o treinamento. Eles não conhecem seus documentos internos, sua base de clientes, a legislação mais recente ou qualquer dado que não estava disponível quando foram treinados. O RAG — Retrieval-Augmented Generation — resolve esse problema combinando dois mundos: a capacidade de recuperar informação relevante de uma base externa com a capacidade do modelo de gerar respostas coerentes. É a técnica que transforma um LLM genérico num especialista no seu domínio.

## O problema que o RAG resolve

:::conceito
**Definição:** RAG é uma arquitetura que recupera trechos relevantes de uma base de conhecimento externa e os injeta no contexto do modelo antes de gerar a resposta. O modelo não memoriza seus dados — ele os consulta em tempo real.
:::

Sem RAG, um LLM tem duas opções ruins quando não sabe algo: inventar uma resposta plausível — o fenômeno chamado de alucinação — ou admitir que não sabe. Com RAG, há uma terceira opção: buscar a informação correta na sua base antes de responder. Isso resolve o problema de dados privados, dados recentes e dados muito específicos para estarem no treinamento de um modelo genérico. É a diferença entre contratar um funcionário que memorizou a enciclopédia e um que sabe onde procurar a resposta certa.

## Como o RAG funciona — o pipeline completo

:::importante
**RAG vs Fine-tuning:** Fine-tuning treina o modelo com seus dados — caro, lento e difícil de atualizar. RAG injeta os dados no contexto em tempo real — mais barato, mais flexível e atualizável sem retreinar o modelo. Para a maioria dos casos de uso, RAG é a escolha certa.
:::

O pipeline do RAG tem três etapas principais:

- **Indexação** — os documentos são quebrados em pedaços, convertidos em embeddings e armazenados num vector store
- **Recuperação** — quando o usuário faz uma pergunta, ela é convertida em embedding e os trechos mais similares são buscados no vector store
- **Geração** — os trechos recuperados são injetados no contexto junto com a pergunta, e o modelo gera a resposta baseada nesse material

Cada etapa tem decisões de projeto que afetam a qualidade final — tamanho dos pedaços, modelo de embedding, número de trechos recuperados e como eles são apresentados ao modelo.

## RAG na prática — onde ele aparece

:::exemplo
RAG é como um advogado que, antes de responder, consulta a jurisprudência relevante. Ele não memoriza todos os casos — sabe onde procurar, recupera os mais pertinentes e fundamenta a resposta neles. A qualidade da resposta depende tanto do raciocínio quanto da qualidade da busca.
:::

RAG aparece em produtos que você já conhece ou usa: o botão "pesquisar na web" do ChatGPT é RAG com a internet como base. O GitHub Copilot usa RAG no seu repositório. Sistemas jurídicos que consultam jurisprudência, chatbots de suporte que consultam bases de conhecimento, assistentes que leem seus PDFs — todos são implementações de RAG. A técnica virou o padrão para conectar LLMs a bases de conhecimento privadas e dinâmicas.

## Questões de fixação

:::questao Uma empresa quer que seu chatbot responda perguntas sobre manuais técnicos de produtos — documentos que mudam a cada trimestre. Qual abordagem é mais adequada para manter o sistema atualizado com o menor custo e esforço?
a) Fine-tuning trimestral do modelo com os novos manuais a cada atualização
b) Incluir todos os manuais no system prompt de cada conversa
c) Implementar RAG com os manuais indexados num vector store, atualizando apenas a base quando os documentos mudam *
d) Treinar um modelo do zero com os manuais como dataset principal
> A alternativa C está correta. RAG é ideal para bases de conhecimento dinâmicas: quando os manuais mudam, basta reindexar os documentos atualizados no vector store — sem retreinar o modelo, sem aumentar o custo de cada chamada e sem o risco de alucinações por informação desatualizada no treinamento. Fine-tuning e treinamento do zero são caros e rígidos para dados que mudam com frequência.
:::

:::questao Sobre o pipeline do RAG, qual das afirmações a seguir NÃO é verdadeira?
a) etapa de indexação converte documentos em embeddings armazenados num vector store
b) recuperação busca os trechos mais semanticamente similares à pergunta do usuário
c) Os trechos recuperados são injetados no contexto antes de o modelo gerar a resposta
d) O modelo memoriza os documentos indexados durante a etapa de recuperação para usá-los em conversas futuras *
> A alternativa D está incorreta — e essa é a resposta. O modelo não memoriza nada durante o RAG. A recuperação acontece em tempo real a cada chamada: os documentos ficam no vector store, não dentro do modelo. Após a resposta, o modelo não retém nenhuma informação da base — a próxima pergunta dispara uma nova busca. Isso é exatamente o que torna o RAG flexível e atualizável.
:::

## Atividade prática

Mapeie um caso de uso real de RAG para um dos seus contextos — pode ser um assistente jurídico para o TJPR, um bot de dúvidas para alunos do curso técnico ou qualquer outro domínio que você conheça. Descreva: qual seria a base de conhecimento, como ela seria indexada, que tipo de pergunta o usuário faria e o que o sistema deveria recuperar antes de responder.

:::importante
Documento descrevendo o caso de uso com as três etapas do pipeline: o que é indexado, como é recuperado e como é usado na geração. Incluir um exemplo de pergunta do usuário e o trecho que seria recuperado.
:::

:::roteiro
Demonstro ao vivo carregando um PDF no Claude e fazendo perguntas sobre o conteúdo. Explico que por baixo está acontecendo RAG — o documento foi quebrado, os trechos relevantes foram buscados e injetados no contexto. Depois mostro o que acontece quando pergunto algo que não está no documento: o modelo admite que não encontrou, em vez de inventar. Esse contraste com a alucinação é o argumento mais forte para o RAG.
:::

## Fechamento

:::resumo
- RAG resolve o limite do LLM conectando-o a bases de conhecimento externas em tempo real
- O pipeline tem três etapas: indexação, recuperação e geração
- RAG é mais flexível e barato que fine-tuning para dados dinâmicos e privados
:::
