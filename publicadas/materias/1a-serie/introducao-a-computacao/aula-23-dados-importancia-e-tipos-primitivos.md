---
title: Dados: Importância e Tipos Primitivos
description: Aula extra de IAC sobre o papel dos dados em sistemas computacionais e o uso de tipos primitivos para organizar informações.
order: 23
published: true
---

# Aula 23 — Dados: Importância e Tipos Primitivos

Se a computação trabalha com informação, então tudo começa pelos dados. Nesta aula, o foco é entender por que dados são a matéria-prima dos sistemas e como os tipos primitivos ajudam o programa a tratar cada informação do jeito certo.

## Abertura

:::objetivo
Compreender o conceito de dado, reconhecer sua importância nos sistemas computacionais e identificar os principais tipos primitivos usados em programação.
:::

:::dica
Antes de falar em código, observe o cotidiano. Nome, idade, preço, temperatura, nota, status de pagamento e mensagem enviada em aplicativo são todos exemplos de dados sendo usados por sistemas.
:::

:::curiosidade
Muitos erros em programas começam não em algoritmos complexos, mas na escolha errada do tipo de dado para armazenar uma informação simples.
:::

## O que são dados e por que eles importam

:::conceito
Dados são representações de informações que podem ser armazenadas, processadas, transmitidas e interpretadas por sistemas computacionais.
:::

No contexto da informática, os dados aparecem em quase tudo. Um cadastro de aluno, uma nota no boletim, uma mensagem em um aplicativo, o preço de um produto e o horário de acesso de um usuário são exemplos de registros que um sistema precisa guardar e tratar.

O ponto principal é que o computador não trabalha com “ideias soltas”. Ele trabalha com valores organizados. Sem dados, não haveria o que registrar, comparar, calcular, filtrar, exibir ou transformar em informação útil.

Também é importante notar que dado não serve só para guardar. Ele serve para permitir decisão. Em um sistema escolar, por exemplo, nome, turma, frequência e notas ajudam a coordenação a acompanhar desempenho, identificar dificuldades e agir com mais precisão.

Essa distinção entre dado e informação ajuda bastante no começo do curso. Dado é o registro bruto, como uma nota 6,5 ou a presença em determinada aula. Informação é o resultado da interpretação desses registros em contexto, como perceber que um estudante caiu de rendimento ou que uma turma inteira precisa de reforço em certo conteúdo.

Quando os alunos entendem isso, deixam de ver o sistema apenas como tela e botão. Eles começam a perceber que cada ação do usuário gera registros, e que esses registros precisam ter sentido, qualidade e finalidade. Um campo preenchido errado, um valor fora do padrão ou um dado faltando pode comprometer relatórios, buscas, cálculos e decisões.

:::exemplo
Em um sistema de cadastro escolar, o nome do aluno, a turma, a nota final, a quantidade de faltas e o status de matrícula são dados diferentes, mas todos precisam ser armazenados corretamente para o sistema funcionar.
:::

:::questao Em um cenário de sistema escolar, qual situação mostra melhor o valor dos dados para o funcionamento do software?
a) Registrar nome, notas e frequência para acompanhar desempenho e apoiar decisões pedagógicas *
b) Ligar o computador sem cadastrar nenhuma informação
c) Trocar o papel de parede do laboratório
d) Usar o sistema apenas como decoração da interface
> A alternativa correta é a letra A porque mostra dados sendo usados para registrar informação relevante e gerar acompanhamento real.
:::

## Tipos primitivos e escolha correta do formato

:::importante
Escolher o tipo de dado correto evita erros, melhora a organização das informações e ajuda o sistema a processar cada valor do jeito esperado.
:::

Em programação, os tipos primitivos são as formas mais básicas de representar dados. Entre os mais comuns estão inteiro, real, caractere, texto e lógico. Cada um existe porque nem toda informação deve ser tratada da mesma maneira.

O tipo inteiro representa números sem parte decimal, como idade, quantidade de alunos ou número de peças. O tipo real representa números com parte decimal, como preço, altura ou média final. O tipo caractere guarda um único símbolo, como 'A' ou '%'. O tipo texto representa nomes, frases e mensagens. Já o tipo lógico, também chamado booleano, trabalha com valores de verdade, normalmente verdadeiro e falso.

Quando o estudante entende isso, começa a perceber que programar não é só “guardar qualquer coisa em qualquer lugar”. É decidir como o sistema vai interpretar aquela informação. Um nome não deve ser somado como número, e uma nota com casa decimal não deve ser tratada como inteiro.

Essa escolha correta também melhora a validação de dados. Se um sistema sabe que certo campo é lógico, ele espera algo como verdadeiro ou falso. Se sabe que outro campo é inteiro, passa a rejeitar letras ou símbolos indevidos. Isso reduz erro humano, melhora consistência e facilita manutenção do software.

Em linguagens de programação, a forma exata de escrever cada tipo pode variar, mas a lógica central permanece. Às vezes aparece `int`, `float`, `char`, `string` e `boolean`; em outras linguagens, os nomes mudam um pouco. O importante, neste momento, é compreender a função de cada tipo e não decorar sintaxe isolada.

:::atencao
Um erro comum é achar que todo número pode ser tratado da mesma forma. Idade pode ser inteiro, mas média final com casas decimais deve ser real.
:::

:::questao Ao revisar um cadastro, qual erro de modelagem deve ser identificado primeiro?
a) Guardar a média final 7,5 como inteiro, perdendo a parte decimal *
b) Usar texto para armazenar o nome do aluno
c) Representar aprovado com um valor lógico
d) Usar caractere para armazenar a letra inicial do nome
> A alternativa correta é a letra A porque o tipo inteiro não preserva corretamente uma informação que depende de casas decimais.
:::

## Questões de fixação

:::questao Em uma situação prática, qual combinação usa corretamente tipos primitivos em um cadastro escolar?
a) Nome como texto, idade como inteiro, média como real e matrícula ativa como lógico *
b) Nome como lógico, idade como texto, média como caractere e matrícula como real
c) Nome como inteiro, idade como texto, média como lógico e matrícula como caractere
d) Nome como real, idade como lógico, média como texto e matrícula como inteiro
> A alternativa correta é a letra A porque cada informação foi associada a um tipo compatível com sua natureza.
:::

:::questao O que melhor define dado no contexto da computação?
a) Apenas números usados em cálculos
b) Informação que pode ser armazenada, processada e utilizada por um sistema computacional *
c) Somente textos digitados pelo usuário
d) Apenas arquivos salvos no disco rígido
> A alternativa correta é a letra B porque dado é qualquer informação que o sistema consegue registrar e tratar.
:::

:::questao Qual tipo primitivo é mais adequado para armazenar uma nota como 7,5?
a) Real *
b) Lógico
c) Caractere
d) Texto
> A alternativa correta é a letra A porque valores com parte decimal devem ser representados por tipo real.
:::

## Atividade prática

:::exercicio
Monte uma tabela com pelo menos 10 exemplos de informações do cotidiano e classifique cada uma com um tipo primitivo adequado. Use exemplos como nome, idade, salário, aprovado, letra inicial, temperatura, preço, quantidade de faltas, cidade e matrícula. Depois explique oralmente por que cada tipo foi escolhido.
:::

:::importante
Não basta nomear o tipo. O mais importante é justificar por que aquela informação precisa ser tratada daquele modo pelo sistema.
:::

:::roteiro
Uma boa condução é começar com um formulário de cadastro no quadro e pedir que a turma diga que tipo faz sentido para cada campo antes de falar em linguagem de programação.
:::

## Fechamento

:::resumo
- Dados são informações que sistemas conseguem registrar, armazenar e processar
- O valor dos dados está em permitir organização, análise, automação e decisão
- Tipos primitivos ajudam o programa a tratar corretamente números, textos, símbolos e valores lógicos
:::
