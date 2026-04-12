---
title: O Valor dos Dados na Era da Informação
description: Aula sobre dados como registros de sistemas digitais, com foco em tipos, qualidade, uso responsável e transformação em informação útil.
order: 9
published: true
---

# Aula 09 — O Valor dos Dados na Era da Informação

Se as redes mostram como a informação circula, agora precisamos olhar para o que circula nelas: os dados. Em tecnologia, dado não é palavra da moda. É matéria-prima. Sistemas coletam, armazenam, cruzam e interpretam dados o tempo todo para funcionar, recomendar, controlar acesso, registrar atividades e apoiar decisões.

## Abertura

:::objetivo
Compreender o que são dados, diferenciar dado de informação e reconhecer por que qualidade, organização e responsabilidade são essenciais em sistemas digitais.
:::

:::dica
Sempre que um sistema pedir nome, horário, foto, localização, nota, clique ou histórico, pergunte: para que esse dado será usado e que informação ele poderá gerar?
:::

:::curiosidade
Muitos serviços gratuitos parecem simples, mas se sustentam justamente porque transformam dados de uso em personalização, métricas, publicidade ou tomada de decisão.
:::

## O que são dados e como eles viram informação

:::conceito
Dados são registros brutos de fatos, eventos, características ou ações. Quando esses registros são organizados, interpretados e colocados em contexto, eles podem gerar informação útil.
:::

Essa distinção é central. Um nome digitado sozinho, uma nota isolada, um horário de acesso ou uma coordenada de localização ainda são dados. Eles passam a virar informação quando o sistema ou a pessoa os organiza para responder uma pergunta. Por exemplo: quem faltou mais? Qual turma teve maior atraso? Que produto vendeu mais? Qual aluno ainda não enviou a atividade?

Também é importante perceber que dados aparecem em vários formatos. Eles podem ser número, texto, imagem, áudio, localização, data, registro de acesso, histórico de navegação ou resposta a um formulário. Sistemas diferentes coletam tipos diferentes de dado conforme a finalidade.

Quando começamos a estudar lógica e programação, alguns tipos aparecem com muita frequência e precisam ser nomeados com clareza:

- **Inteiro**: valores numéricos positivos ou negativos sem casa decimal, como `-3`, `0` e `25`
- **Real**: valores numéricos positivos ou negativos com casa decimal, como `7,5`, `3,14` e `-0,8`
- **Lógico**: valores booleanos com apenas dois estados, como `VERDADEIRO` e `FALSO`
- **Texto**: sequência de um ou mais caracteres, normalmente representada entre aspas, como `"Toni"` ou `"Aula 09"`

:::importante
Esses quatro tipos ajudam a entender como um sistema representa informações diferentes. Idade pode ser armazenada como inteiro, média final como real, matrícula ativa como lógico e nome do aluno como texto.
:::

:::importante
Uma forma simples de pensar o fluxo é esta:
- **coletar** dados
- **armazenar** de forma organizada
- **processar** para encontrar relações ou resultados
- **usar** a informação gerada para agir ou decidir
:::

Quando o aluno entende esse ciclo, deixa de tratar sistemas como caixas pretas. Ele percebe que, por trás da interface, existe entrada de dados, estrutura de armazenamento, tratamento e saída de informação.

:::exemplo
Em uma escola, faltas, notas, entregas e horários são dados. Quando a coordenação organiza esses registros e identifica quais estudantes precisam de acompanhamento, surge uma informação útil para intervenção.
:::

:::questao Qual situação mostra melhor a diferença entre dado e informação?
a) Uma escola registra faltas e depois organiza esses registros para descobrir quais alunos precisam de apoio *
b) Um computador é ligado sem que nenhum registro seja usado
c) Um monitor é limpo antes da aula
d) Um mouse é trocado de porta USB
> A alternativa correta é a letra A porque mostra dados brutos sendo organizados para gerar uma informação que orienta uma decisão.
:::

## Qualidade dos dados, utilidade e riscos

:::importante
Dado só tem valor técnico quando é confiável, organizado e protegido. Dado incompleto, duplicado, desatualizado ou exposto pode gerar prejuízo real.
:::

Essa discussão é importante porque alunos costumam ouvir que “dados valem ouro”, mas raramente alguém explica por quê e em que condições. Dados têm valor quando ajudam um sistema a funcionar melhor, apoiar uma decisão, registrar uma operação ou oferecer um serviço útil. Sem propósito, o dado vira ruído. Sem qualidade, vira erro. Sem proteção, vira risco.

Por isso, estudar dados também é estudar responsabilidade. Um sistema mal projetado pode coletar informação demais, pedir dados desnecessários, guardar campos mal preenchidos ou expor dados sensíveis sem necessidade. Em Desenvolvimento de Sistemas, isso não é detalhe: é parte da qualidade da solução.

:::atencao
Um erro comum é pensar que quanto mais dados um sistema coleta, melhor ele será. Se os dados forem inúteis, repetidos, errados ou desnecessários, o excesso só aumenta confusão e risco.
:::

:::questao Qual problema aparece quando um sistema coleta muitos dados sem validar o que recebe?
a) Ele necessariamente se torna mais inteligente e mais seguro
b) Pode gerar registros inconsistentes, análise ruim e aumento de risco para o usuário *
c) Elimina automaticamente a necessidade de revisão humana
d) Faz com que qualquer decisão do sistema esteja correta
> A alternativa correta é a letra B porque dado sem critério e sem qualidade atrapalha tanto o funcionamento quanto a confiabilidade do sistema.
:::

## Questões de fixação

:::questao Em um cenário de desenvolvimento, qual prática mostra uso mais responsável de dados?
a) Coletar apenas o necessário, nomear bem os campos e controlar quem pode acessar as informações *
b) Pedir todo tipo de dado possível, mesmo sem finalidade clara
c) Permitir cadastros duplicados e incompletos sem conferência
d) Deixar dados sensíveis visíveis para qualquer usuário do sistema
> A alternativa correta é a letra A porque qualidade e proteção fazem parte do uso técnico responsável dos dados.
:::

:::questao Qual alternativa define melhor dado?
a) Registro bruto que ainda precisa de contexto e organização para gerar informação útil *
b) Decisão final tomada pelo gestor
c) Programa que controla o sistema operacional
d) Peça física conectada à placa-mãe
> A alternativa correta é a letra A porque dado é a matéria-prima, não a conclusão pronta.
:::

:::questao Sobre dados, qual NÃO é verdadeira?
a) Eles podem existir em formatos como texto, número, imagem e localização
b) Dados organizados podem gerar informação útil
c) Todo dado coletado é automaticamente necessário e confiável *
d) Dados mal preenchidos ou mal protegidos podem gerar problemas reais
> A alternativa correta é a letra C porque a utilidade do dado depende de propósito, qualidade e contexto.
:::

## Atividade prática

:::exercicio
Escolha um sistema real, como plataforma escolar, aplicativo de transporte, streaming, sistema de biblioteca ou loja online. Identifique: (1) que dados ele coleta, (2) para que cada dado serve, (3) que informação útil pode ser gerada a partir deles e (4) que risco aparece se esses dados estiverem errados, duplicados, desatualizados ou expostos. Dê exemplos concretos de campos, e não respostas genéricas.
:::

:::importante
Evite frases como “o sistema coleta dados do usuário”. Nomeie exemplos: e-mail, horário de acesso, localização, nota, foto, senha, item emprestado, forma de pagamento.
:::

:::roteiro
Uma boa mediação é pedir que a turma compare um sistema que pede dados com finalidade clara e outro que parece coletar informação demais sem explicação evidente.
:::

## Fechamento

:::resumo
- Dados são registros brutos que podem gerar informação quando organizados e interpretados
- Valor do dado depende de qualidade, finalidade, contexto e proteção
- Aprender computação inclui saber usar dados com critério técnico e responsabilidade
:::
