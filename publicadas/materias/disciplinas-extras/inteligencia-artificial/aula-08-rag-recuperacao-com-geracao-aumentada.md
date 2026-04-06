---
title: RAG — Recuperação com Geração Aumentada
description: LLMs são poderosos, mas têm um limite fundamental: só sabem o que aprenderam durante o treinamento. Eles não conhecem seus documentos internos, sua base de c...
order: 8
published: true
---

# Aula 08 — RAG — Recuperação com Geração Aumentada

LLMs são poderosos, mas têm um limite fundamental: só sabem o que aprenderam durante o treinamento. Eles não conhecem seus documentos internos, sua base de clientes, a legislação mais recente ou qualquer dado que não estava disponível quando foram treinados. O RAG — Retrieval-Augmented Generation — resolve esse problema combinando dois mundos: a capacidade de recuperar informação relevante de uma base externa com a capacidade do modelo de gerar respostas coerentes. É a técnica que transforma um LLM genérico em um especialista no seu domínio.

## O problema que o RAG resolve

:::conceito
**Definição:** RAG é uma arquitetura que recupera trechos relevantes de uma base de conhecimento externa e os injeta no contexto do modelo antes da geração da resposta. O modelo não memoriza seus dados — ele os consulta em tempo real.
:::

Sem RAG, um LLM tem duas opções ruins quando não sabe algo: inventar uma resposta plausível — o fenômeno chamado de **alucinação** — ou admitir que não sabe. Com RAG, há uma terceira opção: buscar a informação correta em uma base confiável antes de responder. Isso é especialmente útil quando lidamos com dados privados, documentos recentes ou conteúdo muito específico para estar no treinamento de um modelo genérico.

Um exemplo claro no contexto brasileiro seria um assistente que responde perguntas sobre regulamentos da **SEED-PR** ou decisões do **TJPR**. Em vez de confiar na memória estatística do modelo, o sistema consulta os documentos corretos e monta a resposta com base neles.

## Como o RAG funciona — pipeline completo

:::importante
**RAG vs fine-tuning:** Fine-tuning tenta incorporar conhecimento ao modelo por treino adicional. RAG injeta conhecimento no contexto em tempo real. Para bases que mudam com frequência, RAG costuma ser mais barato, mais rápido de atualizar e mais fácil de manter.
:::

O pipeline do RAG tem três etapas principais:

- **Indexação** — os documentos são quebrados em pedaços, transformados em embeddings e armazenados em um índice pesquisável
- **Busca** — a pergunta do usuário também é convertida em embedding, e o sistema encontra os trechos mais relevantes
- **Geração** — os trechos recuperados entram no prompt, e o modelo responde com base nesse contexto

Abaixo está um pseudocódigo em Python com o fluxo completo:

```python
# 1) Indexação dos documentos
chunks = quebrar_documentos(documentos, tamanho=500, overlap=80)
vetores = gerar_embeddings(chunks)
vector_store.salvar(chunks, vetores)

# 2) Busca dos trechos mais relevantes
pergunta = "Qual é o prazo para recurso neste regulamento?"
vetor_pergunta = gerar_embeddings([pergunta])[0]
contextos = vector_store.buscar_similares(vetor_pergunta, top_k=4)

# 3) Geração da resposta com base no contexto recuperado
prompt = montar_prompt(pergunta=pergunta, trechos=contextos)
resposta = llm.gerar(prompt)
print(resposta)
```

:::questao Um cartório quer um assistente que responda dúvidas sobre procedimentos internos com base em manuais atualizados que mudam com frequência. Um desenvolvedor sugere fazer fine-tuning do modelo sempre que um manual mudar. Por que essa abordagem tende a ser um erro para esse cenário?
a) Fine-tuning não funciona com manuais em português
b) Fine-tuning é muito mais caro e demorado do que reindexar documentos para RAG quando a base muda *
c) Fine-tuning impede o modelo de responder outras perguntas gerais
d) RAG só funciona para textos curtos, não para manuais de cartório
> A alternativa B está correta. Fine-tuning exige retreino do modelo com novos dados, o que é computacionalmente caro e lento. Quando a base de conhecimento muda com frequência — como manuais internos — reindexar os documentos para RAG é muito mais rápido e barato do que retreinar o modelo inteiro.
:::

## Onde o RAG acerta — e onde ele ainda falha

RAG melhora muito a qualidade factual porque reduz dependência da memória do modelo. Mesmo assim, ele não elimina risco. Se o documento foi indexado com chunks ruins, se a busca recuperou trechos pouco relevantes ou se o prompt final ficou mal montado, o modelo ainda pode responder de forma incompleta ou até alucinada.

:::questao Um sistema RAG foi configurado para responder perguntas sobre legislação trabalhista. Após uma mudança na CLT, o sistema seguiu dando respostas baseadas na legislação antiga. Qual é a causa raiz mais provável?
a) O modelo de embedding foi mal treinado e não entende leis
b) A base de documentos indexada não foi atualizada após a mudança na legislação *
c) RAG nunca funciona com textos jurídicos por serem muito longos
d) O modelo de geração fabricou a resposta porque a pergunta era ambígua
> A alternativa B está correta. RAG depende de uma base de documentos indexada. Se os documentos reais não são atualizados, o sistema recupera trechos desatualizados e responde com informações antigas mesmo que a pergunta seja clara. Atualizar o conhecimento em RAG significa reindexar os documentos, não retreinar o modelo.
:::

Também existe o problema de base desatualizada. Se um regulamento novo não entrou no índice, o sistema pode recuperar uma versão antiga e responder com segurança sobre algo ultrapassado. Ou seja: RAG ajuda a **reduzir** alucinação e desatualização, mas não promete eliminar totalmente nenhum dos dois problemas.

:::atencao
RAG não é mágica. Ele depende de qualidade na indexação, na busca e na montagem do contexto. Se a recuperação falhar, a geração final também tende a falhar.
:::

## Próximas evoluções — hybrid search e reranking

**Hybrid search** combina busca semântica com busca lexical. Em vez de confiar só nos embeddings, o sistema mistura similaridade vetorial com correspondência literal de termos. Isso é útil quando a pergunta depende de palavras exatas, números de processo, siglas ou artigos específicos. Em um sistema para o TJPR, por exemplo, o usuário pode digitar um número CNJ ou um nome muito específico; nesse caso, a combinação entre busca semântica e textual tende a funcionar melhor do que apenas uma delas isoladamente.

:::questao Um advogado pesquisa no sistema RAG do TJPR pela frase exata "artigo 205 do Código Civil". O sistema não retorna nenhum resultado. Por que isso pode acontecer em uma busca puramente semântica?
a) Porque o sistema RAG nunca encontra artigos de lei
b) Porque busca semântica pode não priorizar correspondência literal de termos específicos *
c) Porque o modelo de geração está desativado nesse fluxo
d) Porque hybrid search substitui a necessidade de embeddings
> A alternativa B está correta. Busca puramente semântica encontra trechos semanticamente similares à pergunta, mas pode não priorizar correspondência exata de termos técnicos, números de artigos ou nomes próprios. Por isso, hybrid search — que combina busca vetorial com busca lexical — tende a funcionar melhor quando a pergunta depende de expressões literais específicas.
:::

**Reranking** entra depois da busca inicial. Primeiro, o sistema recupera um conjunto maior de trechos candidatos. Depois, um modelo adicional reordena esses trechos para escolher os mais úteis para aquela pergunta específica. Isso melhora precisão principalmente quando muitos trechos parecem parecidos no embedding, mas só alguns realmente respondem ao que foi perguntado. Em bases grandes, reranking costuma ser uma das melhorias com melhor custo-benefício.

## RAG na prática — onde ele aparece

:::exemplo
RAG é como um professor que, antes de responder a uma dúvida, abre o material oficial da disciplina, procura o trecho relevante e só então explica. Ele não depende apenas da memória; ele consulta a fonte.
:::

Você já vê RAG em várias ferramentas: chat com PDF, assistente de documentação, busca corporativa com resposta gerada, copilotos que leem repositórios e bots de atendimento que consultam bases de conhecimento. Em contexto educacional, um professor pode criar um assistente que responde perguntas sobre apostilas, planos de aula e regulamentos internos. Em contexto institucional, um órgão pode usar RAG para orientar usuários com base em documentos oficiais atualizados.

## Questões de fixação

:::questao Uma escola quer criar um assistente para responder dúvidas sobre regulamentos internos e atualizá-lo sempre que novos documentos forem publicados. Qual abordagem tende a ser mais adequada?
a) Fine-tuning do modelo sempre que um documento mudar
b) RAG com indexação dos documentos e atualização da base sempre que houver nova versão *
c) Colocar todos os documentos no system prompt fixo de toda conversa
d) Treinar um modelo do zero com os PDFs da escola
> A alternativa B está correta. RAG é adequado para bases dinâmicas porque permite atualizar o conhecimento reindexando os documentos, sem retreinar todo o modelo.
:::

:::questao Sobre limitações e evoluções do RAG, qual afirmação está correta?
a) RAG elimina totalmente alucinação porque toda resposta vem de documentos
b) Hybrid search combina busca vetorial e busca textual para melhorar recuperação em casos como siglas e termos exatos *
c) Reranking substitui a etapa de indexação, então não é preciso vetorizar os documentos
d) Se a base estiver desatualizada, o modelo corrige isso sozinho durante a geração
> A alternativa B está correta. Hybrid search soma forças de duas estratégias de busca. As outras alternativas exageram o que o RAG faz ou descrevem incorretamente o papel do reranking e da atualização da base.
:::

## Atividade prática

Desenhe um caso de uso de RAG para um contexto real seu. Pode ser, por exemplo, um assistente para alunos com base em apostilas da disciplina, um bot que consulta regulamentos da escola ou um sistema que recupera decisões públicas do TJPR para responder perguntas iniciais.

:::exercicio
Entregue um esquema com quatro partes: fonte dos documentos, estratégia de indexação, exemplo de pergunta do usuário e como o sistema verificaria se os trechos recuperados realmente ajudam a responder. Se quiser, acrescente uma ideia de melhoria com hybrid search ou reranking.
:::

:::roteiro
Uma demonstração boa é carregar um conjunto pequeno de documentos e comparar duas respostas: uma sem RAG e outra com RAG. A turma percebe rápido que a resposta com base recuperada costuma citar melhor o conteúdo, mas também vê que o sistema ainda depende da qualidade da busca.
:::

## Fechamento

:::resumo
- RAG conecta o LLM a bases externas para responder com contexto atualizado e específico
- O pipeline central envolve indexação, busca e geração
- RAG ajuda a reduzir alucinação, mas não elimina o problema por completo
- Hybrid search melhora recuperação quando termos exatos importam
- Reranking refina a escolha dos melhores trechos antes da resposta final
:::
