---
title: Noções Básicas de Eletricidade para Informática
description: Tensão, corrente, potência e segurança elétrica — o fundamento físico que alimenta cada transistor, cada chip e cada equipamento que um técnico de informática encontra no dia a dia.
order: 11
published: true
---

# Aula 11 — Noções Básicas de Eletricidade para Informática

Se as aulas anteriores mostraram o que são dados e como sistemas digitais
funcionam com 0 e 1, agora vamos ao fundamento físico que torna tudo isso
possível: **eletricidade**. Não estamos falando de virar eletricista — estamos
falando de entender o suficiente para diagnosticar por que um computador
reinicia sozinho, por que uma fonte queima ou por que um carregador paralelo
pode destruir um notebook. Esta aula conecta a teoria digital ao mundo real
da bancada.

## Abertura

:::objetivo
Compreender os conceitos de tensão, corrente e potência elétrica, aplicá-los
à leitura de fontes e carregadores de equipamentos de informática, e reconhecer
situações de risco elétrico no ambiente técnico.
:::

:::curiosidade
Em 2012, um raio atingiu uma subestação elétrica em Dublin e derrubou os
datacenters da **Amazon AWS** e da **Microsoft Azure** na região. Serviços como
Netflix, Pinterest e milhares de sites ficaram fora do ar por horas. Um único
evento elétrico externo, completamente fora do controle dos engenheiros de
software, parou parte da internet mundial. Eletricidade não é "detalhe de
infraestrutura" — é a base de tudo.
:::

:::dica
Antes de culpar o sistema operacional por qualquer problema, verifique a
alimentação elétrica. Cabo solto, fonte subdimensionada e tomada com mau
contato causam mais "bugs" do que muito código mal escrito.
:::

## Tensão, corrente e potência — o tripé elétrico

:::conceito
Três grandezas fundamentais governam todo equipamento eletrônico:
- **Tensão (V)** — a "força" que empurra a energia pelo circuito, medida em volts
- **Corrente (A)** — o fluxo de carga que circula, medido em ampères
- **Potência (W)** — a energia consumida ou fornecida por segundo, medida em watts
:::

Uma analogia hidráulica ajuda: pense em uma mangueira de jardim. A **tensão**
é a pressão da água. A **corrente** é a quantidade de água que passa. A
**potência** é o produto das duas — a capacidade total de realizar trabalho.
Aumentar a pressão (voltagem) ou aumentar o fluxo (corrente) aumenta a potência.

No mundo real da informática, isso aparece o tempo todo:

| Equipamento | Tensão típica | Potência típica |
|---|---|---|
| Carregador de celular | 5V (USB) a 20V (carga rápida) | 5W a 65W |
| Notebook | 19V a 20V | 45W a 130W |
| Desktop com GPU | 110V/220V (entrada) | 300W a 800W |
| Servidor de rack | 110V/220V | 500W a 2000W |

:::importante
Um componente **não "puxa" mais corrente do que precisa**. Uma fonte de 500W
não gasta 500W o tempo todo — ela **entrega** até 500W se os componentes
exigirem. O que destrói equipamentos é usar fonte com potência **insuficiente**
para o que está conectado, forçando-a a operar no limite.
:::

:::exemplo
Um desktop gamer com processador (125W), placa de vídeo (250W), placa-mãe (50W),
memória e discos (50W) exige aproximadamente 475W em carga máxima. Uma fonte de
400W vai operar no limite, aquecer, e pode desligar ou queimar. Uma fonte de 600W
opera com folga, mais fria e com vida útil maior.
:::

## O que acontece quando a energia falha

Fora do laboratório ideal, a rede elétrica é suja: tem picos, quedas, ruído
e instabilidade. Equipamentos de informática são sensíveis a isso.

:::atencao
**Sintomas comuns de problema elétrico mascarados de "defeito de software":**
- Computador reinicia sozinho sob carga pesada → fonte subdimensionada
- Tela pisca ou periférico USB desconecta → alimentação instável
- Notebook desliga com bateria acima de 20% → bateria viciada ou controlador
bateria viciada ou controlador de carga com defeito
- Cheiro de queimado ou ruído elétrico → fonte com componente danificado
:::

## Segurança elétrica é requisito técnico

:::importante
Em ambiente técnico, segurança elétrica não é "bom senso" — é **procedimento**.
Antes de abrir qualquer gabinete ou trocar qualquer componente, três regras:
1. Desconecte o cabo de força da tomada
2. Aterre-se (toque na carcaça metálica do gabinete) para descarregar estática
3. Inspecione visualmente cabos, conectores e capacitores estufados
:::

A eletricidade estática que acumulamos no corpo (centenas a milhares de volts,
embora com corrente ínfima) é suficiente para danificar componentes sensíveis
como memória RAM, processador e chips de BIOS. Por isso técnicos usam pulseira
antiestática e manuseiam placas pelas bordas.

:::roteiro
Perguntas para a turma:
- "Por que uma fonte de computador tem tantos fios de cores diferentes?"
(Resposta: diferentes tensões — 3.3V, 5V, 12V — para diferentes componentes)
- "O que acontece se eu usar o carregador de 45W de um notebook em outro
que exige 90W?" (Resposta: carrega lentamente ou não carrega; pode danificar
o carregador)
- "Por que não se deve usar 'T' (benjamim) para ligar muitos equipamentos?"
:::

## Questões de fixação

:::questao Uma escola trocou 30 computadores antigos por novos. Após a troca, o disjuntor da sala desarma várias vezes ao dia. Qual a provável causa?
a) Os computadores novos consomem mais potência e a instalação elétrica da sala não foi dimensionada para a carga total *
b) O sistema operacional novo é incompatível com a rede elétrica
c) Os monitores estão com defeito
d) O técnico esqueceu de instalar o antivírus
> Computadores mais potentes consomem mais energia. Se 30 máquinas antigas
consumiam 150W cada (4500W total) e as novas consomem 300W cada (9000W total),
o circuito elétrico original pode não suportar. É um problema de infraestrutura
elétrica, não de software.
:::

:::questao Sobre potência elétrica em equipamentos de informática, qual alternativa está correta?
a) Uma fonte de 500W sempre consome 500W, independentemente do que está conectado
b) A potência de uma fonte indica o máximo que ela pode fornecer; o consumo real depende dos componentes conectados *
c) Potência e tensão são a mesma coisa medidas em unidades diferentes
d) Fontes com potência maior que o necessário danificam os componentes
> A potência nominal da fonte (ex: 500W) é o teto de fornecimento, não o consumo
constante. Se os componentes exigem 200W, a fonte fornece 200W — e ponto.
:::

## Atividade prática

:::exercicio
**Inspeção elétrica orientada** (15 minutos, individual ou em dupla)

Escolha um equipamento de informática acessível (seu computador, o do
laboratório, um notebook) e faça a leitura da etiqueta da fonte ou carregador.
Registre:

1. Tensão de saída (V) e corrente máxima (A)
2. Potência (W) — se não estiver explícita, calcule: P = V × A
3. Compare com a potência típica da tabela da aula — está dentro do esperado?
4. Inspecione visualmente: o cabo está íntegro? O conector está firme? Há
sinais de aquecimento ou oxidação?

⚠️ **Apenas observe. Não abra equipamentos energizados.**
:::

## Fechamento

:::resumo
- **Tensão (V)** empurra, **corrente (A)** flui, **potência (W)** realiza
trabalho — os três números que você lê em qualquer etiqueta de fonte
- Fonte subdimensionada é a causa mais comum de travamentos e reinicializações
que parecem "defeito de software" mas são elétricos
- Eletricidade é a base física que alimenta cada transistor, cada bit e cada
cálculo. Sem energia estável, não há sistema estável
- Na próxima aula: como a lógica digital se transforma em números binários
e como converter decimal para a linguagem dos transistores
:::
