# Aula 01 — Introdução à Engenharia de Software

Nesta aula, a turma vai entender por que a Engenharia de Software surgiu, quais problemas ela procura resolver e como esse campo organiza a criação de sistemas de forma mais segura, útil e profissional. A ideia central é sair da visão de que desenvolver software é apenas programar e perceber que analisar, planejar, validar e evoluir também fazem parte do trabalho técnico.

## Abertura

:::objetivo
Ao final da aula, o estudante será capaz de explicar o que é Engenharia de Software, por que ela surgiu, diferenciar programação isolada de desenvolvimento orientado por processos e reconhecer onde isso aparece na rotina de um técnico em Desenvolvimento de Sistemas.
:::

:::curiosidade
A expressão “crise do software” ficou famosa no fim da década de 1960, quando projetos computacionais começaram a ficar maiores, mais caros e mais difíceis de manter. O problema não era falta de computadores, mas falta de método para construir software confiável.
:::

:::dica
Sempre que ouvir sobre uma falha grave em sistema, tente perguntar três coisas: qual era o problema real, que requisito foi ignorado e em qual etapa isso poderia ter sido evitado. Esse raciocínio ajuda a pensar como analista desde o começo.
:::

## Desenvolvimento

:::conceito
Engenharia de Software é a área da Computação que aplica processos, métodos, organização e critérios de qualidade para criar, testar, implantar e evoluir sistemas. Ela existe para reduzir improviso, retrabalho, falhas e desperdício no desenvolvimento de software.
:::

Quando os sistemas eram pequenos, muitas vezes uma única pessoa conseguia entender tudo e programar sozinha. Mas, à medida que empresas, governos e serviços passaram a depender de software, os projetos ficaram maiores, envolveram equipes e passaram a exigir prazo, custo, documentação, testes e manutenção. Foi nesse contexto que a Engenharia de Software ganhou força.

Na prática, isso significa que o desenvolvimento não começa no código. Antes, é preciso entender o problema, levantar requisitos, conversar com usuários, definir o que será entregue, avaliar riscos e organizar como a solução será construída. Programar continua sendo essencial, mas sem método o sistema pode até funcionar por alguns dias e ainda assim fracassar como produto.

:::exemplo
Um sistema de matrícula escolar pode ter telas bonitas e até salvar dados corretamente, mas ainda ser ruim se não considerar regras da escola, prazos, perfis de usuário, segurança e relatórios necessários para a secretaria. A Engenharia de Software entra justamente para evitar esse tipo de solução “aparentemente pronta”, mas inadequada ao uso real.
:::

Para o estudante do curso técnico, essa área aparece muito cedo: no projeto integrador, no estágio, no atendimento a um cliente pequeno e até na organização de um sistema simples para uma escola, loja ou laboratório. Quem entende Engenharia de Software aprende a transformar necessidade em solução viável, e não apenas a escrever comandos.

:::questao Um estudante recebeu a tarefa de criar um sistema para uma biblioteca escolar. Antes de começar a programar, ele conversa com a bibliotecária para entender empréstimos, multas e relatórios. Essa atitude representa qual princípio da Engenharia de Software?
a) Começar pelo layout para impressionar o usuário.
b) Levantar requisitos antes da implementação. *
c) Evitar contato com usuários para ganhar tempo.
d) Substituir testes por entrevistas.
> A alternativa correta é a B porque a Engenharia de Software começa pela compreensão do problema real e das necessidades do usuário. Conversar com quem usa o sistema ajuda a definir requisitos e reduz o risco de construir algo bonito, mas inútil na prática.
:::

:::importante
Software de qualidade não é apenas software que “roda”. Ele precisa resolver o problema certo, ser compreensível para a equipe, permitir manutenção e funcionar com consistência no contexto em que será usado.
:::

:::atencao
Um erro comum de iniciantes é confundir velocidade com qualidade. Entregar código rápido sem entender regras, restrições e objetivos do sistema costuma gerar retrabalho, bugs e soluções que precisam ser refeitas quase do zero.
:::

:::questao Em qual situação o uso incorreto da Engenharia de Software tende a causar um problema real no projeto?
a) Quando a equipe entende os requisitos antes de dividir tarefas.
b) Quando o sistema é testado antes da entrega final.
c) Quando os desenvolvedores pulam a análise e implementam com base em suposições. *
d) Quando o time registra decisões importantes ao longo do projeto.
> A alternativa correta é a C porque pular análise e trabalhar com suposições aumenta a chance de erro, desperdício e desalinhamento com o problema real. As demais alternativas fortalecem o processo e reduzem riscos no desenvolvimento.
:::

:::roteiro
Abra a aula perguntando: “se programar bem bastasse, por que tantos sistemas falham mesmo quando o código compila?”. Use essa pergunta para levar a turma da ideia de programação isolada para a noção de processo. Ao longo da explicação, reforce que o técnico não trabalha só com código: ele observa contexto, conversa com pessoas, identifica regras, organiza etapas e ajuda a evitar erro antes que ele apareça na entrega.
:::

## Questões de fixação

:::questao Qual alternativa resume melhor a finalidade da Engenharia de Software?
a) Criar software sem documentação para ganhar velocidade.
b) Aplicar métodos e processos para desenvolver sistemas com qualidade e aderência ao problema real. *
c) Substituir totalmente a programação por reuniões e relatórios.
d) Limitar o desenvolvimento de software a projetos de grande porte.
> A alternativa correta é a B porque a Engenharia de Software organiza o desenvolvimento com método, qualidade e foco no problema que precisa ser resolvido. Ela não elimina a programação, mas dá estrutura para que o software tenha utilidade e possa evoluir.
:::

:::questao Uma pequena clínica contratou um ex-aluno para desenvolver um sistema de agendamento. Qual ação mostra uma aplicação correta da Engenharia de Software nesse cenário real?
a) Levantar como funcionam cancelamentos, encaixes e perfis de acesso antes de modelar a solução. *
b) Escrever o código completo no primeiro dia e descobrir depois o que faltou.
c) Criar apenas a tela inicial e considerar o projeto pronto.
d) Ignorar o fluxo real da clínica para usar um modelo genérico qualquer.
> A alternativa correta é a A porque um cenário real exige compreensão do processo de negócio antes da construção. Conhecer cancelamentos, encaixes e perfis de acesso ajuda a definir requisitos coerentes e evita entregar um sistema desconectado da rotina da clínica.
:::

:::questao Sobre a Engenharia de Software, qual afirmação NÃO é verdadeira?
a) Ela busca reduzir improviso e retrabalho em projetos.
b) Ela envolve análise, planejamento, testes e manutenção.
c) Ela serve apenas para grandes empresas e não faz sentido em projetos pequenos. *
d) Ela ajuda a conectar necessidades do usuário com soluções tecnológicas.
> A alternativa correta é a C porque a Engenharia de Software também faz diferença em projetos pequenos. Mesmo um sistema simples se beneficia de requisitos claros, organização e testes. As demais afirmativas descrevem funções reais desse campo.
:::

## Atividade prática

:::exercicio
Em dupla, a turma deverá analisar um problema cotidiano da escola e preencher um quadro simples com três colunas: problema observado, requisitos que o sistema precisaria atender e risco de desenvolver sem planejamento. Exemplos de contexto: biblioteca, cantina, secretaria, laboratório ou controle de presença.
:::

O grupo deve registrar pelo menos um problema real, três requisitos e dois riscos de construir a solução no improviso. A produção pode ser feita em Google Docs, Canva, papel fotografado ou outro formato combinado pelo professor, desde que fique legível e organizado para apresentação rápida em sala.

:::importante
A entrega deve mostrar raciocínio de análise, não desenho bonito. O foco é provar que a dupla entendeu a diferença entre “ter uma ideia de sistema” e “estruturar uma solução com método”.
:::

## Fechamento

:::resumo
- Engenharia de Software surgiu para enfrentar falhas, atrasos, retrabalho e desorganização em projetos.
- Desenvolver software bem exige entender problema, requisitos, contexto de uso e qualidade.
- O técnico em sistemas usa essa lógica em estágio, projeto integrador, freelas e no primeiro emprego.
:::

Na próxima aula, a turma pode aprofundar como os processos de Engenharia de Software organizam etapas de trabalho e ajudam a transformar uma necessidade real em um fluxo de desenvolvimento mais claro.