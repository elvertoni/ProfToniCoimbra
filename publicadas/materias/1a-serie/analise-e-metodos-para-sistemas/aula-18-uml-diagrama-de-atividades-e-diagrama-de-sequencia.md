# Aula 18 — UML — Diagrama de Atividades e Diagrama de Sequência

Nesta aula, a turma vai se o diagrama de classes mostra a estrutura de um sistema e o de casos de uso mostra suas funcionalidades, o diagrama de Atividades mostra o fluxo de trabalho passo a passo — como um fluxograma sofisticado. O Diagrama de Sequência, por sua vez, foca na comunicação entre objetos ao longo do tempo, representando a ordem em que mensagens são trocadas. Esses dois diagramas são especialmente úteis para modelar processos de negócio, fluxos de usuário e comportamentos dinâmicos que outros diagramas não conseguem capturar com tanta clareza.

## Objetivos de aprendizagem

- Compreender o Diagrama de Atividades e sua utilização para representar fluxos de trabalho.
- Aplicar o Diagrama de Sequência para visualizar interações entre objetos ao longo do tempo.
- Representar processos automáticos e mensagens trocadas entre componentes de um sistema.

## Desenvolvimento

Se o Diagrama de Classes mostra a estrutura de um sistema e o de Casos de Uso mostra suas funcionalidades, o Diagrama de Atividades mostra o fluxo de trabalho passo a passo — como um fluxograma sofisticado. O Diagrama de Sequência, por sua vez, foca na comunicação entre objetos ao longo do tempo, representando a ordem em que mensagens são trocadas. Esses dois diagramas são especialmente úteis para modelar processos de negócio, fluxos de usuário e comportamentos dinâmicos que outros diagramas não conseguem capturar com tanta clareza.

## Conexão com a prática profissional

No mercado de trabalho, as habilidades trabajadas nesta aula são aplicadas diariamente por analistas de sistemas, desenvolvedores e engenheiros de requisitos. Compreender uml — diagrama de atividades e diagrama de sequência permite que o profissionalcolabore de forma mais eficaz com equipes multidisciplinares, comunique ideias com clareza e participe ativamente da construção de soluções tecnológicas que atendam às necessidades reais dos usuários.

## Questões de fixação

 <div class="questao" data-idx="q1">
 <p class="questao-num">Questão 1</p>
 <p class="questao-enunciado">Qual é a principal utilidade do Diagrama de Atividades na UML?</p>
 <ul class="alternativas">
 <li class="alt" data-letra="A"><span class="alt-badge">A</span> Mostrar a estrutura de classes e os atributos de um sistema.</li>
 <li class="alt" data-letra="B" data-correta="true"><span class="alt-badge">B</span> Representar o fluxo de atividades ou o comportamento de um processo dentro do sistema.</li>
 <li class="alt" data-letra="C"><span class="alt-badge">C</span> Exibir os estados de um objeto individual ao longo do tempo.</li>
 <li class="alt" data-letra="D"><span class="alt-badge">D</span> Listar os atores que interagem com o sistema.</li>
 </ul>
 <div class="gabarito">
 <span class="gab-texto">A alternativa correta é a B porque o Diagrama de Atividades modela o fluxo de trabalho de um sistema, semelhante a um fluxograma, mostrando como atividades se encadeiam e quais decisões são tomadas ao longo do processo.</span>
 </div>
</div>


 <div class="questao" data-idx="q2">
 <p class="questao-num">Questão 2</p>
 <p class="questao-enunciado">No Diagrama de Sequência, como são representados processos automáticos, como o envio de um e-mail de confirmação?</p>
 <ul class="alternativas">
 <li class="alt" data-letra="A"><span class="alt-badge">A</span> Como um estado final do sistema.</li>
 <li class="alt" data-letra="B"><span class="alt-badge">B</span> Como uma classe dentro do diagrama de estrutura.</li>
 <li class="alt" data-letra="C" data-correta="true"><span class="alt-badge">C</span> Como uma mensagem (seta) originada do objeto que executa a ação para o objeto responsável pela tarefa automática.</li>
 <li class="alt" data-letra="D"><span class="alt-badge">D</span> Como um ator conectado ao caso de uso correspondente.</li>
 </ul>
 <div class="gabarito">
 <span class="gab-texto">A alternativa correta é a C porque no Diagrama de Sequência, processos automáticos são representados como mensagens trocadas entre objetos, indicando que um objeto dispara uma ação em outro ao longo do tempo.</span>
 </div>
</div>


## Atividade prática

<div class="callout c-violet">
 <div class="callout-icon">💡</div>
 <div class="callout-body">
 <p class="callout-title">Prática: Diagrama de Atividades e Diagrama de Sequência — Sistema de Inscrição Online</p>
 <p class="callout-text">O estudante deverá modelar um sistema de inscrição online utilizando dois diagramas: o Diagrama de Atividades para representar o fluxo do processo e o Diagrama de Sequência para mostrar a interação entre objetos, incluindo o envio automático de e-mail de confirmação.</p>
 </div>
</div>

A turma deverá O estudante deverá modelar um sistema de inscrição online utilizando dois diagramas: o Diagrama de Atividades para representar o fluxo do processo e o Diagrama de Sequência para mostrar a interação entre objetos, incluindo o envio automático de e-mail de confirmação.

O estudante deverá:

   - Identificar as etapas do processo de inscrição no sistema.
   - Desenhar o Diagrama de Atividades representando o fluxo completo.
   - Identificar os objetos envolvidos (ex.: Usuário, Sistema de Inscrição, Sistema de E-mail).
   - Desenhar o Diagrama de Sequência com as mensagens trocadas entre objetos.
   - Incluir o envio automático de e-mail de confirmação no diagrama.

<div class="callout c-green">
 <div class="callout-icon">📤</div>
 <div class="callout-body">
 <p class="callout-title">Entrega</p>
 <p class="callout-text">Entregar em formato de registro no caderno, folha ou arquivo digital, com nome no padrão <strong>UML_Inscricao_NomeAluno</strong>. A entrega pode ser feita no Google Classroom, Drive ou outro ambiente definido pelo professor.</p>
 </div>
</div>

<div class="roteiro">
 <div class="roteiro-header">🎤 Roteiro do professor</div>
 <p class="roteiro-texto">Hoje vamos aprender dois diagramas que mostram o sistema em movimento: o Diagrama de Atividades, que é como um mapa do fluxo de trabalho, e o Diagrama de Sequência, que é como uma linha do tempo mostrando quem fala com quem dentro do sistema. Esses dois diagramas são especialmente úteis quando precisamos mostrar processos que envolvem decisões, ramificações e comunicações entre diferentes partes do software. Na atividade prática, vocês vão modelar um sistema de inscrição online que inclui um processo automático — o envio de um e-mail de confirmação.</p>
</div>

## Fechamento

<div class="callout c-green">
 <div class="callout-icon">📋</div>
 <div class="callout-body">
 <p class="callout-title">Resumo da aula</p>
 <ul class="resumo-list">
 <li><span class="resumo-check">✔️</span> O Diagrama de Atividades representa o fluxo de trabalho de um processo, semelhante a um fluxograma.</li>
 <li><span class="resumo-check">✔️</span> O Diagrama de Sequência mostra a comunicação entre objetos ao longo do tempo.</li>
 <li><span class="resumo-check">✔️</span> Ambos os diagramas capturam o comportamento dinâmico do sistema que outros diagramas não representam.</li>
 </ul>
 </div>
</div>

Na próxima aula, a turma poderá aprofundar os conteúdos relacionados a uml — diagrama de atividades e diagrama de sequência.
