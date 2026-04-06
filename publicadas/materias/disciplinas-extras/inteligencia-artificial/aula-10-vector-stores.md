---
title: Vector Stores
description: Você já sabe o que são embeddings e como os documentos são fatiados em chunks. Agora a pergunta é: onde esses vetores ficam armazenados e como são buscados c...
order: 10
published: true
---

# Aula 10 — Vector Stores

Você já sabe o que são embeddings e como os documentos são fatiados em chunks. Agora a pergunta é: onde esses vetores ficam armazenados e como são buscados com eficiência? A resposta é o vector store — um banco de dados especializado em armazenar e buscar vetores por similaridade. É o componente que torna o RAG possível em escala, porque buscar o vetor mais próximo entre milhões de registros é um problema computacionalmente diferente de qualquer busca tradicional.

## O que é um vector store

:::conceito
**Definição:** Vector store é um banco de dados otimizado para armazenar vetores de alta dimensão e realizar buscas por similaridade semântica. Em vez de buscar por igualdade exata como um banco relacional, ele busca pelos vetores mais próximos matematicamente do vetor de consulta.
:::

Um banco de dados relacional responde "me dê o registro onde o campo X é igual a Y". Um vector store responde "me dê os N registros cujos vetores são mais próximos deste vetor de consulta". A medida de proximidade mais comum é a **similaridade de cosseno** — que mede o ângulo entre dois vetores, não a distância absoluta. Isso é o que permite encontrar chunks semanticamente relevantes para uma pergunta, mesmo sem palavras em comum.

## As principais opções do mercado

:::importante
**Quando usar cada tipo:** Para projetos pequenos e locais, Chroma e FAISS são suficientes — rodam em memória ou em disco sem infraestrutura adicional. Para produção com volume e escala, Qdrant e Pinecone oferecem persistência, APIs e filtros avançados. Para quem já usa PostgreSQL, o pgvector adiciona busca vetorial sem trocar de banco.
:::

### Comparação direta: Chroma vs pgvector vs Pinecone

| Critério | Chroma | pgvector | Pinecone |
|---|---|---|---|
| **Custo** | Gratuito (open source) | Gratuito (extensão PostgreSQL) | Pago a partir de ~$70/mês (plano pago) |
| **Infraestrutura** | Local ou Docker | Seu próprio servidor PostgreSQL | Totalmente gerenciado (nuvem) |
| **Controle** | Total — você gerencia tudo | Total — dados ficam no seu banco | Mínimo — provider gerencia |
| **Escalabilidade** | Limitado ao servidor local | Escala com seu banco PostgreSQL | Escala automaticamente |
| **Filtros por metadados** | Suportado | Suportado (SQL completo) | Suportado |
| **Melhor para** | Protótipos e aprendizado | Projetos com banco PostgreSQL já existente | Produção em escala sem equipe de infra |

### Custo vs controle — qual escolher?

- **Chroma** é a escolha ideal para aprender, prototipar e desenvolver localmente. O custo é zero e você tem controle total, mas precisa gerenciar persistência e backups manualmente. Para um projeto de aula ou TCC, Chroma resolve.
- **pgvector** é a escolha natural se você já usa PostgreSQL — adiciona busca vetorial ao banco que você já opera, sem novos serviços. O custo é o do seu servidor existente; o controle é total.
- **Pinecone** é a escolha para produção em empresas onde a equipe de infraestrutura quer zero manutenção de banco vetorial. O custo é significativo, mas o gerenciamento é zero e a escala é automática.

:::atencao
Vector stores totalmente gerenciados como o Pinecone oferecem conveniência em troca de vendor lock-in: seus vetores vivem no infrastructure do provider. Se o pricing mudar ou o serviço sair do ar, a migração exige reindexar todos os documentos — o que pode levar dias em bases grandes. Para sistemas críticos, considere ao menos ter um backup offline dos documentos-fonte para reindexação de emergência.
:::

As opções mais usadas hoje:

- **Chroma** — open source, fácil de usar localmente, ideal para protótipos e projetos pequenos
- **FAISS** — biblioteca do Meta, extremamente rápida para buscas em memória, sem persistência nativa
- **Qdrant** — open source com foco em produção, suporta filtros por metadados e deploy em Docker
- **Pinecone** — serviço gerenciado na nuvem, sem infraestrutura para gerenciar, plano gratuito disponível
- **pgvector** — extensão do PostgreSQL que adiciona tipo de coluna vetorial e índice de similaridade

A escolha depende do volume de dados, da necessidade de persistência, do orçamento e da infraestrutura já existente.

## Metadados e filtragem híbrida

:::exemplo
Buscar só por vetor é como perguntar "qual arquivo fala sobre isso?" sem saber a data, o autor ou o departamento. Metadados são os campos que permitem perguntar "qual arquivo do jurídico, criado em 2024, fala sobre isso?" — a busca semântica encontra o tema, o filtro elimina os irrelevantes.
:::

Todo chunk armazenado no vector store pode ter metadados associados: nome do arquivo, data, seção, autor, categoria, tipo de documento. Isso permite **filtragem híbrida** — combinar busca semântica com filtros tradicionais. Por exemplo: "busque os trechos mais similares à pergunta, mas apenas entre documentos da categoria 'contratos' com data posterior a 2023". Sem metadados, o RAG responde com os chunks mais relevantes semanticamente. Com metadados, ele responde com os mais relevantes dentro do subconjunto correto.

## Questões de fixação

:::questao Um sistema RAG jurídico indexa 500 mil decisões dos últimos 20 anos. O usuário pergunta sobre jurisprudência recente de 2024. O sistema retorna decisões relevantes semanticamente, mas de anos anteriores. Qual recurso do vector store resolveria esse problema?
a) Aumentar o tamanho dos chunks para capturar mais contexto de cada decisão
b) Trocar o modelo de embedding por um mais recente e preciso
c) Usar filtragem por metadados para restringir a busca a documentos com data igual ou posterior a 2024 *
d) Reindexar apenas as decisões de 2024 num vector store separado e consultar os dois em paralelo
> A alternativa C está correta. Metadados de data permitem filtrar a busca semanticamente antes ou durante a recuperação — o sistema busca os chunks mais relevantes apenas dentro do subconjunto de documentos de 2024. Criar um vector store separado por ano seria possível, mas desnecessariamente complexo e difícil de manter. Metadados foram criados exatamente para esse tipo de restrição contextual.
:::

:::questao Sobre vector stores e busca por similaridade, qual das afirmações a seguir NÃO é verdadeira?
a) similaridade de cosseno mede o ângulo entre vetores, não a distância absoluta entre eles
b) pgvector permite usar busca vetorial dentro do PostgreSQL sem trocar de banco de dados
c) Metadados permitem combinar busca semântica com filtros tradicionais por campo
d) Vector stores funcionam como bancos relacionais — buscam registros por igualdade exata de valores nos vetores armazenados *
> A alternativa D está incorreta — e essa é a resposta. Vector stores não buscam por igualdade exata: buscam por proximidade. Dois vetores iguais têm similaridade máxima, mas a busca retorna os N vetores mais próximos do vetor de consulta, não necessariamente idênticos. Essa diferença fundamental é o que torna a busca semântica possível — encontrar significados similares mesmo com representações numéricas diferentes.
:::

## Atividade prática

Implemente um mini sistema RAG local usando Python. Use a biblioteca **Chroma** para criar um vector store, indexe três documentos de texto simples e faça duas perguntas semânticas que não usem as palavras exatas dos documentos. Registre quais chunks foram recuperados em cada busca.

:::importante
Script Python funcional com Chroma, os três documentos indexados, as duas perguntas e print do terminal mostrando os chunks recuperados em cada busca. Incluir comentários explicando cada etapa do código.
:::

:::roteiro
Faço a demonstração ao vivo: crio um Chroma em memória com três parágrafos sobre temas diferentes, busco por uma pergunta que usa sinônimos e mostro o chunk correto sendo recuperado. Depois adiciono um metadado de categoria e mostro a filtragem híbrida funcionando. O código completo cabe em 30 linhas de Python — mostrar que é simples de implementar é tão importante quanto explicar o conceito.
:::

## Fechamento

:::resumo
- Vector store é um banco especializado em busca por similaridade semântica entre vetores
- As principais opções vão do Chroma local ao Pinecone gerenciado — a escolha depende da escala
- Metadados permitem filtragem híbrida, combinando busca semântica com filtros tradicionais por campo
:::
