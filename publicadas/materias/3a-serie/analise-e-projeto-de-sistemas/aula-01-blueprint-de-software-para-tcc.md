---
title: Blueprint de Software para TCC
description: Aula única de APS que consolida conceito, estrutura, construção prática, erros comuns e aplicação final de um blueprint de software para orientar o TCC.
order: 1
published: true
---

# Aula 01 — Blueprint de Software para TCC

Nesta aula, vamos transformar a ideia de “documentar um projeto” em algo muito mais útil: aprender a montar um **blueprint de software** claro, técnico e defensável para orientar o TCC antes da programação. O foco não é produzir burocracia, mas construir um documento que organize problema, solução, requisitos, arquitetura, fluxo de uso e viabilidade do projeto.

## Abertura

:::objetivo
Compreender o que é um blueprint de software, identificar suas seções essenciais e produzir uma primeira versão utilizável para orientar o desenvolvimento do TCC.
:::

:::dica
Ao longo da aula, pense no blueprint como a “planta” do software: ele não substitui a implementação, mas evita que o desenvolvimento comece no improviso.
:::

:::curiosidade
Muitos projetos fracassam não porque a equipe não sabe programar, mas porque começou a construir antes de deixar claro qual problema seria resolvido, para quem e com quais limites.
:::

## O que é blueprint de software

:::conceito
Blueprint de software é um documento estruturado de planejamento que registra o problema do projeto, o público-alvo, a solução proposta, os requisitos, a arquitetura, as tecnologias e o fluxo principal de uso antes do início da implementação.
:::

Se alguém fosse construir uma casa, não começaria comprando tijolo aleatoriamente. Primeiro viria a planta. No software, o blueprint cumpre esse papel: ele ajuda a equipe a decidir **o que** será construído, **por que** isso importa, **como** o sistema vai funcionar e **quais escolhas técnicas** fazem sentido.

É importante separar blueprint de código. O blueprint não é banco de dados pronto, não é tela final e não é aplicação funcionando. Ele é o documento de intenção técnica e de alinhamento entre quem idealiza, quem desenvolve e quem vai avaliar o projeto.

Quando esse documento é bom, ele reduz retrabalho, melhora comunicação e deixa a implementação mais previsível. Quando ele é ruim, a equipe começa a construir em cima de ideias vagas, o que quase sempre gera inconsistência e perda de tempo.

:::exemplo
Imagine um TCC chamado **Plataforma de Organização de Estudos e Entregas do TCC**. O blueprint desse sistema descreveria: o problema (perda de prazos e materiais dispersos), quem usa (estudante, coordenação e administração), a solução (uma plataforma web com cronograma, entregas e alertas), os requisitos principais, as tecnologias escolhidas e o fluxo do usuário ao registrar uma etapa.
:::

Esse exemplo mostra por que o blueprint é útil: ele transforma uma ideia genérica em um plano técnico verificável.

:::questao Um grupo de TCC diz que não precisa de blueprint porque “vai decidir tudo enquanto programa”. Qual cenário mostra melhor o risco dessa escolha?
a) A equipe ganha velocidade sem comprometer alinhamento algum
b) A equipe tende a enfrentar retrabalho, requisitos confusos e decisões contraditórias no meio do desenvolvimento *
c) O sistema fica automaticamente mais simples de testar
d) A documentação final passa a ser gerada sozinha pelo framework
> A alternativa correta é a letra B porque, sem planejamento suficiente, decisões importantes passam a ser tomadas no improviso, o que aumenta retrabalho e incoerência técnica.
:::

## Estrutura de um blueprint forte

:::importante
Um blueprint forte responde a perguntas essenciais do projeto. Se uma dessas perguntas fica vaga, o documento perde valor prático.
:::

As seções mais importantes de um blueprint são estas:

- **Problema e contexto:** que dor ou necessidade o sistema resolve?
- **Público-alvo:** quem usa e quem se beneficia diretamente?
- **Solução proposta:** qual é a resposta do sistema para o problema?
- **Requisitos funcionais:** o que o sistema deve fazer?
- **Requisitos não funcionais:** como o sistema deve se comportar?
- **Arquitetura e tecnologias:** como o sistema será estruturado e com quais ferramentas?
- **Fluxo principal:** como o usuário interage com o sistema do início ao fim?

Uma forma simples de diferenciar os requisitos é esta:

| Tipo | Pergunta central | Exemplo |
|---|---|---|
| Requisito funcional | O que o sistema faz? | “O sistema deve permitir anexar entregas por etapa.” |
| Requisito não funcional | Como o sistema se comporta? | “O sistema deve responder em até 2 segundos.” |

Além disso, arquitetura e tecnologias não devem ser listas jogadas. A escolha precisa vir com justificativa. Dizer apenas “usar Python” é fraco. Melhor seria: “Python com Django, porque a equipe já domina a linguagem e o framework já oferece autenticação e painel administrativo, acelerando a implementação”.

:::atencao
Um erro comum é confundir solução proposta com lista de funcionalidades. A solução explica a ideia central do sistema. As funcionalidades detalhadas vêm depois, nos requisitos funcionais.
:::

:::questao Um blueprint apresenta a frase “melhorar a gestão da escola” como problema central e depois lista 18 funcionalidades desconectadas. Qual é o principal problema técnico desse documento?
a) O uso de linguagem formal demais
b) A falta de um problema específico que justifique e organize o restante do blueprint *
c) O excesso de requisitos não funcionais
d) O fato de ainda não ter diagrama UML
> A alternativa correta é a letra B porque, sem um problema bem definido, solução, requisitos e fluxo perdem coerência e viram uma coleção solta de ideias.
:::

:::roteiro
Aqui vale pedir que a turma tente explicar, em voz alta, a diferença entre “problema”, “solução” e “funcionalidade”. Esse pequeno exercício oral já revela se o aluno está entendendo o encadeamento lógico do blueprint ou apenas decorando termos.
:::

## Como construir um blueprint na prática

Um blueprint consistente pode ser construído como um passo a passo. O segredo não é complicar o documento, mas ser específico.

### Passo 1 — Definir o problema com precisão
Em vez de escrever “melhorar o processo da escola”, descreva a situação real. Exemplo: “Estudantes do TCC perdem prazos porque materiais, cronogramas e orientações ficam dispersos em diferentes canais, sem acompanhamento centralizado.”

### Passo 2 — Identificar o público-alvo
Diga quem usa o sistema e o que cada perfil precisa fazer. Exemplo:
- estudante: acompanha etapas, envia entregas e consulta orientações;
- coordenação acadêmica: acompanha andamento dos projetos;
- administrador: gerencia usuários e parâmetros do sistema.

### Passo 3 — Escrever a solução proposta
Aqui entra a ideia central do sistema, em forma de parágrafo. Exemplo: “Uma plataforma web onde o estudante acompanha cronograma, materiais, checklist e entregas do TCC em um fluxo único e visível.”

### Passo 4 — Listar requisitos funcionais
Escreva as funcionalidades como obrigação do sistema. Exemplo:
- RF01 — O sistema deve permitir cadastro e login de estudantes.
- RF02 — O sistema deve exibir etapas e prazos do TCC.
- RF03 — O sistema deve registrar entregas parciais por etapa.

### Passo 5 — Listar requisitos não funcionais
Agora entram desempenho, segurança, usabilidade e disponibilidade. Exemplo:
- RNF01 — O sistema deve ser acessível por navegador em desktop e mobile.
- RNF02 — O sistema deve proteger dados por autenticação e controle de perfil.
- RNF03 — O sistema deve responder em até 3 segundos nas ações principais.

### Passo 6 — Definir arquitetura e tecnologias
Especifique a estrutura do sistema e justifique as escolhas. Exemplo: Django + PostgreSQL + Bootstrap 5, com a justificativa de domínio da equipe, produtividade e manutenção simplificada.

### Passo 7 — Descrever o fluxo principal do usuário
Liste as etapas em sequência. Exemplo:
1. o estudante faz login;
2. visualiza o cronograma;
3. abre a etapa atual;
4. envia a entrega parcial;
5. recebe confirmação e próximos passos.

:::exemplo
Um bom teste de qualidade é ler o blueprint e perguntar: “Se outra pessoa pegasse esse documento, ela conseguiria entender o projeto sem eu ficar explicando?” Se a resposta for não, o blueprint ainda está fraco.
:::

Esse teste é importante porque o documento precisa sobreviver sem o autor ao lado. Em banca, reunião ou passagem de contexto, isso faz diferença.

## Questões de fixação

:::questao Um estudante descreve seu projeto assim: “Será um sistema moderno e inovador para melhorar a vida acadêmica.” Qual cenário mostra a melhor correção para esse trecho?
a) Manter a frase porque ela parece profissional
b) Trocar por uma descrição específica do problema, dos usuários e do objetivo do sistema *
c) Remover qualquer menção ao problema e focar só nas tecnologias
d) Substituir por uma lista de adjetivos técnicos
> A alternativa correta é a letra B porque um blueprint precisa ser específico. Termos vagos como “moderno” e “inovador” não explicam que problema será resolvido.
:::

:::questao Ao revisar um blueprint, qual erro ou problema deve ser identificado primeiro?
a) O título do projeto estar curto demais
b) O documento listar tecnologias sem justificar por que elas foram escolhidas *
c) O texto usar fonte simples
d) O problema estar escrito em um único parágrafo
> A alternativa correta é a letra B porque tecnologia sem justificativa sugere escolha arbitrária, o que enfraquece a coerência técnica do documento.
:::

:::questao Um grupo quer construir um sistema para TCC com app mobile, painel web, API pública, chatbot, analytics em tempo real, IA de recomendação e integração com cinco serviços externos, tudo em um semestre. Qual análise é mais adequada?
a) O projeto demonstra ambição saudável e não precisa de ajuste de escopo
b) O principal risco é a inviabilidade do escopo em relação ao tempo e aos recursos disponíveis *
c) O único problema é não ter escolhido uma linguagem ainda
d) O blueprint está pronto só porque tem muitas funcionalidades
> A alternativa correta é a letra B porque viabilidade é parte essencial do blueprint. Um escopo grande demais compromete a entrega real do TCC.
:::

:::questao Sobre as afirmações abaixo, qual NÃO é verdadeira?
a) Blueprint é um documento de planejamento anterior à implementação
b) Requisitos funcionais descrevem o que o sistema deve fazer
c) Requisitos não funcionais descrevem comportamentos e qualidades do sistema
d) O blueprint substitui totalmente a necessidade de implementação, teste e revisão do sistema *
> A alternativa correta é a letra D porque o blueprint orienta a construção, mas não substitui desenvolvimento, validação e evolução do software.
:::

## Atividade prática

:::exercicio
Escolha o tema do seu TCC ou de um projeto fictício próximo da realidade escolar. Depois, produza um mini-blueprint com os seguintes blocos: problema, público-alvo, solução proposta, 3 requisitos funcionais, 2 requisitos não funcionais, tecnologias com justificativa e fluxo principal em pelo menos 5 etapas. O objetivo não é perfeição final, mas construir uma versão coerente e defensável.
:::

:::importante
O melhor mini-blueprint não é o mais “bonito”, e sim o mais claro, específico e viável. Se o problema estiver vago, a solução desconectada ou o escopo exagerado, o documento ainda precisa de revisão.
:::

:::roteiro
Uma boa dinâmica é pedir que os grupos troquem seus mini-blueprints entre si. Cada grupo deve ler o documento de outro grupo e responder: “entendi claramente o problema, a solução e o fluxo do usuário?” Se a resposta for confusa, isso já é um sinal de revisão necessária.
:::

## Fechamento

:::resumo
- Blueprint de software é o documento que organiza o projeto antes da implementação
- Um blueprint forte conecta problema, público, solução, requisitos, arquitetura e fluxo de forma coerente
- No TCC, o blueprint funciona como base estratégica para reduzir improviso, retrabalho e incoerência técnica
:::
