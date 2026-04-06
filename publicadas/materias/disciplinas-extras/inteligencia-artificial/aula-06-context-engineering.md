---
title: Context Engineering
description: Prompt Engineering ensina a escrever boas instruções. Context Engineering vai além: trata de gerenciar tudo que entra na janela de contexto do modelo — não a...
order: 6
published: true
---

# Aula 06 — Context Engineering

Prompt Engineering ensina a escrever boas instruções. Context Engineering vai além: trata de gerenciar tudo que entra na janela de contexto do modelo — não apenas o prompt, mas os documentos, o histórico, os dados externos e as instruções de sistema. É a diferença entre dar uma tarefa ao modelo e montar o ambiente completo em que ele vai trabalhar. Quem domina Context Engineering não escreve prompts melhores — constrói sistemas de IA mais inteligentes.

## O que é a janela de contexto

:::conceito
**Definição:** A janela de contexto é tudo que o modelo consegue "ver" em uma única chamada — o system prompt, o histórico da conversa, os documentos anexados e o prompt do usuário. Tudo dentro desse limite é processado juntos; tudo fora é invisível.
:::

Modelos modernos têm janelas de contexto grandes — Claude, por exemplo, suporta até 200 mil tokens. Mas tamanho não resolve o problema de organização. Jogar documentos, histórico e instrução numa ordem aleatória dentro da janela gera respostas piores do que uma janela menor bem organizada. O modelo presta mais atenção ao início e ao fim do contexto — o que está no meio tende a ser "esquecido". Context Engineering é sobre decidir o que entra, em que ordem e com qual peso.

## As quatro fontes de contexto

:::importante
**Contexto não é só o prompt:** A maioria das pessoas coloca tudo no campo de mensagem do usuário. Context Engineering distribui a informação nas fontes certas: system prompt para identidade e regras, ferramentas para dados externos, histórico para continuidade e mensagem do usuário para a tarefa imediata.
:::

Um sistema bem projetado distribui o contexto em quatro camadas:

- **System prompt** — identidade, regras, tom e restrições permanentes do agente
- **Ferramentas e RAG** — dados externos recuperados sob demanda, só quando necessário
- **Histórico de conversa** — o que foi dito antes, comprimido quando necessário
- **Mensagem do usuário** — a tarefa ou pergunta atual

Cada camada tem um papel. Misturar tudo na mensagem do usuário é como entregar ao funcionário o manual da empresa, o histórico de todas as reuniões e a tarefa do dia numa única folha amassada.

## Princípios práticos de Context Engineering

:::exemplo
Context Engineering é como preparar a mesa antes de uma cirurgia: cada instrumento no lugar certo, na ordem certa, sem nada desnecessário. O cirurgião (modelo) trabalha melhor quando o ambiente está organizado — não quando precisa procurar o bisturi embaixo de papéis.
:::

Três princípios que guiam boas decisões de contexto:

- **Relevância antes de volume** — contexto desnecessário polui a atenção do modelo. Inclua só o que importa para aquela tarefa específica.
- **Posicionamento importa** — instruções críticas ficam no início ou no fim, nunca enterradas no meio de documentos longos.
- **Compressão inteligente** — históricos longos devem ser resumidos periodicamente. Um resumo bem feito vale mais que um histórico completo que ultrapassa o limite da janela.

## Questões de fixação

:::questao Um sistema de atendimento usa um agente de IA com acesso ao catálogo completo de 5 mil produtos. O desenvolvedor injeta o catálogo inteiro no contexto de cada conversa. O sistema fica lento e as respostas pioram. Qual princípio de Context Engineering foi ignorado?
a) Posicionamento — o catálogo deveria estar no final do contexto, não no início
b) Compressão — o histórico de conversa deveria ser resumido antes de cada resposta
c) Relevância — apenas os produtos relacionados à pergunta do usuário deveriam ser injetados, via RAG *
d) Identidade — o system prompt não define claramente o papel do agente de atendimento
> A alternativa C está correta. Injetar 5 mil produtos em toda conversa viola o princípio de relevância. A solução é usar RAG para recuperar apenas os produtos semanticamente próximos da pergunta do usuário — reduzindo o contexto, melhorando a velocidade e aumentando a precisão da resposta. Volume de contexto não é sinônimo de qualidade.
:::

:::questao Sobre as quatro camadas de contexto em um sistema de IA, qual das afirmações a seguir NÃO é verdadeira?
a) O system prompt é o lugar correto para definir identidade, tom e regras permanentes do agente
b) Dados externos devem ser recuperados sob demanda via ferramentas, não injetados sempre
c) O histórico de conversa pode ser comprimido em resumos para economizar espaço na janela
d) Quanto maior a janela de contexto, melhor a resposta — modelos com janelas maiores sempre performam melhor *
> A alternativa D está incorreta — e essa é a resposta. Janela grande não garante resposta melhor. O modelo tende a perder atenção no meio de contextos muito longos — fenômeno chamado de "lost in the middle". Uma janela menor, com contexto bem selecionado e organizado, costuma gerar respostas mais precisas do que uma janela enorme com informação irrelevante.
:::

## Atividade prática

Projete o contexto de um agente de IA para triagem de e-mails corporativos. Defina: o que vai no system prompt, que dados externos ele precisaria buscar via ferramenta, como o histórico seria gerenciado e o que o usuário enviaria em cada mensagem. Documente cada camada separadamente.

:::importante
Documento com as quatro camadas descritas para o agente de triagem: system prompt rascunhado, lista de dados externos necessários, política de histórico e formato da mensagem do usuário. Mínimo de 3 linhas por camada.
:::

:::roteiro
Mostro ao vivo a diferença entre jogar um PDF inteiro no chat e usar RAG para buscar só os trechos relevantes. A analogia que uso: "dar o livro inteiro pra alguém responder uma pergunta vs. marcar a página certa". O tempo de resposta e a precisão mudam visivelmente — e isso convence mais do que teoria.
:::

## Fechamento

:::resumo
- A janela de contexto é tudo que o modelo vê numa chamada — organização importa mais que volume
- Contexto bem projetado distribui informação em quatro camadas: system prompt, ferramentas, histórico e mensagem
- Relevância, posicionamento e compressão são os três princípios práticos do Context Engineering
:::
