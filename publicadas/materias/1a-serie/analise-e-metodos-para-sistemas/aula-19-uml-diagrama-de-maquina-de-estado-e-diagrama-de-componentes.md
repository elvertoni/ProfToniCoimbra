# Aula 19 — UML — Diagrama de Máquina de Estado e Diagrama de Componentes

Nesta aula, a turma vai explorar diagramas voltados ao comportamento dependente de estados e à organização arquitetural, articulando o Diagrama de Máquina de Estado com o Diagrama de Componentes.

## Objetivos de aprendizagem

- Compreender o Diagrama de Máquina de Estado e sua aplicação na modelagem de comportamentos.
- Aplicar o Diagrama de Componentes para representar a organização modular de um sistema.
- Identificar estados, transições e condições de guarda em diagramas UML.

## Desenvolvimento

Nem tudo em um sistema pode ser representado por fluxos ou estruturas fixas. Alguns elementos mudam de comportamento ao longo do tempo, dependendo de eventos externos — e é exatamente aí que o Diagrama de Máquina de Estado entra. Ele modela os estados possíveis de um objeto e as transições entre eles, sendo essencial para prever como um sistema reage a estímulos. O Diagrama de Componentes, por sua vez, oferece uma visão de alto nível da arquitetura de software, mostrando como os módulos e bibliotecas se organizam e se comunicam para formar o sistema completo.

## Conexão com a prática profissional

Sistemas reativos e distribuídos exigem olhar para estados internos e organização por módulos. Diagramas de máquina de estado e de componentes ajudam analistas e desenvolvedores a prever comportamentos, dependências e impactos arquiteturais.

## Questões de fixação

 <div class="questao" data-idx="q1">
 <p class="questao-num">Questão 1</p>
 <p class="questao-enunciado">Para que serve o Diagrama de Máquina de Estado na UML?</p>
 <ul class="alternativas">
 <li class="alt" data-letra="A"><span class="alt-badge">A</span> Mostrar a estrutura de classes e os atributos de um sistema.</li>
 <li class="alt" data-letra="B" data-correta="true"><span class="alt-badge">B</span> Representar os estados possíveis de um objeto e as transições entre eles em resposta a eventos.</li>
 <li class="alt" data-letra="C"><span class="alt-badge">C</span> Exibir os componentes físicos de hardware do sistema.</li>
 <li class="alt" data-letra="D"><span class="alt-badge">D</span> Listar as funcionalidades do sistema do ponto de vista do usuário.</li>
 </ul>
 <div class="gabarito">
 <span class="gab-texto">A alternativa correta é a B porque o Diagrama de Máquina de Estado modela o ciclo de vida de objetos, mostrando quais estados eles podem assumir e sob quais condições ocorrem as transições entre esses estados.</span>
 </div>
</div>


 <div class="questao" data-idx="q2">
 <p class="questao-num">Questão 2</p>
 <p class="questao-enunciado">Qual é a principal função do Diagrama de Componentes na UML?</p>
 <ul class="alternativas">
 <li class="alt" data-letra="A"><span class="alt-badge">A</span> Representar o fluxo de atividades de um processo de negócio.</li>
 <li class="alt" data-letra="B"><span class="alt-badge">B</span> Mostrar as interações entre objetos ao longo do tempo.</li>
 <li class="alt" data-letra="C" data-correta="true"><span class="alt-badge">C</span> Ilustrar a organização e as dependências entre os componentes de software do sistema.</li>
 <li class="alt" data-letra="D"><span class="alt-badge">D</span> Mapear os requisitos funcionais do sistema em funcionalidades específicas.</li>
 </ul>
 <div class="gabarito">
 <span class="gab-texto">A alternativa correta é a C porque o Diagrama de Componentes oferece uma visão de alto nível da arquitetura de software, mostrando como módulos, bibliotecas e outras partes do sistema se organizam e se comunicam.</span>
 </div>
</div>


## Atividade prática

<div class="callout c-violet">
 <div class="callout-icon">💡</div>
 <div class="callout-body">
 <p class="callout-title">Prática: Diagrama de Máquina de Estado e Diagrama de Componentes — Sistema de Controle</p>
 <p class="callout-text">O estudante deverá modelar um sistema de controle (ex.: portão eletrônico ou sistema equivalente) utilizando o Diagrama de Máquina de Estado para representar os estados e transições, e o Diagrama de Componentes para mostrar a organização modular do sistema.</p>
 </div>
</div>

Na atividade prática, a turma deverá modelar um sistema de controle utilizando o Diagrama de Máquina de Estado para representar estados e transições, e o Diagrama de Componentes para mostrar a organização modular do sistema.

O estudante deverá:

   - Identificar os estados possíveis do objeto principal (ex.: Aberto, Fechado, Trancado).
   - Definir os eventos de transição e condições de guarda.
   - Desenhar o Diagrama de Máquina de Estado com estados e transições.
   - Identificar os principais módulos ou componentes do sistema.
   - Desenhar o Diagrama de Componentes mostrando interfaces e conexões.

<div class="callout c-green">
 <div class="callout-icon">📤</div>
 <div class="callout-body">
 <p class="callout-title">Entrega</p>
 <p class="callout-text">Entregar em formato de registro no caderno, folha ou arquivo digital, com nome no padrão <strong>UML_Implantacao_NomeAluno</strong>. A entrega pode ser feita no Google Classroom, Drive ou outro ambiente definido pelo professor.</p>
 </div>
</div>

<div class="roteiro">
 <div class="roteiro-header">🎤 Roteiro do professor</div>
 <p class="roteiro-texto">Hoje vamos aprender dois diagramas que representam aspectos do sistema que ainda não tínhamos visto: o Diagrama de Máquina de Estado, que mostra como um objeto muda de comportamento ao longo do tempo em resposta a eventos, e o Diagrama de Componentes, que é como a planta da arquitetura de software — mostrando quais peças existem e como elas se encaixam. Na atividade prática, vocês vão modelar um sistema de controle de portão eletrônico com os dois diagramas.</p>
</div>

## Fechamento

<div class="callout c-green">
 <div class="callout-icon">📋</div>
 <div class="callout-body">
 <p class="callout-title">Resumo da aula</p>
 <ul class="resumo-list">
 <li><span class="resumo-check">✔️</span> O Diagrama de Máquina de Estado modela os estados de um objeto e as transições provocadas por eventos.</li>
 <li><span class="resumo-check">✔️</span> O Diagrama de Componentes representa a organização modular do software e as dependências entre partes.</li>
 <li><span class="resumo-check">✔️</span> Ambos os diagramas são essenciais para entender o comportamento dinâmico e a arquitetura de um sistema.</li>
 </ul>
 </div>
</div>

Na próxima aula, a turma vai retomar as abordagens ágeis estudando o Scrum como framework de organização do trabalho.
