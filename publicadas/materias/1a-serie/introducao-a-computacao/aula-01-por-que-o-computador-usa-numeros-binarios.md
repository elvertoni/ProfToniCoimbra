---
title: Por que o computador usa números binários?
description: Entenda o fundamento mais básico da computação — por que toda informação dentro de um computador, de uma foto a um vídeo, é representada apenas com zeros e uns.
order: 1
published: true
---

# Por que o computador usa números binários?

Toda foto que você tira no celular, toda mensagem que envia no WhatsApp e todo jogo
que roda no seu console são, no fundo, sequências enormes de zeros e uns.
Mas por que só dois símbolos? Por que não usar números de 0 a 9, como fazemos
no dia a dia? Nesta aula você vai descobrir que a resposta não está na matemática,
mas na física — mais especificamente, no que acontece dentro de um transistor.

## Abertura

:::objetivo
Ao final desta aula, o estudante será capaz de explicar por que computadores
representam informação usando apenas dois estados (0 e 1) e identificar
exemplos cotidianos de representação binária.
:::

:::curiosidade
O filósofo e matemático Gottfried Leibniz já estudava números binários em **1679**,
quase 300 anos antes do primeiro computador. Ele se inspirou no I Ching, um livro
chinês milenar que representava conceitos com linhas contínuas e quebradas — uma
espécie de "binário filosófico". Leibniz sonhava com uma máquina que pensasse
usando esse sistema, mas a tecnologia da época não permitia.
:::

:::dica
Preste atenção em aparelhos que só têm dois estados: ligado/desligado,
aberto/fechado, aceso/apagado. Tudo que é digital começa com essa ideia.
:::

## Desenvolvimento

### O que é "informação" para um computador?

Para nós, humanos, informação tem significado: uma foto da família, a letra de uma
música, a senha do Wi-Fi. Para o computador, **informação é qualquer coisa que
possa ser armazenada e processada como um conjunto de estados físicos**.

A grande sacada da computação foi perceber que, se você consegue representar
qualquer tipo de informação com apenas **dois estados** diferentes, você pode
construir máquinas muito mais confiáveis do que tentar distinguir 10 estados
diferentes em um circuito elétrico.

:::conceito
**Bit** (binary digit) é a menor unidade de informação em computação. Um bit
só pode assumir dois valores: **0** ou **1**. Toda informação digital — textos,
imagens, sons, vídeos — é reduzida a sequências de bits.
:::

### Por que só dois estados?

A resposta está dentro do **transistor**, o componente eletrônico que forma os
chips de silício do seu celular, computador e videogame. Um transistor funciona
como um interruptor controlado por eletricidade: ele pode estar **conduzindo**
(passando corrente) ou **cortado** (bloqueando a corrente).

Esses dois estados físicos são representados como:
- **0** → transistor cortado (sem corrente, ~0 volts)
- **1** → transistor conduzindo (com corrente, ~3.3 ou 5 volts)

:::exemplo
Pense no interruptor de luz do seu quarto. Ele só tem duas posições: ligado
(luz acesa) ou desligado (luz apagada). Não existe "meio ligado" — o circuito
ou está fechado ou está aberto. O computador funciona com bilhões de
"interruptores" microscópicos chamados transistores, dentro de um chip menor
que sua unha. Um processador moderno tem mais de 10 bilhões deles.
:::

### Por que não usar 10 níveis de voltagem?

Seria possível, em tese, projetar um circuito que distinguisse 0V, 0,5V, 1V,
1,5V... até 4,5V — 10 níveis, representando os dígitos de 0 a 9. Mas isso
seria um pesadelo na prática. Qualquer variação mínima na voltagem (ruído
elétrico, aquecimento, interferência) corromperia o valor.

O sistema binário é **robusto**: o circuito só precisa decidir se a voltagem
está "baixa" (0) ou "alta" (1). A margem de tolerância é enorme, tornando o
computador confiável mesmo com componentes imperfeitos.

:::importante
O computador **não escolheu** o binário por limitação — foi uma **decisão de
engenharia**. Usar só dois estados torna os circuitos mais simples, mais rápidos
e muito mais confiáveis do que qualquer alternativa com múltiplos níveis.
:::

:::atencao
É comum confundir "digital" com "binário". Nem tudo que é digital usa binário
internamente — alguns sistemas de comunicação usam modulação com 4, 8 ou 16
níveis. Mas no nível mais baixo do hardware, o computador sempre reduz tudo
a 0 e 1, porque o transistor é um componente de dois estados. A diferença é:
digital = valores discretos (não contínuos); binário = exatamente dois valores.
:::

:::questao Um estagiário de TI está explicando para um cliente por que o
pendrive de 16 GB não consegue salvar um arquivo de 17 GB. A explicação mais
correta, usando o conceito de bit, é:
a) O pendrive está com defeito de fábrica
b) O arquivo precisa de mais bits do que o pendrive pode armazenar *
c) O computador do cliente não suporta arquivos grandes
d) O sistema operacional reserva metade do espaço
> Arquivos digitais são sequências de bits. O arquivo de 17 GB contém mais bits
do que o pendrive comporta. A capacidade de armazenamento é literalmente "quantos
bits cabem neste dispositivo". Não há como comprimir magicamente — ou cabem os
bits necessários, ou não cabem.
:::

:::roteiro
Perguntas para conduzir a turma:
- "Se o computador só entende 0 e 1, como ele mostra uma foto colorida?"
- "Quantos bits vocês acham que tem uma mensagem de WhatsApp?"
- "Alguém já viu o código binário em algum lugar fora da aula?"

Transição: "Agora que entendemos o porquê do binário, vamos ver como
os computadores usam esses 0 e 1 para representar números que nós
conhecemos — e isso começa com um sistema bem diferente do nosso."
:::

## Questões de fixação

:::questao Um processador moderno trabalha com bilhões de operações por segundo.
Por que usar apenas dois estados (0 e 1) torna o processador mais confiável,
e não menos?
a) Porque 0 e 1 são os únicos números que cabem em um chip
b) Porque dois estados bem separados reduzem o risco de erro por ruído elétrico *
c) Porque programas de computador só funcionam com números pares
d) Porque a matemática binária é mais rápida que a decimal
> A confiabilidade vem da física: quanto mais níveis de voltagem você tenta
distinguir, mais sensível o circuito fica a interferências e variações.
Com apenas dois níveis bem separados, a chance de confundir 0 com 1 é
extremamente baixa, mesmo com componentes baratos.
:::

## Atividade prática

:::exercicio
**Binário com as mãos** (10 minutos, individual ou em dupla)

Cada aluno usa os dedos de uma mão para representar números em binário:
- Dedo levantado = 1
- Dedo abaixado = 0
- Cada dedo é uma posição (polegar = 1, indicador = 2, médio = 4,
anelar = 8, mínimo = 16)

Desafios em sequência:
1. Represente o número 5 usando os dedos
2. Represente o número 12
3. Qual o maior número que dá para representar com 5 dedos? (Resposta: 31)
4. Com as duas mãos (10 dedos), qual o valor máximo? (Resposta: 1023)

Quem terminar primeiro ajuda os colegas. O professor confere as respostas
circulando pela sala.
:::

## Fechamento

:::resumo
- Computadores usam binário porque transistores só têm dois estados físicos
estáveis: conduzindo (1) ou cortado (0)
- Usar apenas dois estados torna os circuitos mais **simples**, **rápidos**
e **confiáveis** diante de ruído elétrico
- Um **bit** é a menor unidade de informação: pode valer 0 ou 1
- Toda informação digital — texto, imagem, áudio, vídeo — é armazenada como
sequências de bits
- Na próxima aula: como converter números decimais (base 10) para binário
(base 2) usando o método das divisões sucessivas
:::
