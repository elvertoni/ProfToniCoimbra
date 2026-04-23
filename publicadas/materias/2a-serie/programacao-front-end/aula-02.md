---
title: Formulários com HTML e CSS
description: Aula de Programação Front-End sobre estrutura de formulários, tipos de input, labels, validação HTML5 e estilização com CSS.
order: 2
published: true
---

# Aula 02 — Formulários com HTML e CSS

Formulários são a principal forma de coleta de dados em aplicações web: cadastros, login, pesquisas, feedback, compras. Nesta aula, o foco é entender como construir formulários acessíveis e funcionais com HTML semântico, aplicar validação nativa e estilizar com CSS para criar uma experiência clara e profissional.

## Abertura

:::objetivo
Compreender a estrutura de um formulário HTML, diferenciar os tipos de input, associar labels corretamente, usar validação nativa do HTML5 e aplicar CSS básico para organização visual e acessibilidade.
:::

:::dica
Antes de escrever qualquer campo, defina quais dados o formulário precisa coletar e em que ordem faz sentido para o usuário preencher. Um formulário bem planejado reduz erros e abandono.
:::

:::curiosidade
Mesmo com interfaces modernas e bibliotecas de componentes, o HTML nativo ainda oferece recursos poderosos de validação e acessibilidade que muitos desenvolvedores ignoram. Saber usar o básico bem é um diferencial real.
:::

## Estrutura de um formulário no HTML

:::conceito
Um formulário em HTML é delimitado pela tag `<form>`, que agrupa os campos de entrada. Dentro dele, usamos `<input>`, `<label>`, `<textarea>`, `<select>` e `<button>` para coletar e enviar dados.
:::

A tag `<form>` possui dois atributos essenciais: `action`, que indica para onde os dados serão enviados, e `method`, que define como serão transmitidos — geralmente `GET` (dados na URL) ou `POST` (dados no corpo da requisição). Em uma aula introdutória de front-end, o foco está na construção e estilização do formulário; o processamento dos dados acontece no back-end.

Cada campo deve ter um atributo `name`. Sem ele, o valor digitado não é enviado ao servidor. O atributo `id`, por sua vez, é usado para vincular o campo à sua `<label>` correspondente, criando uma relação semântica que melhora a acessibilidade e a usabilidade.

:::exemplo
Um formulário de login pode ter dois campos: e-mail e senha. Ambos precisam de `name` para serem enviados, `id` para serem identificados e `<label>` para que o usuário saiba o que preencher.
:::

:::questao Qual é a função do atributo `name` em um campo de formulário?
a) Definir o tipo de dado que o campo aceita (texto, número, e-mail)
b) Vincular o `<label>` ao `<input>` para acessibilidade
c) Identificar o campo no envio dos dados ao servidor *
d) Aplicar estilos CSS diretamente ao elemento
> A alternativa correta é a letra C porque o atributo `name` é o identificador enviado ao servidor. Sem ele, o valor do campo não é transmitido. O `type` define o formato (A), o `for` vincula ao label (B) e CSS usa classes ou IDs (D).
:::

## Tipos de input e suas aplicações

:::conceito
O HTML5 oferece diversos tipos de `<input>` que controlam o formato dos dados, o teclado exibido em dispositivos móveis e a validação automática do navegador.
:::

A escolha do tipo correto de input faz diferença tanto na experiência do usuário quanto na qualidade dos dados coletados. Quando usamos `type="email"`, o navegador verifica se o texto contém um arroba e um domínio. Quando usamos `type="number"`, o teclado do celular muda para numérico. Esses detalhes parecem pequenos, mas reduzem erros e aceleram o preenchimento.

Além dos tipos básicos, existem inputs especializados como `date`, que exibe um calendário nativo; `color`, que abre um seletor de cores; e `range`, que cria um controle deslizante. Conhecer as opções disponíveis permite escolher a ferramenta certa para cada dado.

Também é importante distinguir `checkbox` de `radio`. O `checkbox` permite múltiplas seleções independentes. O `radio` agrupa opções mutuamente exclusivas: ao selecionar uma, as outras do mesmo grupo são desmarcadas automaticamente. Para que o agrupamento funcione, todos os radios do mesmo grupo devem compartilhar o mesmo `name`.

:::importante
Sempre escolha o tipo de input mais específico possível para o dado que está coletando. Isso melhora a validação, a usabilidade em mobile e a semântica do formulário.
:::

:::atencao
Um erro comum é usar `type="text"` para todos os campos. Isso impede a validação automática, mostra o teclado errado em smartphones e confunde tecnologias assistivas.
:::

## Labels, acessibilidade e boas práticas

:::conceito
A tag `<label>` descreve o propósito de um campo. Quando associada ao input via atributo `for` (igual ao `id` do campo), ela melhora a acessibilidade e permite que o usuário clique no texto para focar o input.
:::

A associação entre label e input não é apenas uma questão de organização visual. Leitores de tela dependem dessa relação para anunciar corretamente o nome e a função de cada campo. Um formulário sem labels associadas é inacessível para pessoas com deficiência visual.

Há duas formas de vincular label e input. A primeira, mais explícita, usa os atributos `for` no label e `id` no input. A segunda envolve colocar o input dentro do label, eliminando a necessidade dos atributos. Ambas são válidas, mas a primeira é mais flexível para layouts complexos.

Além das labels, o atributo `placeholder` pode ser usado para dar uma dica sobre o formato esperado. No entanto, o placeholder nunca deve substituir a label, pois desaparece assim que o usuário começa a digitar e pode causar confusão.

:::exemplo
Um formulário de cadastro deve ter label "Nome completo" associada ao input de texto, e opcionalmente um placeholder "Ex: João da Silva" como dica de formato.
:::

## Validação com HTML5

:::conceito
O HTML5 permite validar dados diretamente no navegador, sem JavaScript, usando atributos como `required`, `minlength`, `maxlength`, `min`, `max` e `pattern`.
:::

A validação nativa do HTML5 é uma camada de proteção rápida e eficiente. O atributo `required` impede o envio de campos vazios. Os atributos `minlength` e `maxlength` limitam a quantidade de caracteres. Para números, `min` e `max` definem o intervalo permitido.

O atributo `pattern` é o mais poderoso: aceita uma expressão regular para validar o formato do dado. Por exemplo, `pattern="[a-zA-Z0-9_]+"` aceita apenas letras, números e underlines, rejeitando espaços e caracteres especiais. Isso é útil para campos de nome de usuário ou códigos.

É importante lembrar que a validação do HTML5 pode ser burlada desativando JavaScript ou editando o código no navegador. Por isso, ela complementa — mas nunca substitui — a validação no servidor.

:::importante
A validação HTML5 melhora a experiência do usuário com feedback imediato, mas a validação definitiva deve sempre acontecer no back-end.
:::

## CSS básico para formulários mais usáveis

:::conceito
O CSS pode transformar um formulário padrão do navegador em uma interface limpa, organizada e acessível, usando propriedades como `display`, `gap`, `padding`, `border`, `border-radius`, `background` e estados como `:focus`.
:::

Um formulário sem estilo funciona, mas costuma parecer desorganizado e pouco confiável. Ao aplicar um layout em coluna com `flex-direction: column` e `gap`, os campos ganham respiro visual. O `padding` interno aumenta a área clicável e melhora a leitura. Bordas arredondadas e cores contrastantes criam hierarquia.

O estado `:focus` é especialmente importante. Quando o usuário navega por teclado (ou clica em um campo), o `:focus` mostra visualmente qual elemento está ativo. Remover o outline padrão sem substituí-lo por uma alternativa visível prejudica a acessibilidade. O ideal é manter ou redefinir o estilo de foco com uma cor chamativa, como uma borda verde ou um glow sutil.

Botões também merem atenção. Um botão de envio deve ser visualmente destacado e ter estados de `:hover` para indicar interatividade. A ordem visual do formulário deve seguir a ordem lógica de preenchimento, de cima para baixo.

:::exemplo
Um formulário de contato pode usar fundo escuro nos inputs, borda cinza sutil, foco verde com glow, e botão de envio em verde escuro que escurece no hover. Com poucas regras CSS, a experiência já fica profissional.
:::

## Questões de fixação

:::questao Em um grupo de opções onde o usuário deve escolher apenas uma alternativa, qual elemento HTML é o correto?
a) `<input type="checkbox">`
b) `<input type="radio">` *
c) `<input type="select">`
d) `<textarea>`
> A alternativa correta é a letra B porque o `type="radio"` é projetado para escolha única em um grupo. O `checkbox` (A) permite múltiplas seleções. `select` (C) não é um valor válido de `type` — usa-se a tag `<select>` separadamente. `<textarea>` (D) é para texto longo livre.
:::

## Atividade prática

:::exercicio
Crie uma página HTML contendo um formulário de cadastro com pelo menos 5 campos diferentes (por exemplo: nome, e-mail, senha, data de nascimento e uma seleção de gênero). Use apenas HTML e CSS. O formulário deve ter:

- Labels associadas corretamente a cada input
- Pelo menos 3 tipos diferentes de input (text, email, password, date, radio, etc.)
- Validação HTML5 em pelo menos 2 campos (required, minlength, pattern)
- Estilização CSS com foco visível, espaçamento interno e botão destacado

Ao final, escreva um parágrafo curto explicando quais tipos de input você escolheu e por que eles são adequados para os dados que estão coletando.
:::

:::roteiro
Se quiser aprofundar em sala, peça que os alunos comparem dois formulários: um sem labels associadas, sem validação e sem CSS; e outro completo. A diferença de usabilidade e clareza é imediata e ajuda a perceber o valor de cada detalhe.
:::

## Fechamento

:::resumo
- Formulários em HTML usam `<form>`, `<input>`, `<label>`, `<textarea>`, `<select>` e `<button>`
- O atributo `name` identifica o campo no envio dos dados; o `id` vincula à label
- Escolher o tipo correto de input melhora validação, mobile e acessibilidade
- Labels associadas via `for` são essenciais para acessibilidade e usabilidade
- Validação HTML5 oferece feedback imediato, mas não substitui validação no servidor
- CSS simples com `:focus`, `gap` e `padding` transforma a experiência do formulário
:::
