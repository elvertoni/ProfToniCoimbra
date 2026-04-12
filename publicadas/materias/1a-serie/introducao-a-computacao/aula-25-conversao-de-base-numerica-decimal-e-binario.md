---
title: Conversão de Base Numérica: Decimal e Binário
description: Aula extra de IAC sobre conversão entre sistemas decimal e binário, relacionando base numérica, potências e representação de números na computação.
order: 25
published: true
---

# Aula 25 — Conversão de Base Numérica: Decimal e Binário

Quando olhamos para a tela, vemos números no formato que usamos no cotidiano. Por trás disso, porém, o computador representa quantidades usando a base 2. Nesta aula, o objetivo é entender como funciona a conversão entre decimal e binário e por que isso importa para a computação.

## Abertura

:::objetivo
Compreender o que são bases numéricas e realizar conversões simples de decimal para binário e de binário para decimal.
:::

:::dica
Compare primeiro a base 10 do cotidiano com a base 2 da computação. Quando o aluno entende a lógica das bases, a conversão deixa de parecer uma regra solta para decorar.
:::

:::curiosidade
Os circuitos digitais trabalham com dois estados elétricos principais, o que ajuda a explicar por que o sistema binário se tornou tão importante no funcionamento dos computadores.
:::

## Base numérica e valor posicional

:::conceito
Base numérica é a quantidade de símbolos usada para representar valores em um sistema de numeração. O sistema decimal usa 10 símbolos, enquanto o binário usa apenas 2: 0 e 1.
:::

No sistema decimal, cada posição representa uma potência de 10. No binário, cada posição representa uma potência de 2. Isso significa que, no lugar de unidades, dezenas e centenas, passamos a pensar em 1, 2, 4, 8, 16, 32 e assim por diante.

Essa mudança não é só matemática. Ela está ligada ao modo como o computador registra números internamente. Quando o estudante entende o valor de cada posição, percebe que o binário não é um código misterioso, mas uma forma organizada de representar quantidades.

O sistema decimal faz sentido para nós porque contamos com dez dedos e crescemos usando essa lógica no cotidiano. Já o sistema binário faz sentido para a máquina porque circuitos eletrônicos trabalham muito bem com dois estados principais, como ligado e desligado, presença e ausência de corrente, 1 e 0.

Quando essa ponte entre matemática e hardware fica clara, a conversão ganha sentido prático. O aluno deixa de enxergar o binário como uma curiosidade abstrata e passa a entendê-lo como linguagem básica de representação usada por computadores, memórias e processadores.

:::importante
No binário, as posições crescem em potências de 2. Por isso, 1, 2, 4, 8 e 16 aparecem com frequência em conversões simples.
:::

:::exemplo
O número binário 1011 pode ser lido como 1×8 + 0×4 + 1×2 + 1×1. Somando os valores ativos, chegamos a 11 no sistema decimal.
:::

:::questao Em um cenário de estudo, qual situação mostra melhor por que entender valor posicional ajuda na conversão entre decimal e binário?
a) Perceber que cada casa do binário representa uma potência de 2 e, por isso, a leitura do número faz sentido *
b) Decorar respostas sem analisar o valor de cada posição
c) Tratar 1011 como se fosse um número decimal comum
d) Ignorar totalmente a diferença entre base 10 e base 2
> A alternativa correta é a letra A porque a conversão depende de compreender o papel de cada posição no sistema binário.
:::

## Dois caminhos de conversão e erros frequentes

:::conceito
Converter decimal para binário pode ser feito por divisões sucessivas por 2, enquanto converter binário para decimal pode ser feito somando as potências de 2 correspondentes às posições com valor 1.
:::

Na conversão de decimal para binário, dividimos o número sucessivamente por 2 e registramos os restos. Ao final, lemos esses restos de baixo para cima. Já na conversão de binário para decimal, analisamos cada posição e somamos apenas os valores correspondentes aos dígitos 1.

Os dois processos se complementam. Um ajuda a construir a representação binária de um número; o outro permite conferir ou interpretar um número já escrito em base 2.

Outro caminho útil para pensar decimal em binário é a decomposição em potências de 2. Por exemplo, o número 13 pode ser visto como 8 + 4 + 1. Isso significa que, nas posições 8, 4 e 1, colocamos 1; na posição 2, colocamos 0. O resultado é 1101.

Esse raciocínio é valioso porque mostra que a conversão não depende só de seguir passos mecânicos. Ela depende de entender que cada casa do número binário tem um valor próprio. Quanto mais o estudante percebe isso, mais fácil fica conferir se a resposta final faz sentido.

Exemplo de decimal para binário:

10 ÷ 2 = 5, resto 0  
5 ÷ 2 = 2, resto 1  
2 ÷ 2 = 1, resto 0  
1 ÷ 2 = 0, resto 1  

Lendo os restos de baixo para cima, temos 1010₂.

Exemplo de binário para decimal:

1011₂ = 1×2³ + 0×2² + 1×2¹ + 1×2⁰  
1011₂ = 1×8 + 0×4 + 1×2 + 1×1  
1011₂ = 8 + 0 + 2 + 1  
1011₂ = 11₁₀.

:::atencao
Um erro comum é ler os restos na ordem errada ao converter decimal para binário. Outro erro frequente é esquecer que, no binário, as posições representam potências de 2, e não de 10.
:::

:::questao Qual erro ou problema precisa ser identificado primeiro ao converter 10 para binário pelo método das divisões sucessivas?
a) Ler os restos de cima para baixo e obter uma sequência incorreta *
b) Reconhecer que o binário usa apenas 0 e 1
c) Registrar os restos de cada divisão
d) Conferir o resultado final
> A alternativa correta é a letra A porque inverter a ordem de leitura dos restos altera o número binário obtido.
:::

## Questões de fixação

:::questao Em uma situação prática, qual representação binária corresponde corretamente ao número decimal 6?
a) 100
b) 101
c) 110 *
d) 111
> A alternativa correta é a letra C porque 6 em decimal resulta em 110 no sistema binário.
:::

:::questao O número binário 1001 corresponde a qual valor decimal?
a) 9 *
b) 8
c) 10
d) 12
> A alternativa correta é a letra A porque 1001₂ = 1×8 + 0×4 + 0×2 + 1×1 = 9.
:::

:::questao Qual afirmação resume corretamente a conversão entre decimal e binário?
a) Decimal para binário usa divisões sucessivas por 2, e binário para decimal usa soma de potências de 2 *
b) Decimal para binário usa potências de 10, e binário para decimal usa divisão por 3
c) Os dois sistemas usam exatamente os mesmos símbolos e posições
d) Converter entre as bases não tem relação com a computação
> A alternativa correta é a letra A porque descreve corretamente os dois processos de conversão mais usados em aulas introdutórias.
:::

## Atividade prática

:::exercicio
Converta cinco números decimais para binário e cinco números binários para decimal. Use como sugestões: 3, 7, 9, 12 e 15 para decimal em binário; 10, 101, 111, 1000 e 1101 para binário em decimal. Depois compare as respostas em dupla e explique o passo a passo de uma conversão de cada tipo.
:::

:::importante
Não entregue apenas o resultado final. Mostre o procedimento para que a turma consiga verificar se a lógica foi aplicada corretamente.
:::

:::roteiro
Uma boa estratégia é resolver um exemplo de cada tipo no quadro, com calma, antes de liberar a prática individual. Depois, use a correção coletiva para destacar onde costumam aparecer os erros mais frequentes.
:::

## Fechamento

:::resumo
- O sistema decimal usa base 10, e o sistema binário usa base 2
- Converter decimal para binário envolve divisões sucessivas por 2 e leitura correta dos restos
- Converter binário para decimal envolve somar as potências de 2 correspondentes às posições ativas
:::
