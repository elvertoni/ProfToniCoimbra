---
title: Tipos de Aprendizado de Máquina
description: Se o Machine Learning é a capacidade de aprender com dados, a pergunta natural é: aprender como? Existem formas muito diferentes de um modelo aprender — e a ...
order: 4
published: true
---

# Aula 04 — Tipos de Aprendizado de Máquina

Se o Machine Learning é a capacidade de aprender com dados, a pergunta natural é: aprender como? Existem formas muito diferentes de um modelo aprender — e a escolha do tipo certo de aprendizado define o que é possível construir. Os três tipos principais são o supervisionado, o não supervisionado e o por reforço. Cada um tem uma lógica própria, casos de uso específicos e limitações que todo desenvolvedor que trabalha com IA precisa conhecer.

## Aprendizado supervisionado — aprender com exemplos rotulados

:::conceito
**Definição:** No aprendizado supervisionado, o modelo aprende a partir de pares de entrada e saída já conhecidos. Para cada exemplo de treino, existe uma resposta correta — o rótulo — que o modelo usa para ajustar seus parâmetros.
:::

É o tipo mais comum e mais utilizado na prática. O processo funciona assim: você fornece muitos exemplos com a resposta certa, o modelo tenta acertar, compara com o gabarito e corrige o erro. Essa repetição faz com que ele aprenda padrões que permitem prever a resposta correta em novos casos parecidos.

Um exemplo clássico é o **filtro de spam**. Imagine um dataset com milhares de e-mails marcados como "spam" ou "não spam". O modelo aprende padrões estatísticos: termos suspeitos, links encurtados, remetentes repetidos, tom apelativo e assim por diante. Depois do treino, ele recebe um e-mail novo e estima a probabilidade de ser spam.

:::questao Uma equipe de TI de uma escola técnica quer treinar um modelo para classificar tickets de suporte em categorias como "hardware", "software" e "rede". Eles têm 2.000 tickets já classificados por analistas experientes. Qual tipo de aprendizado se aplica e por quê?
a) Aprendizado não supervisionado, porque o algoritmo encontrará os grupos automaticamente
b) Aprendizado por reforço, porque o modelo receberá uma nota a cada classificação correta
c) Aprendizado supervisionado, porque existem tickets com rótulos corretos que ensinam o modelo *
d) Busca em banco de dados, porque os tickets já estão em uma planilha organizada
> A alternativa C está correta. Quando há exemplos rotulados — entradas com a saída correta conhecida — o problema se enquadra no aprendizado supervisionado, onde o modelo aprende a mapear entradas às saídas corretas.
:::

Esse mesmo raciocínio vale para prever preço de imóvel, detectar fraude com histórico rotulado ou classificar imagens médicas. O ponto forte do supervisionado é a objetividade do treino. O ponto fraco é o custo de conseguir bons rótulos. Se os dados estiverem enviesados, incompletos ou mal marcados, o modelo aprende o erro como se fosse verdade.

:::atencao
Aprendizado supervisionado não corrige sozinho vieses do dataset. Se um conjunto de dados históricos estiver ruim, o modelo tende a repetir esse padrão com aparência de precisão.
:::

## Aprendizado não supervisionado — encontrar padrões sem gabarito

:::importante
**Supervisionado vs não supervisionado:** No supervisionado, alguém já sabe a resposta correta e ensina o modelo. No não supervisionado, ninguém entrega o gabarito — o algoritmo precisa descobrir estruturas escondidas nos dados por conta própria.
:::

Quando não existem rótulos, o modelo precisa encontrar padrões sozinho. As técnicas mais comuns são **clustering** — agrupar dados parecidos — e **redução de dimensionalidade** — condensar informação complexa em representações menores. Em vez de responder "qual é a classe correta?", o algoritmo tenta descobrir como os dados se organizam.

Um exemplo muito usado é **clustering de clientes**. Imagine uma rede varejista ou um app de delivery em Curitiba analisando frequência de compra, ticket médio, horário de uso e categoria favorita. Sem saber previamente quantos perfis existem, o algoritmo pode encontrar grupos como clientes recorrentes, compradores ocasionais e usuários que só aparecem em promoções. Isso ajuda em marketing, atendimento e personalização.

:::questao Um gestor quer entender como seus clientes se comportam, mas não sabe quantos perfis existem na base. Ele pede ao analista para rodar um algoritmo de clustering. O resultado traz 4 grupos, mas nenhum deles tem nome ou legenda. O que esse resultado revela sobre o método?
a) O algoritmo falhou porque clustering supervisionado exige rótulos
b) O algoritmo entregou os grupos corretamente, mas a interpretação é responsabilidade da equipe humana *
c) Clustering só funciona se o gestor já souber quantos grupos existem antes de rodar
d) O resultado não pode ser usado porque falta uma variável chamada "perfil do cliente"
> A alternativa B está correta. Clustering encontra padrões estatísticos automaticamente, mas não os rotula. Cabem ao time de negócio interpretar o significado de cada grupo — sem isso, o resultado é apenas números sem ação prática.
:::

Mas existe um risco importante: o cluster não vem com legenda. O algoritmo agrupa padrões; cabe ao time interpretar o que cada grupo significa. Se a equipe interpretar mal ou usar variáveis ruins, o resultado pode parecer inteligente e ainda assim ser inútil para o negócio.

## Aprendizado por reforço — aprender com tentativa, erro e recompensa

:::exemplo
É como treinar alguém num jogo sem entregar o manual completo. A pessoa testa uma ação, observa o resultado e vai ajustando o comportamento para maximizar a pontuação.
:::

No aprendizado por reforço, existe um **agente**, um **ambiente**, um conjunto de **ações possíveis** e uma **recompensa**. O agente toma decisões, observa o que acontece e aprende uma política — ou seja, uma estratégia — que maximize a recompensa acumulada ao longo do tempo.

O caso mais famoso é o **AlphaGo**, da DeepMind. O sistema jogou inúmeras partidas, recebeu sinais de sucesso e fracasso e aprendeu estratégias cada vez melhores até superar campeões humanos. Esse tipo de aprendizado é muito poderoso quando o problema envolve sequência de decisões: jogos, robótica, controle de tráfego, navegação autônoma e otimização operacional.

:::questao Um time quer treinar um agente虚拟 para controlar o semáforo de um cruzamento movimentado. O agente recebe nota alta quando o fluxo de veículos é fluido e nota baixa quando há congestionamento. Qual tipo de aprendizado se encaixa nesse cenário?
a) Supervisionado, porque o time tem um histórico de decisões corretas
b) Não supervisionado, porque o agente descobre padrões de trânsito sozinho
c) Por reforço, porque o agente aprende a tomar decisões sequenciais com base em recompensas *
d) Clustering, porque o objetivo é agrupar padrões de tráfego
> A alternativa C está correta. O agente recebe feedback numérico — recompensa ou penalidade — após cada ação e ajusta sua política para maximizar o resultado acumulado ao longo do tempo. Esse é o cenário clássico de aprendizado por reforço.
:::

Ao mesmo tempo, reforço é uma área delicada. Se a função de recompensa estiver mal desenhada, o agente pode aprender a "explorar a regra" em vez de aprender o comportamento desejado. Esse problema é chamado de **reward hacking**. Em outras palavras: o sistema pode maximizar a métrica e ainda assim falhar no objetivo real.

## RLHF — reforço com feedback humano nos LLMs

:::conceito
**RLHF:** Reinforcement Learning from Human Feedback é uma técnica em que avaliadores humanos classificam respostas do modelo, e esse feedback é usado para ajustar o sistema para responder de forma mais útil, segura e alinhada.
:::

Nos LLMs modernos, o treinamento normalmente acontece em fases. Primeiro, o modelo passa por um treino massivo para prever o próximo token em enormes volumes de texto. Depois, ele pode receber ajuste supervisionado com exemplos de instrução e respostas. Em seguida entra o **RLHF**, que usa feedback humano para ensinar preferências: respostas mais úteis, menos tóxicas, menos confusas e mais adequadas ao contexto.

É por isso que ChatGPT, Claude e sistemas semelhantes parecem mais conversacionais do que um modelo cru treinado só para prever texto. Eles não aprenderam apenas linguagem; aprenderam também um conjunto de comportamentos desejados pelos humanos que os avaliaram. Isso não elimina erro, viés ou alucinação, mas melhora bastante a interação.

:::questao Sobre as técnicas de aprendizado e sua presença nos LLMs modernos, qual afirmação está correta?
a) Um LLM como o ChatGPT usa apenas aprendizado supervisionado em todas as fases do treino
b) RLHF é a fase em que o modelo aprende a preferir respostas mais úteis e seguras com base em classificações humanas *
c) Clustering de clientes é uma aplicação direta de RLHF em sistemas de recomendação
d) Aprendizado por reforço só aparece em LLMs que jogam xadrez, nunca em chatbots
> A alternativa B está correta. RLHF — Reinforcement Learning from Human Feedback — é justamente a técnica que usa avaliadores humanos para classificar respostas e ajustar o comportamento do modelo. As demais alternativas distorcem os tipos de aprendizado ou os restringem a contextos errados.
:::

## Onde cada tipo aparece nos LLMs

Na prática, os grandes sistemas atuais misturam mais de uma forma de aprendizado. Um LLM passa por **aprendizado supervisionado** quando usa exemplos rotulados de instrução e resposta. Usa ideias próximas do **não supervisionado** quando aprende representações e estruturas em grandes volumes de texto sem rótulos manuais detalhados. E usa **reforço** com RLHF para alinhar o comportamento final com preferências humanas.

Essa ponte importa porque a trilha daqui para frente vai falar de prompts, RAG, agentes e tool use. Em todos esses temas, você vai ver reflexos dos tipos de aprendizado estudados hoje. Quando um modelo segue bem uma instrução, existe treinamento supervisionado por trás. Quando ele entende similaridade semérica entre textos, existe aprendizado de representação por trás. Quando ele evita certos comportamentos e prefere outros, muitas vezes há alinhamento via RLHF por trás.

:::dica
Ao estudar LLMs, tente sempre se perguntar: "essa capacidade veio de exemplos rotulados, de padrões descobertos nos dados ou de ajuste por feedback humano?" Essa pergunta ajuda a enxergar o sistema com mais clareza técnica.
:::

:::questao Uma empresa anuncia que seu sistema de IA "aprendeu sozinho a detectar fraudes sem nenhum dado rotulado". Um técnico analisa o sistema e percebe que ele na verdade recebeu um arquivo com 50.000 transações já marcadas como fraude ou legítimas. Qual afirmação sobre o método usado está correta e qual erro de comunicação foi cometido?
a) O técnico está errado — qualquer IA aprende sem dados, inclusive assim
b) O sistema usou aprendizado supervisionado com dados rotulados; a propaganda exagerou ao chamar de "sem dado nenhum" *
c) O sistema usou reforço, porque detectou fraude sem supervisão humana
d) "Aprender sozinho" é um termo técnico válido para qualquer tipo de aprendizado de máquina
> A alternativa B está correta. O método descrito — usar transações marcadas como fraude ou legítimas — é aprendizado supervisionado com dados rotulados. A propaganda cometeu um erro de comunicação ao usar "sem nenhum dado", quando na verdade havia um dataset rotulado. Esse tipo de imprecisão é comum e pode gerar expectativas erradas sobre o que a IA realmente fez.
:::

## Questões de fixação

:::questao Sobre os três tipos de aprendizado de máquina, qual alternativa NÃO representa corretamente o método?
a) Supervisionado: aprende com pares de entrada e saída já conhecidos
b) Não supervisionado: agrupa dados similares sem conhecer categorias previamente
c) Por reforço: usa um gabarito fixo para corrigir o modelo a cada passo
d) Supervisionado: exige dados sem qualquer tipo de rótulo para funcionar *
> A alternativa D está correta. Supervisionado é justamente o oposto — ele exige dados rotulados, ou seja, pares de entrada com a saída correta. A alternativa que afirma que supervisionado funciona sem rótulos contradiz a definição central do método.
:::

## Atividade prática

Analise os quatro cenários abaixo e identifique qual tipo de aprendizado faz mais sentido em cada caso. Depois explique, em duas ou três linhas, por que você escolheu essa abordagem.

- Um sistema da **SEED-PR** quer prever evasão escolar com base em históricos já classificados de alunos que abandonaram ou concluíram o curso.
- Uma empresa quer segmentar clientes por comportamento de compra sem saber previamente quantos perfis existem.
- Um agente precisa aprender a tomar decisões em um jogo de estratégia com recompensas ao vencer e penalidades ao perder.
- Um laboratório quer melhorar o comportamento de um chatbot com base em comparações feitas por avaliadores humanos entre respostas melhores e piores.

:::exercicio
Entregue uma tabela com as colunas: cenário, tipo de aprendizado e justificativa. No final, escreva um parágrafo conectando pelo menos dois desses cenários ao funcionamento de LLMs modernos.
:::

:::roteiro
Antes da atividade, posso provocar a turma com a pergunta: "O ChatGPT usa qual tipo de aprendizado?" A resposta correta é mais interessante do que parece: ele combina diferentes formas de aprendizado em etapas distintas do pipeline.
:::

## Fechamento

:::resumo
- Supervisionado aprende com dados rotulados e é ideal para classificação e previsão com gabarito
- Não supervisionado encontra padrões sem rótulos, como no clustering de clientes
- Reforço aprende com recompensa ao longo do tempo, como no caso do AlphaGo
- RLHF aplica ideias de reforço com feedback humano para alinhar LLMs modernos
- Em LLMs reais, os tipos de aprendizado aparecem combinados, não isolados
:::
