# Aula 18 — UML — Diagrama de Atividades e Diagrama de Sequência

Nesta aula, a turma vai modelar comportamentos dinâmicos com Diagramas de Atividades e de Sequência, representando fluxos de trabalho e interações temporais de um sistema.

## Abertura

:::objetivo
Ao final da aula, a turma deverá: compreender o Diagrama de Atividades e sua utilização para representar fluxos de trabalho; aplicar o Diagrama de Sequência para visualizar interações entre objetos ao longo do tempo; representar processos automáticos e mensagens trocadas entre componentes de um sistema.
:::

## Desenvolvimento

:::conceito
Se o Diagrama de Classes mostra a estrutura de um sistema e o de Casos de Uso mostra suas funcionalidades, o Diagrama de Atividades mostra o fluxo de trabalho passo a passo — como um fluxograma sofisticado. O Diagrama de Sequência, por sua vez, foca na comunicação entre objetos ao longo do tempo, representando a ordem em que mensagens são trocadas. Esses dois diagramas são especialmente úteis para modelar processos de negócio, fluxos de usuário e comportamentos dinâmicos que outros diagramas não conseguem capturar com tanta clareza.
:::

## Conexão com a prática profissional

Fluxos de atividade e sequências de interação aparecem em sistemas de inscrição, pagamentos, autenticação e atendimento digital. Esses diagramas ajudam equipes a visualizar passos, mensagens trocadas e pontos de falha antes da implementação.

## Questões de fixação

:::questao Qual é a principal utilidade do Diagrama de Atividades na UML?
a) Mostrar a estrutura de classes e os atributos de um sistema.
b) Representar o fluxo de atividades ou o comportamento de um processo dentro do sistema. *
c) Exibir os estados de um objeto individual ao longo do tempo.
d) Listar os atores que interagem com o sistema.
> A alternativa correta é a B porque o Diagrama de Atividades modela o fluxo de trabalho de um sistema, semelhante a um fluxograma, mostrando como atividades se encadeiam e quais decisões são tomadas ao longo do processo.
:::

:::questao No Diagrama de Sequência, como são representados processos automáticos, como o envio de um e-mail de confirmação?
a) Como um estado final do sistema.
b) Como uma classe dentro do diagrama de estrutura.
c) Como uma mensagem (seta) originada do objeto que executa a ação para o objeto responsável pela tarefa automática. *
d) Como um ator conectado ao caso de uso correspondente.
> A alternativa correta é a C porque no Diagrama de Sequência, processos automáticos são representados como mensagens trocadas entre objetos, indicando que um objeto dispara uma ação em outro ao longo do tempo.
:::

## Atividade prática

:::exercicio
Diagrama de Atividades e Diagrama de Sequência — Sistema de Inscrição Online. O estudante deverá modelar um sistema de inscrição online utilizando dois diagramas: o Diagrama de Atividades para representar o fluxo do processo e o Diagrama de Sequência para mostrar a interação entre objetos, incluindo o envio automático de e-mail de confirmação.
:::

Na atividade prática, a turma deverá modelar um sistema de inscrição online utilizando dois diagramas: o Diagrama de Atividades para representar o fluxo do processo e o Diagrama de Sequência para mostrar a interação entre objetos.

O estudante deverá:

- Identificar as etapas do processo de inscrição no sistema.
- Desenhar o Diagrama de Atividades representando o fluxo completo.
- Identificar os objetos envolvidos (ex.: Usuário, Sistema de Inscrição, Sistema de E-mail).
- Desenhar o Diagrama de Sequência com as mensagens trocadas entre objetos.
- Incluir o envio automático de e-mail de confirmação no diagrama.

:::importante
Entregar em formato de registro no caderno, folha ou arquivo digital, com nome no padrão **UML_Inscricao_NomeAluno**. A entrega pode ser feita no Google Classroom, Drive ou outro ambiente definido pelo professor.
:::

:::roteiro
Hoje vamos aprender dois diagramas que mostram o sistema em movimento: o Diagrama de Atividades, que é como um mapa do fluxo de trabalho, e o Diagrama de Sequência, que é como uma linha do tempo mostrando quem fala com quem dentro do sistema. Esses dois diagramas são especialmente úteis quando precisamos mostrar processos que envolvem decisões, ramificações e comunicações entre diferentes partes do software. Na atividade prática, vocês vão modelar um sistema de inscrição online que inclui um processo automático — o envio de um e-mail de confirmação.
:::

## Fechamento

:::resumo
- O Diagrama de Atividades representa o fluxo de trabalho de um processo, semelhante a um fluxograma.
- O Diagrama de Sequência mostra a comunicação entre objetos ao longo do tempo.
- Ambos os diagramas capturam o comportamento dinâmico do sistema que outros diagramas não representam.
:::

Na próxima aula, a turma vai ampliar a modelagem para estados e componentes, observando comportamento e arquitetura.
