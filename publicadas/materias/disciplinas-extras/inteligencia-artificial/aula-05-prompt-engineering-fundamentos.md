---
title: Prompt Engineering — Fundamentos
description: Se o modelo de linguagem é o motor, o prompt é o volante. A qualidade da resposta que você recebe depende diretamente da qualidade da instrução que você escr...
order: 5
published: true
---

# Aula 05 — Prompt Engineering — Fundamentos

Se o modelo de linguagem é o motor, o prompt é o volante. A qualidade da resposta que você recebe depende diretamente da qualidade da instrução que você escreve — e isso não é intuitivo. A maioria das pessoas usa LLMs como um campo de busca glorificado, jogando perguntas vagas e aceitando respostas mediocres. Prompt Engineering é a disciplina de escrever instruções precisas, estruturadas e eficazes para extrair o máximo de um modelo. É a habilidade mais acessível e mais subestimada de quem trabalha com IA hoje.

## O que é um prompt e por que ele importa

:::conceito
**Definição:** Prompt é toda a entrada de texto enviada ao modelo — inclui a instrução, o contexto, os exemplos e o formato esperado da resposta. O modelo não lê intenção: ele lê tokens. O que você não escreve, ele não considera.
:::

Um prompt mal escrito não é culpa do modelo — é um problema de comunicação. O modelo não tem acesso ao que você está pensando, só ao que você escreveu. Por isso, a diferença entre "resuma esse texto" e "resuma esse texto em 3 tópicos objetivos, sem jargões técnicos, para um leitor leigo" é enorme. A segunda instrução elimina ambiguidade e guia o modelo para o resultado esperado. Prompt Engineering é sobre reduzir essa ambiguidade sistematicamente.

## As quatro partes de um prompt eficaz

:::importante
**Estrutura vs improviso:** Prompts improvisados geram respostas inconsistentes. Prompts estruturados com papel, tarefa, contexto e formato geram respostas previsíveis e reutilizáveis — a diferença entre usar IA como ferramenta e usá-la como parceira de trabalho.
:::

Um prompt bem construído tem quatro elementos:

- **Papel** — quem o modelo deve ser: "Você é um revisor técnico sênior de código Python"
- **Tarefa** — o que fazer: "Revise o código abaixo e aponte problemas de performance"
- **Contexto** — informações relevantes: "O sistema processa 10 mil requisições por minuto"
- **Formato** — como entregar: "Responda em tópicos, com o problema e a sugestão de correção"

Nenhum dos quatro é opcional quando a tarefa é importante. Quanto mais complexa a entrega, mais precisos precisam ser os quatro elementos.

## Técnicas essenciais

:::exemplo
Escrever um bom prompt é como passar uma tarefa para um estagiário muito competente mas sem nenhuma suposição implícita. Ele faz exatamente o que você pediu — então você precisa pedir exatamente o que quer.
:::

Três técnicas que mudam o resultado imediatamente:

- **Few-shot prompting** — dar exemplos do que você espera antes de pedir. O modelo aprende o padrão e replica.
- **Chain of Thought** — pedir que o modelo pense passo a passo antes de responder. Reduz erros em tarefas lógicas.
- **Delimitadores** — usar marcadores como `---`, `###` ou XML para separar instrução, contexto e dados. Evita que o modelo confunda as partes.

## Questões de fixação

:::questao Um desenvolvedor precisa que o modelo gere descrições de produtos para um e-commerce. Ele escreve: "Gere uma descrição". O modelo entrega textos inconsistentes em tamanho e tom. Qual técnica de Prompt Engineering resolveria melhor esse problema?
a) Aumentar a temperatura do modelo para gerar respostas mais criativas
b) Repetir o mesmo prompt várias vezes até obter um resultado satisfatório
c) Usar few-shot prompting com dois ou três exemplos do formato e tom esperados antes do pedido *
d) Trocar de modelo, pois o problema é de capacidade e não de instrução
> A alternativa C está correta. Few-shot prompting resolve inconsistências mostrando ao modelo exatamente o padrão esperado. Com dois ou três exemplos de descrições bem escritas, o modelo aprende o tom, o tamanho e a estrutura desejados e replica esse padrão nas gerações seguintes — sem precisar mudar o modelo ou tentar na sorte.
:::

:::questao Sobre os quatro elementos de um prompt eficaz, qual das afirmações a seguir NÃO é verdadeira?
a) O papel define quem o modelo deve ser para responder com a perspectiva correta
b) O formato especifica como a resposta deve ser estruturada e entregue
c) O contexto fornece informações relevantes que o modelo não teria por conta própria
d) Um prompt bem escrito dispensa a definição de formato porque o modelo infere o melhor estilo automaticamente *
> A alternativa D está incorreta — e essa é a resposta. O modelo não infere o "melhor" formato: ele escolhe um formato padrão baseado nos padrões do treinamento, que pode não ser o que você precisa. Especificar o formato é essencial para obter respostas previsíveis e reutilizáveis, especialmente em automações e sistemas que dependem de consistência.
:::

## Atividade prática

Pegue este prompt fraco: *"Me fale sobre Python"*. Reescreva-o três vezes, cada uma aplicando um dos elementos aprendidos — papel, contexto e formato. Compare as respostas geradas pelas três versões e documente o que mudou em cada uma.

:::importante
Documento com os três prompts reescritos, a resposta gerada por cada um e uma análise de 3 linhas comparando como o modelo se comportou diferente em cada versão.
:::

:::roteiro
Faço ao vivo: digito "explique machine learning" no ChatGPT e mostro a resposta genérica. Depois digito a versão com papel, contexto e formato e mostro a diferença. O contraste visual convence mais do que qualquer explicação teórica. Pergunto para a turma: "qual dos dois você usaria num trabalho real?" — a resposta é óbvia e abre a discussão sobre consistência em automações.
:::

## Fechamento

:::resumo
- Prompt é toda a entrada enviada ao modelo — o que não está escrito, o modelo não considera
- Um prompt eficaz tem quatro partes: papel, tarefa, contexto e formato
- Few-shot, Chain of Thought e delimitadores são técnicas que aumentam precisão e consistência
:::
