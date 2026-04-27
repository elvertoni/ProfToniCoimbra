---
title: Decodificando Números — Como Converter Decimais em Binários
description: Aula prática sobre conversão de decimal para binário. Do transistor à tabela de potências de 2 — entenda por que o computador trabalha com binário e como transformar qualquer número decimal nessa linguagem.
order: 12
published: true
---

# Aula 12 — Decodificando Números: Como Converter Decimais em Binários

Nas últimas aulas você conheceu os fundamentos dos sistemas digitais e deu os
primeiros passos na eletricidade básica. Agora chegou a hora de juntar as duas
pontas: entender **por que** o computador trabalha com dois estados (0 e 1) e
**como** transformar os números que usamos no dia a dia nessa linguagem binária.
Converter decimal em binário não é decoreba — é enxergar a lógica que existe
dentro de cada chip.

## Abertura

:::objetivo
Ao final desta aula, o estudante será capaz de explicar por que computadores
usam sistema binário e converter números decimais para binário usando os
métodos de decomposição por potências de 2 e divisões sucessivas.
:::

:::curiosidade
O filósofo Gottfried Leibniz estudava números binários em **1679** — quase 300
anos antes do primeiro computador eletrônico. Ele se inspirou no I Ching, livro
chinês milenar que representava ideias com linhas contínuas e quebradas, uma
espécie de "binário filosófico". Leibniz sonhava com uma máquina que pensasse
usando esse sistema, mas faltava a tecnologia. Hoje, o processador do seu
celular tem mais de **10 bilhões de transistores** — cada um deles um
interruptor binário microscópico.
:::

:::dica
Ao converter, não pense apenas na regra. Pergunte a si mesmo: que valor cada
posição representa? Por que a base 2 faz sentido para a eletrônica digital?
Se você entende o **porquê**, o **como** fica muito mais fácil.
:::

## Por que o computador usa binário?

:::conceito
**Bit** (binary digit) é a menor unidade de informação em computação. Um bit
só pode assumir dois valores: **0** ou **1**. Toda informação digital — textos,
imagens, sons, vídeos — é armazenada e processada como sequências de bits.
:::

A resposta para "por que binário?" está dentro do **transistor**, o componente
eletrônico que forma os chips de silício. Um transistor funciona como um
interruptor controlado por eletricidade: ele pode estar **conduzindo**
(passando corrente) ou **cortado** (bloqueando a corrente). Esses dois estados
físicos são a origem do 0 e do 1.

:::exemplo
Pense no interruptor de luz do seu quarto. Ele só tem duas posições: ligado
(luz acesa) ou desligado (luz apagada). Não existe "meio ligado" — o circuito
ou está fechado ou está aberto. O computador funciona com bilhões desses
"interruptores" microscópicos dentro de um chip menor que sua unha. Cada
transistor é um bit em potencial.
:::

Mas por que não usar 10 níveis de voltagem, representando os dígitos de 0 a 9?
Seria um pesadelo na prática. Qualquer variação mínima de voltagem — ruído
elétrico, aquecimento, interferência — corromperia o valor. O sistema binário
é **robusto**: o circuito só precisa decidir se a voltagem está "baixa" (0) ou
"alta" (1). A margem de tolerância é enorme.

:::importante
O computador **não escolheu** o binário por limitação — foi uma **decisão de
engenharia**. Dois estados bem separados tornam os circuitos mais simples, mais
rápidos e muito mais confiáveis do que qualquer alternativa com múltiplos níveis.
:::

## Do decimal ao binário: dois caminhos

:::conceito
Converter um número decimal para binário significa reescrevê-lo na **base 2**,
isto é, como uma combinação de potências de 2 representadas pelos dígitos 0 e 1.
:::

No sistema decimal (base 10), cada posição vale uma potência de 10: unidades
(10⁰), dezenas (10¹), centenas (10²). No binário (base 2), cada posição vale
uma potência de 2. Em vez de casas como 1, 10, 100, trabalhamos com 1, 2, 4, 8,
16, 32, 64, 128…

:::importante
As primeiras posições do binário (da direita para a esquerda):
| Posição | 8ª | 7ª | 6ª | 5ª | 4ª | 3ª | 2ª | 1ª |
|---------|-----|-----|-----|----|----|----|----|----|
| Potência | 2⁷ | 2⁶ | 2⁵ | 2⁴ | 2³ | 2² | 2¹ | 2⁰ |
| Valor | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
:::

### Método 1 — Decomposição por potências de 2

Encontre as maiores potências de 2 que somadas formam o número desejado.
Cada potência usada vira um bit **1** naquela posição; as não usadas viram **0**.

**Exemplo: converter 13 para binário.**
- 13 = 8 + 4 + 1
- Posições: 8 (1), 4 (1), 2 (0), 1 (1)
- Resultado: **1101**

:::exemplo
Para representar o número **26**: 16 + 8 + 2 = 26.
Posições: 16 (1), 8 (1), 4 (0), 2 (1), 1 (0).
Resultado: **11010**.
:::

### Método 2 — Divisões sucessivas por 2

Divida o número por 2 repetidamente, anotando o resto de cada divisão.
Quando o quociente chegar a zero, leia os restos **de baixo para cima**.

**Exemplo: converter 13 para binário.**
```
13 ÷ 2 = 6, resto 1
 6 ÷ 2 = 3, resto 0
 3 ÷ 2 = 1, resto 1
 1 ÷ 2 = 0, resto 1
```
Lendo de baixo para cima: **1101**. Mesmo resultado!

Esse método funciona bem para qualquer tamanho de número e é o preferido em
provas e exercícios por ser sistemático.

:::atencao
O erro mais comum nas divisões sucessivas é ler os restos na **ordem errada** —
de cima para baixo. Isso inverte o número binário. Confira sempre: some as
potências de 2 marcadas com 1 e veja se volta ao valor original.
:::

:::roteiro
Perguntas para conduzir a turma durante a explicação dos métodos:
- "Se eu errar a ordem dos restos, o número fica completamente diferente. Alguém
consegue mostrar com um exemplo?"
- "Qual método vocês acharam mais intuitivo? Por quê?"
- "Com 8 bits, qual o maior número que conseguimos representar?" (Resposta: 255)
:::

## Questões de fixação

:::questao Um estagiário de TI precisa explicar por que um pendrive de 16 GB
não consegue salvar um arquivo de 17 GB. Pensando no que aprendemos sobre
representação binária, qual a explicação mais correta?
a) O sistema operacional do cliente está desatualizado
b) O arquivo de 17 GB contém mais bits do que o pendrive comporta *
c) O pendrive está com defeito de fábrica
d) O computador não suporta arquivos maiores que 10 GB
> Arquivos digitais são sequências de bits. O arquivo de 17 GB precisa de mais
bits do que o dispositivo pode armazenar. A capacidade de armazenamento é
literalmente "quantos bits cabem aqui" — não há compressão que resolva um
arquivo maior que o espaço físico disponível.
:::

:::questao Converta o número decimal 45 para binário usando o método das divisões
sucessivas. Qual é o resultado correto?
a) 101101 *
b) 110110
c) 101110
d) 100101
> 45 ÷ 2 = 22 (r1), 22 ÷ 2 = 11 (r0), 11 ÷ 2 = 5 (r1), 5 ÷ 2 = 2 (r1),
2 ÷ 2 = 1 (r0), 1 ÷ 2 = 0 (r1). Lendo de baixo para cima: 101101.
Conferindo: 32 + 8 + 4 + 1 = 45. ✓
:::

## Atividade prática

:::exercicio
**Desafio de conversão em dupla** (15 minutos)

Cada dupla recebe 5 números decimais para converter:
- Nível 1: 7, 10 (até 4 bits)
- Nível 2: 25, 42 (até 6 bits)
- Nível 3: 100 (7 bits)

Regras:
1. Um aluno resolve por **decomposição**, o outro por **divisões sucessivas**
2. Comparam os resultados — precisam ser idênticos
3. Para cada número, mostrem: o procedimento, os restos (se for divisão) e a
conferência pela soma das potências de 2
4. A dupla que terminar primeiro e com todos corretos ajuda as demais

Bônus para quem resolver primeiro: qual o maior número que dá para representar
com 8 bits? E com 10 bits? (Respostas: 255 e 1023)
:::

## Fechamento

:::resumo
- Computadores usam binário porque **transistores** só têm dois estados físicos
estáveis — uma decisão de engenharia, não uma limitação
- O sistema binário é confiável porque dois níveis de voltagem bem separados
resistem a ruído e interferência elétrica
- Converter decimal → binário é reescrever o número na base 2 usando potências
de 2 como valores posicionais
- Dois métodos: **decomposição** (identificar potências de 2) e **divisões
sucessivas** (restos lidos de baixo para cima)
- Sempre confira: some as potências de 2 e veja se volta ao decimal original
- Na próxima aula: o caminho inverso — ler um número binário e descobrir qual
valor decimal ele representa
:::
