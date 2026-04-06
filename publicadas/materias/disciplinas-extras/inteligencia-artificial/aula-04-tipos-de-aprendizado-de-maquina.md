---
title: Tipos de Aprendizado de Máquina
description: Se o Machine Learning é a capacidade de aprender com dados, a pergunta natural é: aprender como? Existem formas muito diferentes de um modelo aprender — e a ...
order: 4
published: true
---

# Aula 04 — Tipos de Aprendizado de Máquina

Se o Machine Learning é a capacidade de aprender com dados, a pergunta natural é: aprender como? Existem formas muito diferentes de um modelo aprender — e a escolha do tipo certo de aprendizado define o que é possível construir. Os três tipos principais são o supervisionado, o não supervisionado e o por reforço. Cada um tem uma lógica própria, casos de uso específicos e limitações que todo desenvolvedor que trabalha com IA precisa conhecer.

## Aprendizado Supervisionado — aprender com exemplos rotulados

:::conceito
**Definição:** No aprendizado supervisionado, o modelo aprende a partir de pares de entrada e saída já conhecidos. Para cada exemplo de treino, existe uma resposta correta — o rótulo — que o modelo usa para ajustar seus parâmetros.
:::

É o tipo mais comum e mais utilizado na prática. O processo funciona assim: você fornece milhares de exemplos com a resposta certa, o modelo tenta acertar, compara com o gabarito e corrige o erro — repetindo isso até ficar preciso. Um classificador de e-mails spam, um modelo que prevê preço de imóveis, um sistema de diagnóstico por imagem — todos são exemplos de aprendizado supervisionado. O grande requisito é ter dados rotulados em quantidade suficiente, o que muitas vezes é o maior gargalo do projeto.

## Aprendizado Não Supervisionado — encontrar padrões sem gabarito

:::importante
**Supervisionado vs Não Supervisionado:** No supervisionado, alguém já sabe a resposta certa e ensina o modelo. No não supervisionado, ninguém sabe — o modelo precisa descobrir estruturas escondidas nos dados por conta própria, sem gabarito.
:::

Quando não existem rótulos, o modelo precisa encontrar padrões sozinho. As técnicas mais comuns são **clustering** (agrupar dados similares) e **redução de dimensionalidade** (encontrar representações compactas de dados complexos). Um exemplo prático: uma loja agrupa clientes por comportamento de compra sem saber de antemão quais grupos existem — o algoritmo descobre os perfis. Embeddings, que veremos no Módulo 3, são um produto direto de aprendizado não supervisionado aplicado a texto.

## Aprendizado por Reforço — aprender com tentativa e erro

:::exemplo
É como ensinar um cachorro: você não explica as regras — você recompensa o comportamento certo e ignora ou penaliza o errado. Com o tempo, o agente aprende quais ações maximizam a recompensa naquele ambiente.
:::

No aprendizado por reforço, um agente interage com um ambiente, toma ações e recebe recompensas ou penalidades. O objetivo é aprender uma política — uma estratégia de decisão — que maximize a recompensa ao longo do tempo. Foi assim que a AlphaGo da DeepMind aprendeu a jogar Go melhor que qualquer humano. E é esse mesmo princípio, na forma de **RLHF** (Reinforcement Learning from Human Feedback), que os LLMs modernos como Claude e GPT usam para alinhar respostas com preferências humanas após o treinamento inicial.

## Questões de fixação

:::questao Uma empresa de streaming quer agrupar seus usuários em perfis de comportamento para personalizar a interface — sem saber de antemão quantos perfis existem nem quais são. Qual tipo de aprendizado de máquina é mais adequado para essa situação?
a) Aprendizado supervisionado, pois a empresa conhece os tipos de usuário que quer identificar
b) Aprendizado não supervisionado, pois o modelo precisa descobrir os grupos por conta própria sem rótulos *
c) Aprendizado por reforço, pois o sistema aprende com o feedback dos usuários ao longo do tempo
d) Sistemas especialistas, pois as regras de segmentação são definidas por analistas de negócio
> A alternativa B está correta. Quando não existem rótulos nem categorias pré-definidas, o aprendizado não supervisionado é a abordagem certa. Algoritmos de clustering como K-Means ou DBSCAN identificam agrupamentos naturais nos dados de comportamento sem que ninguém precise dizer de antemão o que cada grupo representa.
:::

:::questao Sobre os tipos de aprendizado de máquina, qual das afirmações a seguir NÃO é verdadeira?
a) O aprendizado supervisionado requer dados rotulados com respostas corretas para treinar o modelo
b) O aprendizado por reforço usa recompensas e penalidades para guiar o aprendizado do agente
c) O RLHF é uma aplicação de aprendizado por reforço usada no treinamento de LLMs modernos
d) O aprendizado não supervisionado exige que um especialista defina previamente os grupos que o modelo deve encontrar *
> A alternativa D está incorreta — e essa é a resposta. A característica central do aprendizado não supervisionado é justamente a ausência de definições prévias: o modelo descobre os padrões e estruturas por conta própria. Se os grupos fossem definidos antes, com rótulos, seria aprendizado supervisionado.
:::

## Atividade prática

Para cada um dos três cenários abaixo, identifique qual tipo de aprendizado de máquina seria mais adequado e justifique em duas linhas:

- Um banco quer detectar transações fraudulentas usando um histórico de fraudes já identificadas
- Uma rede de supermercados quer entender quais produtos são comprados juntos com frequência
- Um robô precisa aprender a andar em terreno irregular sem instruções explícitas de movimento

:::importante
Documento com os três cenários respondidos: tipo de aprendizado escolhido e justificativa de 2 linhas para cada um, conectando a escolha com as características do problema.
:::

:::roteiro
Antes da atividade, faço a pergunta em voz alta: "O ChatGPT usa qual tipo de aprendizado?" — a maioria vai dizer supervisionado, o que abre espaço para explicar o RLHF. É uma ótima forma de mostrar que os modelos modernos combinam os três tipos em fases diferentes do treinamento, e que a divisão não é rígida na prática.
:::

## Fechamento

:::resumo
- Supervisionado aprende com exemplos rotulados — precisa de gabarito para treinar
- Não supervisionado descobre padrões sozinho — sem rótulos, sem categorias pré-definidas
- Por reforço aprende com recompensas e penalidades — base do RLHF nos LLMs modernos
:::
