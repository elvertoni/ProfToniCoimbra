---
title: Jogando com Bits — De Binários a Decimais
description: Aula sobre leitura de números binários, conversão para decimal e interpretação prática de bits e bytes. Do agrupamento de 8 bits ao cálculo de capacidade de armazenamento.
order: 13
published: true
---

# Aula 13 — Jogando com Bits: De Binários a Decimais

Na aula anterior você aprendeu a transformar números decimais em binários usando
potências de 2 e divisões sucessivas. Agora vamos fazer o **caminho inverso**:
receber uma sequência de bits e descobrir qual número ela representa. Esse
vaivém entre os dois sistemas é o que transforma o binário de "código misterioso"
em ferramenta de trabalho — e é exatamente assim que processadores leem e
escrevem dados o tempo todo.

## Abertura

:::objetivo
Converter números binários para decimais usando soma de potências de 2,
interpretar o valor posicional de cada bit e relacionar os conceitos de bit
e byte ao uso prático em armazenamento e capacidade.
:::

:::dica
Ao olhar para um número binário, não conte quantos 1 aparecem — isso é inútil.
Observe **onde** cada 1 está. A posição dele, e não a quantidade, define o
valor. Dois binários com o mesmo número de uns podem representar valores
completamente diferentes.
:::

:::curiosidade
A palavra **bit** foi criada por John Tukey em 1946 como abreviação de *binary
digit*. Já o termo **byte** (8 bits) foi cunhado por Werner Buchholz em 1956
durante o desenvolvimento do computador IBM Stretch. Na época, um byte não
tinha tamanho fixo — só foi padronizado como 8 bits quando os microprocessadores
de 8 bits se popularizaram nos anos 1970 com o Intel 8080.
:::

## Lendo bits: o valor está na posição

:::conceito
Converter binário para decimal significa somar os valores das posições onde
aparece o dígito **1**, usando potências de 2. A posição mais à direita vale
2⁰ = 1; cada posição à esquerda dobra o valor da anterior.
:::

Essa é a mesma lógica da aula anterior, agora no sentido inverso. Se você olhar
para o binário **11010**, as posições da direita para a esquerda são:

| Bit | 1 | 1 | 0 | 1 | 0 |
|-----|---|---|---|---|---|
| Potência | 2⁴ | 2³ | 2² | 2¹ | 2⁰ |
| Valor | 16 | 8 | 4 | 2 | 1 |
| Ligado? | ✅ | ✅ | ❌ | ✅ | ❌ |

Some os valores das posições com 1: **16 + 8 + 2 = 26**. Simples assim.

:::exemplo
**1101** — posições: 8, 4, 2, 1. Somando as marcadas: 8 + 4 + 1 = **13**.
**10101** — posições: 16, 8, 4, 2, 1. Somando: 16 + 4 + 1 = **21**.
**1111** — 8 + 4 + 2 + 1 = **15**. Com 4 bits, o valor máximo!
:::

:::importante
As primeiras posições binárias (da direita para a esquerda):
| Posição | 8ª | 7ª | 6ª | 5ª | 4ª | 3ª | 2ª | 1ª |
|---------|-----|-----|-----|----|----|----|----|----|
| Potência | 2⁷ | 2⁶ | 2⁵ | 2⁴ | 2³ | 2² | 2¹ | 2⁰ |
| Valor | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
:::

### O erro mais comum — e como evitá-lo

Muita gente, ao ver **10110** pela primeira vez, conta "tem três uns, então
vale 3". Esse é o erro mais frequente e mais grave. O sistema binário é
**posicional**: o valor não está em quantos bits estão ligados, mas em **quais**
posições estão ligadas.

:::atencao
**Nunca** conte apenas a quantidade de bits 1. Sempre some os **valores das
posições** onde o 1 aparece. Dois binários com 3 bits ligados podem ter
valores totalmente diferentes: 11100 = 28, mas 00111 = 7.
:::

:::roteiro
Perguntas para discussão com a turma:
- "Se um byte tem 8 bits e cada bit pode ser 0 ou 1, quantas combinações
diferentes um byte consegue representar?" (Resposta: 256)
- "Um emoji ocupa mais bytes que uma letra? Por quê?"
- "Por que um jogo de videogame ocupa 50 GB, mas uma planilha de notas ocupa
poucos KB? O que muda em termos de bits?"
:::

## De bits a bytes: quando a teoria encontra a prática

:::conceito
**Byte** é um agrupamento de 8 bits. É a unidade básica de armazenamento na
maioria dos computadores modernos. Um byte pode representar 2⁸ = 256 valores
diferentes, de 0 a 255.
:::

Quando você ouve falar em kilobyte (KB), megabyte (MB) ou gigabyte (GB), está
ouvindo sobre agrupamentos de bytes. Uma foto de celular ocupa cerca de 3 a 5 MB
— isso são milhões de bytes, cada um com 8 bits. Um filme em HD pode ocupar
4 GB: mais de 4 bilhões de bytes, ou 32 bilhões de bits.

:::exemplo
Uma mensagem de texto simples, como "Oi", ocupa 2 bytes (16 bits) em codificação
ASCII. Já uma foto de 12 megapixels pode ocupar 36 MB (36 milhões de bytes, ou
288 milhões de bits). A diferença está na quantidade de informação que precisa
ser representada.
:::

:::importante
Um processador de 64 bits consegue manipular números binários de até 64 casas
em uma única operação. Isso significa que ele pode trabalhar com valores entre
0 e 2⁶⁴−1 (aproximadamente 18 quintilhões) sem precisar quebrar o número em
pedaços menores. Quanto maior a arquitetura, mais dados o processador processa
de uma vez.
:::

:::roteiro
Perguntas para discussão com a turma:
- "Se um byte tem 8 bits e cada bit pode ser 0 ou 1, quantas combinações
diferentes um byte consegue representar?" (Resposta: 256)
- "Um emoji ocupa mais bytes que uma letra? Por quê?"
- "Por que um jogo de videogame ocupa 50 GB, mas uma planilha de notas ocupa
poucos KB? O que muda em termos de bits?"
:::

## Questões de fixação

:::questao Converta o número binário 11101 para decimal. Qual é o valor?
a) 23
b) 29 *
c) 31
d) 27
> Posições da direita para a esquerda: 16 (1), 8 (1), 4 (1), 2 (0), 1 (1).
Somando: 16 + 8 + 4 + 1 = 29.
:::

:::questao Um celular tem 128 GB de armazenamento. Um jogo ocupa 45 GB e o
sistema operacional ocupa 15 GB. Quantos GB restam para fotos e aplicativos?
Pensando em bits, o que significa "não caber" mais nada?
a) Restam 68 GB; "não caber" significa que os bits de novos arquivos não têm espaço físico para serem armazenados *
b) Restam 128 GB; o sistema sempre comprime os dados
c) Restam 0 GB; o sistema operacional bloqueia novos arquivos
d) Restam 45 GB; jogos ocupam espaço reservado separado
> 128 − 45 − 15 = 68 GB livres. Cada GB são 8 bilhões de bits. Quando o espaço
acaba, literalmente não há mais células de memória disponíveis para armazenar
novas sequências de bits. Não existe "compressão infinita".
:::

## Atividade prática

:::exercicio
**Decodificador de bits** (15 minutos, em dupla)

Cada dupla recebe 7 números binários para converter:
- Nível 1: 101, 111, 1001 (até 4 bits)
- Nível 2: 10110, 11001 (5 bits)
- Nível 3: 101011, 111111 (6 bits)

Para cada conversão:
1. Escreva a tabela de posições com os valores de cada potência de 2
2. Marque com ✅ as posições que têm bit 1
3. Some os valores e escreva o resultado decimal
4. Confira refazendo a conta de trás para frente (do decimal para o binário)

Desafio bônus: "Quantos bits são necessários para representar o número 100?"
(Resposta: 7 bits, pois 2⁶ = 64 < 100 ≤ 2⁷ = 128)
:::

## Fechamento

:::resumo
- Converter binário → decimal é **somar as potências de 2** das posições
marcadas com 1 — cada casa dobra de valor da direita para a esquerda
- O erro mais comum é contar bits 1 em vez de somar os **valores posicionais**
- **Byte** = 8 bits = 256 valores possíveis (0 a 255) — a unidade que conecta
a teoria binária ao mundo real de arquivos, memória e armazenamento
- Dominar os dois sentidos da conversão (decimal ↔ binário) é a base para
entender como computadores representam absolutamente tudo: números, texto,
imagens e som
- Na próxima aula: placa-mãe — como todos os componentes se conectam fisicamente
:::
