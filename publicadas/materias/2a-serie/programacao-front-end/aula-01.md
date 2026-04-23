---
title: Criação de Tabelas com HTML e CSS
description: Aula de Programação Front-End sobre estrutura de tabelas, linhas, colunas, cabeçalhos e estilização básica apenas com HTML e CSS.
order: 1
published: true
---

# Aula 01 — Criação de Tabelas com HTML e CSS

Tabelas aparecem em vários contextos do desenvolvimento web: boletins, listas de produtos, horários, resultados, relatórios e comparativos. Nesta aula, o foco é entender como organizar dados em linhas e colunas usando HTML semântico e melhorar a leitura visual com CSS simples e limpo.

## Abertura

:::objetivo
Compreender a estrutura de uma tabela em HTML, diferenciar linhas, colunas e células, usar cabeçalhos corretamente e aplicar CSS básico para melhorar organização e legibilidade.
:::

:::dica
Antes de escrever qualquer código, pense na tabela como uma grade de informações. Primeiro defina quais serão as colunas e só depois distribua os dados em linhas.
:::

:::curiosidade
Mesmo em interfaces modernas, tabelas continuam muito úteis quando o objetivo é exibir dados comparáveis de forma organizada. O erro comum não é usar tabela, mas tentar usá-la para montar layout da página inteira.
:::

## Estrutura de uma tabela no HTML

:::conceito
Uma tabela em HTML é formada principalmente pela tag `<table>`, que contém linhas `<tr>` e células `<td>` ou `<th>`. As linhas organizam os dados horizontalmente, enquanto as colunas se formam pela posição das células em cada linha.
:::

Quando criamos uma tabela, cada linha representa um conjunto de dados relacionados. Dentro dela, cada célula ocupa uma posição. Se três células aparecem em cada linha, a tabela passa a ter três colunas visuais. Por isso, coluna não é uma tag isolada no HTML comum: ela surge pela repetição e alinhamento das células ao longo das linhas.

A diferença entre `<td>` e `<th>` é importante. A tag `<td>` representa uma célula de dado comum. Já a tag `<th>` representa um cabeçalho, isto é, uma célula que nomeia uma coluna ou uma linha. Usar `<th>` corretamente ajuda tanto na organização visual quanto na semântica do documento.

Também é comum separar a tabela em partes como `<thead>` para o cabeçalho e `<tbody>` para os dados principais. Isso deixa o código mais legível e facilita manutenção, estilização e leitura por tecnologias assistivas.

:::exemplo
Uma tabela de alunos pode ter as colunas Nome, Turma e Média. Cada nova linha representa um aluno diferente, mas as colunas continuam sendo as mesmas para todos.
:::

:::questao Em um cenário real, qual estrutura representa melhor uma tabela HTML bem organizada?
a) Criar uma `<table>` com linhas `<tr>`, usar `<th>` para os títulos das colunas e `<td>` para os dados de cada registro *
b) Usar apenas várias tags `<div>` sem qualquer relação entre cabeçalho e dado
c) Criar uma tabela sem linhas, apenas com várias colunas soltas
d) Trocar todos os cabeçalhos por parágrafos fora da tabela
> A alternativa correta é a letra A porque a tabela precisa de estrutura semântica clara, com cabeçalhos e dados distribuídos em linhas e células.
:::

## Linhas, colunas e leitura dos dados

:::conceito
Linha é o conjunto horizontal de células de um registro. Coluna é o agrupamento vertical de células da mesma categoria de informação.
:::

Essa diferença parece simples, mas muita gente confunde na prática. Em uma tabela de produtos, por exemplo, uma linha pode representar um item completo. Já as colunas representam as categorias fixas que se repetem para todos os itens, como nome, preço e estoque.

Pensar primeiro nas colunas ajuda a modelar melhor a informação. Se as colunas estiverem mal definidas, a tabela vira uma coleção confusa de dados misturados. Quando as colunas estão claras, cada linha se encaixa naturalmente no padrão da tabela.

Em front-end, isso faz diferença porque a tabela precisa comunicar informação rapidamente. O usuário deve bater o olho e entender o que cada valor significa. É por isso que cabeçalhos, alinhamento e espaçamento importam tanto quanto o código estar funcionando.

:::importante
Tabela serve para dados tabulares. Se o objetivo for apenas posicionar elementos na tela, o ideal é usar CSS com flexbox ou grid, não tabela.
:::

:::atencao
Um erro comum é criar colunas com quantidades diferentes de células entre as linhas. Isso quebra a leitura da tabela e costuma produzir resultados visuais confusos.
:::

## CSS básico para tabelas mais legíveis

:::conceito
O CSS pode melhorar muito a leitura de uma tabela com propriedades simples como `border`, `padding`, `background-color`, `text-align` e `border-collapse`.
:::

Uma tabela sem estilo geralmente funciona, mas costuma ficar difícil de ler. Ao aplicar bordas, espaçamento interno e contraste no cabeçalho, o conteúdo passa a ter hierarquia visual. Isso ajuda o usuário a identificar rapidamente onde começa uma coluna, onde termina uma linha e quais células pertencem a cada informação.

Entre as propriedades mais úteis, `border-collapse: collapse;` evita o efeito de bordas duplicadas. O `padding` dá respiro ao conteúdo dentro das células. O `background-color` no cabeçalho destaca os títulos das colunas. Já o alinhamento de texto pode ser ajustado conforme o tipo de dado exibido.

Em uma aula introdutória, não é necessário exagerar nos efeitos. O ideal é trabalhar com HTML correto e um CSS limpo que resolva legibilidade. Primeiro a estrutura precisa estar certa; depois o visual pode evoluir.

:::exemplo
Uma tabela de notas pode usar cabeçalho com fundo escuro e texto branco, além de bordas finas e espaçamento interno nas células. Com poucas regras, a leitura já melhora bastante.
:::

## Questões de fixação

:::questao Qual problema precisa ser identificado primeiro em uma tabela onde uma linha tem 3 células e outra tem 5, embora o cabeçalho tenha apenas 3 colunas?
a) O CSS da página está colorido demais
b) A estrutura dos dados está inconsistente, porque as linhas não seguem o mesmo padrão de colunas *
c) O problema é apenas usar `<th>` no cabeçalho
d) Tabelas nunca podem ter mais de uma linha
> A alternativa correta é a letra B porque tabelas precisam manter consistência estrutural para que a leitura dos dados faça sentido.
:::

## Atividade prática

:::exercicio
Crie uma página HTML contendo uma tabela com pelo menos 4 colunas e 5 linhas de dados sobre um tema de sua escolha, como alunos, produtos, filmes, jogos ou horários. Use apenas HTML e CSS. A tabela deve ter cabeçalho com `<th>`, dados com `<td>`, bordas visíveis, espaçamento interno nas células e uma cor de fundo diferente no cabeçalho. Ao final, escreva um parágrafo curto explicando quais são as colunas da sua tabela e por que elas ajudam a organizar os dados.
:::

:::roteiro
Se quiser aprofundar em sala, peça que os alunos comparem duas versões da mesma tabela: uma sem CSS e outra estilizada. Isso ajuda a perceber que estrutura e legibilidade caminham juntas no front-end.
:::

## Fechamento

:::resumo
- Tabelas em HTML organizam dados em linhas e colunas por meio de `<table>`, `<tr>`, `<th>` e `<td>`
- Colunas representam categorias fixas de informação, enquanto linhas representam registros completos
- Com CSS simples, já é possível deixar a tabela mais clara, legível e profissional
:::
