---
title: Avaliação de Sistemas de IA (Evals)
description: Como medir qualidade em sistemas de IA com métricas, casos de teste, benchmarks e revisão humana.
order: 24
published: true
---

# Aula 24 — Avaliação de Sistemas de IA (Evals)

Construir um sistema de IA que “parece bom” em uma demonstração não significa que ele funciona bem no mundo real. Em produção, o que importa é consistência: acertar mais vezes, falhar menos em casos críticos e mostrar desempenho confiável ao longo do tempo. É para isso que servem os **evals** — avaliações estruturadas de sistemas de IA.

## O que significa avaliar um sistema de IA

:::objetivo
Ao final da aula, o estudante será capaz de diferenciar teste informal de avaliação estruturada e montar um plano simples de eval para um sistema de IA.
:::

:::conceito
**Evals** são procedimentos planejados para medir a qualidade de um sistema de IA com critérios claros, casos de teste definidos e análise dos resultados.
:::

Perguntar “ficou legal?” não é avaliação suficiente. Uma avaliação séria precisa responder coisas como:

- o sistema acertou a tarefa proposta?
- em quais tipos de caso ele falha mais?
- o erro é pequeno ou perigoso?
- o desempenho melhorou ou piorou depois de uma mudança?

Em um chatbot institucional, por exemplo, não basta ele responder de forma simpática. É preciso saber se respondeu corretamente, se não inventou informação e se encaminhou o usuário certo para o setor correto.

:::questao Em um cenário real, uma escola cria um agente para responder dúvidas sobre matrícula, documentos e prazos. Qual prática caracteriza melhor uma avaliação de verdade desse sistema?
a) Mostrar o bot para dois colegas e perguntar se eles “gostaram”
b) Separar um conjunto de perguntas reais, definir critérios de acerto e comparar os resultados antes e depois de cada mudança *
c) Trocar o nome do agente para algo mais profissional
d) Medir apenas quantas palavras o bot escreve por resposta
> A alternativa B está correta. Evals exigem casos de teste, critérios e comparação de resultados. Opinião informal pode ajudar, mas não substitui avaliação estruturada.
:::

## Métricas, casos e critérios de qualidade

Existem métricas **quantitativas** e **qualitativas**. Quantitativas são números como taxa de acerto, precisão, recall, tempo de resposta e custo por chamada. Qualitativas analisam clareza, utilidade, aderência ao tom institucional e segurança da resposta.

O tipo de métrica depende da tarefa. Em classificação, faz sentido medir acerto por classe. Em extração, faz sentido comparar campos corretos. Em resumo, talvez seja necessário revisão humana com rubrica. Em atendimento, pode ser essencial medir se o usuário foi bem encaminhado.

Também é importante criar um **conjunto de casos** representativo. Se o sistema só é avaliado com perguntas fáceis, ele parece ótimo sem ser. Bons evals incluem:

- casos comuns do dia a dia
- casos ambíguos
- casos críticos ou sensíveis
- casos que já falharam antes

:::importante
Avaliar IA não é procurar um número mágico único. É medir desempenho por tarefa e observar onde o sistema é confiável — e onde ainda não é.
:::

```python
# Exemplo simples de comparação entre respostas esperadas e respostas do sistema.
# Aqui a ideia é contar quantos casos foram avaliados como corretos.

casos = [
    {"pergunta": "Prazo de matrícula", "esperado": "secretaria"},
    {"pergunta": "2a chamada de prova", "esperado": "coordenação"},
    {"pergunta": "Atestado médico", "esperado": "pedagógico"},
]

acertos = 0

for caso in casos:
    # Em um sistema real, esta linha chamaria a IA ou o agente.
    resposta_do_sistema = classificar_destino(caso["pergunta"])

    # Conta acerto quando a resposta bate com o destino esperado.
    if resposta_do_sistema == caso["esperado"]:
        acertos += 1

print(f"Taxa de acerto: {acertos / len(casos):.0%}")
```

:::questao Ao montar um conjunto de avaliação para um chatbot institucional, qual erro ou problema compromete mais a qualidade do eval?
a) Incluir perguntas frequentes e perguntas raras
b) Medir tempo de resposta junto com taxa de acerto
c) Testar só exemplos fáceis e evitar casos ambíguos ou críticos *
d) Separar critérios de clareza e correção
> A alternativa C está correta. Se o conjunto de testes ignora os casos difíceis, a avaliação cria uma falsa sensação de qualidade. O sistema parece bom só porque foi pouco desafiado.
:::

## Benchmark, revisão humana e avaliação contínua

**Benchmark** é um conjunto padronizado de tarefas usado para comparar modelos ou versões. Ele é útil para ter referência, mas não resolve tudo. Um benchmark genérico pode não representar o seu problema real. Um agente escolar, por exemplo, precisa ser avaliado com perguntas da escola, não apenas com testes gerais da internet.

Além disso, muitos sistemas exigem **revisão humana**. Isso acontece quando a resposta precisa ser julgada por critérios mais subjetivos, como clareza, tom, utilidade ou adequação a uma política institucional. O melhor cenário costuma ser combinar os dois mundos: métricas automáticas para escala e revisão humana para profundidade.

Avaliação também não é evento único. Sempre que você muda prompt, base de conhecimento, modelo, ferramenta ou fluxo, precisa conferir se o sistema melhorou ou regrediu. Isso é especialmente importante em agentes com RAG, tools e múltiplas etapas.

:::exemplo
Se um chatbot da escola passou a responder mais rápido depois de uma mudança, isso pode parecer ótimo. Mas se a taxa de encaminhamento correto caiu, a mudança piorou o sistema apesar da melhora em velocidade.
:::

:::questao Um time trocou o modelo de um agente de triagem e percebeu queda no custo e no tempo de resposta. Mesmo assim, a equipe decidiu manter os evals rodando. Por quê?
a) Porque avaliação contínua serve para verificar se a redução de custo não piorou a qualidade ou a segurança das respostas *
b) Porque eval só existe para justificar o uso de modelos mais caros
c) Porque benchmarks substituem qualquer observação do mundo real
d) Porque quando o sistema fica mais barato ele necessariamente fica menos ético
> A alternativa A está correta. Melhorar custo e velocidade é ótimo, mas não basta. É preciso confirmar que a mudança não trouxe mais erros, alucinações ou encaminhamentos inadequados.
:::

## Questões de fixação

:::questao Um órgão público quer testar um assistente para triagem inicial de pedidos dos cidadãos. Qual situação representa um bom cenário aplicado de avaliação por tarefa?
a) Medir só quantas respostas o assistente gera por minuto
b) Separar pedidos por tipo, definir resposta esperada para cada grupo e analisar taxa de encaminhamento correto *
c) Pedir que os servidores usem o sistema sem nenhum critério e relatem impressões soltas
d) Trocar o modelo toda semana para ver qual “parece mais inteligente”
> A alternativa B está correta. Avaliação por tarefa exige decompor o problema, definir expectativa por tipo de caso e medir se o sistema cumpre o objetivo operacional.
:::

:::questao Sobre evals em sistemas de IA, qual afirmação está correta?
a) Se o sistema foi bem em uma demonstração ao vivo, não precisa de avaliação adicional
b) Um único benchmark genérico sempre substitui casos reais do domínio
c) Métricas quantitativas e revisão qualitativa podem ser combinadas para avaliar melhor o sistema *
d) Evals só fazem sentido para modelos muito grandes usados por big techs
> A alternativa C está correta. Sistemas reais costumam exigir números e interpretação humana. Um completa o outro.
:::

## Atividade prática

:::exercicio
Escolha um sistema de IA plausível para sua realidade — por exemplo, chatbot escolar, classificador de chamados, assistente de biblioteca ou triagem de e-mails. Monte um mini plano de eval com cinco casos de teste, pelo menos duas métricas quantitativas e dois critérios qualitativos. Ao final, escreva qual erro seria mais grave se o sistema falhasse em produção.
:::

:::roteiro
Se a turma estiver mais avançada, dá para pedir uma planilha com colunas de pergunta, resposta esperada, resposta obtida, nota de clareza e observação de risco. Isso aproxima bastante do trabalho real de QA em IA.
:::

## Fechamento

:::resumo
- Evals medem qualidade de sistemas de IA com critérios claros e casos de teste definidos
- A métrica depende da tarefa: classificação, extração, resumo, triagem ou atendimento pedem avaliações diferentes
- Bons conjuntos de casos incluem situações fáceis, ambíguas e críticas
- Benchmark ajuda, mas não substitui avaliação no domínio real do sistema
- Avaliação contínua é essencial sempre que prompt, modelo, base ou fluxo mudam
:::
