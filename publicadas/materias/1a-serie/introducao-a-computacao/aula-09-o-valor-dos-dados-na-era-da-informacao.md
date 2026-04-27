---
title: O Valor dos Dados na Era da Informação
description: Do bit ao banco de dados — entenda o que são dados, como se transformam em informação e por que qualidade, tipo e responsabilidade decidem o sucesso ou fracasso de um sistema.
order: 9
published: true
---

# Aula 09 — O Valor dos Dados na Era da Informação

Se as aulas anteriores mostraram o que são computadores e redes, agora
precisamos olhar para o que circula dentro deles: **dados**. Em tecnologia,
dado não é palavra da moda — é matéria-prima. Sistemas coletam, armazenam,
cruzam e interpretam dados o tempo todo. Quando os dados são ruins, o sistema
erra. Quando são bem tratados, viram informação que orienta decisões. Esta
aula conecta o abstrato ("dado") ao concreto ("tipo de dado que você vai
programar").

## Abertura

:::objetivo
Compreender o que são dados, diferenciar dado de informação, reconhecer os
tipos fundamentais usados em programação e entender por que qualidade e
responsabilidade no tratamento de dados são requisitos técnicos, não detalhes.
:::

:::curiosidade
Em 1999, a sonda **Mars Climate Orbiter** — um projeto de US$ 327 milhões —
se destruiu ao entrar na atmosfera de Marte. O motivo? Uma equipe de engenharia
usou **libra-força** (sistema imperial) enquanto outra usou **newtons** (sistema
métrico) para calcular a trajetória. Um dado com a unidade errada, e um erro de
navegação de apenas 170 km foi suficiente para a sonda se desintegrar. Dado
ruim = prejuízo real. Não é exagero de professor.
:::

:::dica
Sempre que um sistema pedir nome, data, nota ou localização, pergunte: qual o
**tipo** desse dado? Ele é obrigatório? O que acontece se vier errado ou vazio?
Programar começa com essas perguntas.
:::

## Dado × Informação: a diferença que importa

:::conceito
**Dados** são registros brutos de fatos, eventos ou características — números,
textos, datas, coordenadas. **Informação** é o que surge quando esses dados são
organizados, interpretados e colocados em contexto para responder uma pergunta
ou orientar uma decisão.
:::

Um nome digitado sozinho é um dado. Uma nota isolada é um dado. Um horário de
acesso é um dado. Eles viram informação quando o sistema (ou a pessoa) os
organiza para responder algo útil: "Quem faltou mais este mês?", "Qual turma
teve a maior média?", "Qual produto vendeu mais no último trimestre?"

:::exemplo
Em uma escola, faltas, notas, entregas e horários são dados brutos. Quando a
coordenação cruza esses registros e identifica quais alunos têm mais de 25%
de faltas E média abaixo de 6, surge uma **informação** que orienta uma
intervenção. Os dados existiam; a informação precisou ser construída.
:::

## Os tipos de dado que você vai programar

Antes mesmo de escrever a primeira linha de código, você precisa saber **que
tipo de dado** está manipulando. Isso determina quais operações fazem sentido,
quanto espaço ocupa e como o sistema valida o valor.

:::importante
Os quatro tipos primitivos fundamentais em praticamente toda linguagem:
| Tipo | Exemplo | Uso típico |
|------|---------|------------|
| **Inteiro** | `-3`, `0`, `42` | Contagens, idades, quantidades |
| **Real** | `3.14`, `-0.5`, `7.0` | Notas, preços, médias, medidas |
| **Lógico** | `true`, `false` | Liga/desliga, ativo/inativo, aprovado/reprovado |
| **Texto** | `"Toni"`, `"Aula 09"` | Nomes, descrições, e-mails |
:::

Esses tipos não são invenção arbitrária — eles refletem como o hardware
armazena cada coisa. Um inteiro ocupa um número fixo de bytes. Um texto pode
ocupar muito mais. Um lógico (booleano) ocupa apenas 1 bit, mas na prática
usa 1 byte inteiro por conveniência do processador.

## Qualidade de dados não é opcional

:::importante
Dado só tem valor técnico quando é **confiável, íntegro e bem tipado**. Dado
incompleto, duplicado, com tipo errado ou sem validação não é "quase bom" —
é **prejudicial**, porque gera decisões baseadas em informação falsa.
:::

A máxima "dados são o novo petróleo" só vale para dados de qualidade. Dado
sujo é como petróleo misturado com areia: não refina, não gera valor, só ocupa
espaço e atrapalha. Em programação, isso se traduz em:

- **Validação**: o campo "idade" aceita números negativos?
- **Tipagem**: a "data de nascimento" está como texto ou como data?
- **Unicidade**: o CPF está duplicado no cadastro?
- **Proteção**: a senha está armazenada em texto puro?

:::atencao
Um erro grave de projeto é achar que "coletar mais dados" automaticamente
melhora o sistema. Se os dados são imprecisos, mal tipados ou desnecessários,
o excesso só aumenta o ruído, o custo de armazenamento e o risco de vazamento.
:::

:::roteiro
Perguntas para provocar a turma:
- "Se um campo 'telefone' aceitar letras, o que acontece na hora de enviar SMS?"
- "Qual a diferença entre armazenar '10/05/2025' como texto e como data?"
- "Um sistema de farmácia que não valida 'data de validade' pode causar que tipo
de problema real?"
:::

## Questões de fixação

:::questao Um aplicativo de delivery armazena o preço dos produtos como texto
(`"19.90"`) em vez de número real. Isso gera lentidão nos cálculos de total
do pedido. Por que?
a) Porque operações matemáticas com texto são mais imprecisas e ineficientes que com tipos numéricos *
b) Porque o aplicativo não tem acesso à internet
c) Porque o sistema operacional bloqueia textos
d) Porque o banco de dados rejeita campos de texto
> Quando você armazena um preço como texto, toda operação matemática exige
conversão manual de string para número, o que é lento e propenso a erro (ex:
"R$ 19,90" vs "19.90"). Usar o tipo numérico correto (real/float) permite que
o processador execute a operação diretamente em hardware.
:::

:::questao Sobre dados e tipos primitivos, qual alternativa NÃO é verdadeira?
a) O tipo lógico (booleano) representa exatamente dois estados: verdadeiro ou falso
b) Dados são registros brutos; informação é dado organizado com contexto e propósito
c) Um dado com tipo errado funciona corretamente desde que o valor "pareça certo" *
d) Dado incompleto ou sem validação pode gerar decisões baseadas em informação falsa
> A alternativa C é falsa porque "parecer certo" não é critério técnico. Um campo
"idade" que aceita `-5` ou `3.7` como inteiro não está funcionando corretamente,
mesmo que o valor seja numericamente plausível. Tipagem correta é requisito
técnico, não sugestão.
:::

## Atividade prática

:::exercicio
**Auditoria de dados** (15 minutos, individual)

Escolha um sistema real que você usa (plataforma escolar, app de transporte,
streaming, loja online) e responda:

1. Liste **5 campos de dados** que o sistema coleta (ex: e-mail, data de
nascimento, forma de pagamento)
2. Para cada campo, identifique o **tipo primitivo** correto (inteiro, real,
lógico, texto)
3. Para cada campo, descreva **um problema real** que aconteceria se o dado
viesse errado, vazio ou com tipo incorreto
4. Dê um exemplo de **informação** que o sistema poderia gerar cruzando pelo
menos 3 desses campos

⚠️ Seja específico. Não escreva "o sistema coleta dados do usuário". Nomeie:
`telefone`, `CEP`, `nota_final`, `data_entrega`, `status_pedido`.
:::

## Fechamento

:::resumo
- **Dado** é registro bruto; **informação** é dado organizado com propósito
- Conhecer os **tipos primitivos** (inteiro, real, lógico, texto) é o primeiro
passo para programar — cada tipo existe por um motivo de hardware e validação
- Dado com tipo errado, incompleto ou sem validação é **dívida técnica**:
parece que funciona até o dia em que falha de verdade
- O caso da Mars Climate Orbiter (US$ 327 milhões perdidos por um erro de
unidade) prova que qualidade de dados não é frescura acadêmica
- Na próxima aula: como os computadores representam dados digitalmente com 0 e 1
:::
