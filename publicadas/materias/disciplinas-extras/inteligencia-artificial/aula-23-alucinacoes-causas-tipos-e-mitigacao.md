---
title: Alucinações — Causas, Tipos e Mitigação
description: Por que LLMs alucinam, como identificar sinais de risco e quais estratégias reduzem respostas inventadas.
order: 23
published: true
---

# Aula 23 — Alucinações — Causas, Tipos e Mitigação

Uma das coisas mais perigosas da IA generativa é que ela pode errar de forma convincente. O texto sai fluente, organizado e com tom de autoridade — mas a informação pode estar incompleta, imprecisa ou totalmente inventada. Esse fenômeno é chamado de alucinação, e entendê-lo é obrigatório para qualquer pessoa que queira usar LLMs de forma séria.

## Por que os LLMs alucinam

:::objetivo
Ao final da aula, o estudante será capaz de explicar por que alucinações acontecem em modelos de linguagem e aplicar estratégias práticas para reduzir esse risco.
:::

:::conceito
**Alucinação** é quando o modelo gera uma resposta plausível na forma, mas incorreta, inventada ou sem base confiável no conteúdo.
:::

A causa estrutural é simples de dizer e importante de entender: LLMs fazem **previsão do próximo token**. Eles não consultam automaticamente uma base de fatos verdadeiros antes de responder. O modelo estima qual sequência de palavras parece mais provável naquele contexto. Quando o contexto é fraco, ambíguo ou insuficiente, ele ainda tenta completar a resposta. É daí que nasce boa parte das alucinações.

Isso não significa que o modelo “quer enganar”. Significa que a tarefa principal dele é gerar continuidade estatística coerente, não garantir verdade factual. Por isso, frases bem escritas podem esconder erro grave.

:::importante
Um LLM não “sabe” a resposta do jeito que um professor ou um banco de dados sabe. Ele calcula probabilidades com base no contexto disponível e nos padrões aprendidos durante o treinamento.
:::

:::questao Em um cenário real, um aluno pede a um chatbot para resumir um artigo científico que ele nunca enviou. O sistema responde com título, autores e conclusões muito específicas. O que explica melhor esse comportamento?
a) O modelo acessou automaticamente todas as bases acadêmicas do mundo
b) O modelo previu tokens plausíveis para preencher a lacuna, mesmo sem fonte confiável no contexto *
c) O modelo só inventa quando a pergunta está em português
d) Isso prova que o chatbot tem memória perfeita de tudo que foi publicado
> A alternativa B está correta. Quando não tem a fonte real no contexto, o LLM ainda tenta produzir uma continuação provável. O resultado pode parecer detalhado e confiante, mas ser inventado.
:::

## Tipos comuns de alucinação

Nem toda alucinação é igual. Algumas aparecem como detalhes inventados; outras, como raciocínios errados com aparência de lógica. Três tipos aparecem com frequência:

- **factual** — inventa dado, data, nome, artigo, referência ou número
- **de citação** — atribui frase, lei ou fonte a alguém sem que isso exista daquele jeito
- **de raciocínio aplicado** — usa uma regra real no contexto errado e tira uma conclusão incorreta

No contexto educacional, um chatbot pode inventar a autoria de uma obra literária. No contexto jurídico, pode citar um artigo inexistente ou misturar regras de leis diferentes. Como a redação costuma soar segura, muita gente percebe o erro tarde demais.

:::exemplo
Um assistente jurídico pode responder: “o artigo 312 da LGPD determina...” mesmo que esse artigo nem exista. A estrutura da frase parece profissional, mas a base factual está errada.
:::

:::questao Ao analisar a resposta de um assistente jurídico, qual sinal aponta um erro ou problema típico de alucinação?
a) O texto está organizado em tópicos
b) A resposta cita artigo, tribunal e data com muita confiança, mas sem fonte verificável *
c) O modelo respondeu em menos de cinco segundos
d) A pergunta foi feita em linguagem formal
> A alternativa B está correta. Um dos sinais mais comuns de alucinação é a combinação de tom seguro com detalhes específicos sem fonte conferível. Fluência não é evidência.
:::

## Como detectar e mitigar

Reduzir alucinação não depende de uma única técnica. É uma combinação de **bom prompt**, **bom contexto**, **RAG quando necessário** e **validação humana ou automática**.

Algumas estratégias práticas funcionam muito bem:

- pedir que o modelo informe quando não tem certeza
- delimitar a tarefa com contexto suficiente
- exigir resposta baseada apenas no material fornecido
- recuperar trechos relevantes com RAG antes da geração
- validar nomes, números, artigos de lei e citações antes de usar a saída

Prompt bem feito ajuda porque reduz ambiguidade. RAG ajuda porque traz informação externa confiável para dentro da janela de contexto. Validação ajuda porque mesmo com bom prompt e bom RAG ainda pode haver erro.

:::atencao
RAG reduz alucinação, mas não elimina. Se os documentos recuperados forem ruins, antigos ou fora do assunto, o modelo continua podendo responder errado.
:::

:::questao Um professor quer usar IA para responder dúvidas dos alunos sobre o regulamento da escola. Qual combinação reduz melhor o risco de alucinação nesse caso?
a) Temperatura alta e respostas livres, para o texto ficar mais criativo
b) Prompt curto, sem contexto, para o modelo “pensar sozinho”
c) RAG com o regulamento atualizado, instrução para citar a fonte usada e revisão dos pontos críticos *
d) Pedir que o modelo responda sempre com convicção, mesmo quando não tiver certeza
> A alternativa C está correta. Regulamento escolar é um caso perfeito para usar base documental atualizada, instrução clara e validação final. Criatividade não é prioridade aqui; precisão é.
:::

## Questões de fixação

:::questao Em um contexto educacional, um aluno pede a um chatbot: “qual foi a nota que tirei na recuperação do último bimestre?”, mas o sistema não tem acesso ao diário oficial da turma. Qual seria a melhor resposta do sistema?
a) Inventar um valor próximo para não frustrar o usuário
b) Dizer que não possui acesso confiável àquela informação e orientar onde conferir o dado correto *
c) Responder com a nota média da turma e fingir que é a nota individual
d) Gerar uma explicação longa para desviar da pergunta original
> A alternativa B está correta. O melhor comportamento não é “responder qualquer coisa”, mas reconhecer limite de acesso à informação e encaminhar o usuário para a fonte correta.
:::

:::questao Sobre alucinações em LLMs, qual afirmação NÃO é verdadeira?
a) Elas podem surgir quando o contexto é insuficiente ou ambíguo
b) Podem acontecer mesmo em respostas muito bem escritas e convincentes
c) RAG e validação ajudam a reduzir o problema, mas não garantem erro zero
d) Sempre que o modelo escreve com confiança, a chance de alucinação é mínima *
> A alternativa D está incorreta — e essa é a resposta. Confiança textual não prova verdade. Justamente o perigo da alucinação é parecer correta quando não é.
:::

## Atividade prática

:::exercicio
Faça dois testes com um mesmo tema factual. No primeiro, pergunte algo amplo a um chatbot sem fornecer contexto. No segundo, envie um texto-base curto ou um trecho confiável e peça que a resposta use apenas aquele material. Compare os dois resultados e destaque: onde apareceu maior risco de invenção, que tipo de alucinação apareceu e quais sinais ajudariam você a detectar o problema.
:::

:::roteiro
Se quiser aproximar da realidade dos alunos, use um regulamento escolar, uma notícia local ou um trecho jurídico simples. A demonstração mais forte é mostrar duas respostas bonitas: uma errada e outra melhor ancorada em fonte. A turma percebe rápido que “parece correto” não basta.
:::

## Fechamento

:::resumo
- LLMs alucinam porque geram texto por previsão de próximos tokens, não por garantia automática de verdade
- Há alucinações factuais, de citação e de raciocínio aplicado
- Tom confiante e detalhes específicos sem fonte são sinais clássicos de risco
- Prompt claro, RAG, contexto atualizado e validação reduzem o problema
- Em tarefas críticas, o melhor sistema é o que sabe reconhecer limite e pedir verificação
:::
