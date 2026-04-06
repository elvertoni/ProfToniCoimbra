---
title: Vibe Coding vs Spec Coding
description: Com a IA gerando código em segundos, surgiu uma prática sedutora chamada Vibe Coding: você descreve vagamente o que quer, a IA gera algo, você pede ajustes, ...
order: 17
published: true
---

# Aula 17 — Vibe Coding vs Spec Coding

Com a IA gerando código em segundos, surgiu uma prática sedutora chamada Vibe Coding: você descreve vagamente o que quer, a IA gera algo, você pede ajustes, ela gera de novo — e assim vai até parecer que funciona. Para um protótipo de fim de semana, é libertador. Para um sistema em produção, é uma bomba-relógio. Esta aula não é sobre demonizar o Vibe Coding — é sobre entender quando ele serve e quando o Spec Coding é a única escolha profissional responsável.

## O que é Vibe Coding

:::conceito
**Definição:** Vibe Coding é o estilo de desenvolvimento onde o programador descreve intenções vagas à IA, aceita o código gerado sem entendê-lo completamente e itera por tentativa e erro até o resultado parecer correto. A velocidade é alta, o controle é baixo.
:::

O termo foi popularizado por Andrej Karpathy em 2025 — não como crítica, mas como descrição de uma nova forma de programar onde o desenvolvedor "surfa na vibe" do modelo. Na prática: você não lê o código gerado com atenção, não escreve testes, não documenta decisões e confia que se funciona na demo, está certo. Para exploração e prototipagem, é genuinamente útil. O problema começa quando esse estilo é levado para sistemas que outras pessoas dependem.

## O que é Spec Coding e quando ele é obrigatório

:::importante
**Velocidade aparente vs velocidade real:** Vibe Coding parece mais rápido porque o código aparece depressa. Spec Coding parece mais lento porque começa com escrita. Mas no prazo de semanas, Vibe Coding acumula dívida técnica que paralisa o projeto. Spec Coding entrega sistemas que escalam — a velocidade real é maior.
:::

Spec Coding é obrigatório quando qualquer uma dessas condições for verdadeira:

- **Outras pessoas dependem do sistema** — usuários reais, colegas, integrações com outros sistemas
- **O sistema lida com dados sensíveis** — financeiros, jurídicos, de saúde, pessoais
- **O sistema precisa ser mantido** — você ou outra pessoa vai modificar esse código em 6 meses
- **O sistema precisa ser auditado** — existe responsabilidade sobre o que ele faz e por quê

Fora dessas condições — um script descartável, um protótipo de validação, uma exploração técnica — Vibe Coding é completamente legítimo.

## A tabela de decisão

:::exemplo
Vibe Coding é como cozinhar sem receita para experimentar sabores novos — divertido, criativo, ótimo para descobertas. Spec Coding é como cozinhar para um restaurante com 200 clientes — cada prato precisa sair igual, no tempo certo, com os ingredientes corretos. Contextos diferentes, ferramentas diferentes.
:::

| Critério | Vibe Coding | Spec Coding |
|---|---|---|
| Velocidade inicial | Alta | Média |
| Qualidade em produção | Baixa | Alta |
| Manutenibilidade | Baixa | Alta |
| Rastreabilidade de decisões | Nenhuma | Completa |
| Ideal para | Protótipos e exploração | Sistemas reais |
| Risco acumulado | Cresce rápido | Controlado |

## Questões de fixação

:::questao Um desenvolvedor usa Vibe Coding para criar um sistema que processa documentos jurídicos e gera relatórios de admissibilidade para um tribunal. Seis meses depois, o sistema começa a dar resultados inconsistentes e ninguém sabe por quê. Qual característica do Vibe Coding explica diretamente esse problema?
a) O modelo de IA usado no desenvolvimento ficou desatualizado e precisa ser substituído
b) O sistema foi desenvolvido rápido demais e precisaria de mais iterações de prompt
c) ausência de spec e rastreabilidade torna impossível entender por que o sistema se comporta de determinada forma *
d) O volume de documentos cresceu além da capacidade do sistema, que precisa ser escalado
> A alternativa C está correta. Sem spec, sem documentação de decisões e sem testes baseados em critérios definidos, o sistema é uma caixa preta — mesmo para quem o criou. Inconsistências aparecem mas não há base para diagnosticar: o comportamento esperado nunca foi documentado. Sistemas jurídicos com essa característica não são apenas tecnicamente ruins — são profissionalmente irresponsáveis.
:::

:::questao Sobre Vibe Coding e Spec Coding, qual das afirmações a seguir NÃO é verdadeira?
a) Vibe Coding é adequado para protótipos e exploração técnica sem compromisso com produção
b) Spec Coding é obrigatório quando o sistema lida com dados sensíveis ou é mantido por outras pessoas
c) velocidade real do Spec Coding tende a ser maior que a do Vibe Coding em projetos com mais de algumas semanas
d) Vibe Coding e Spec Coding são mutuamente exclusivos — um projeto não pode usar os dois em momentos diferentes *
> A alternativa D está incorreta — e essa é a resposta. Os dois estilos podem e devem coexistir no mesmo projeto em fases diferentes. A fase de exploração e prototipagem pode usar Vibe Coding para validar ideias rapidamente. Quando a ideia é validada e o sistema vai para produção, Spec Coding assume. Saber fazer a transição — e reconhecer o momento certo — é a habilidade mais sofisticada desta aula.
:::

## Atividade prática

Pegue um projeto que você já fez ou imagina fazer com IA. Classifique-o: Vibe Coding é aceitável ou Spec Coding é obrigatório? Justifique usando os quatro critérios da aula — dependência de outros, dados sensíveis, manutenção futura e auditabilidade. Se Spec Coding for obrigatório, liste os três primeiros itens que a spec deveria cobrir.

:::importante
Documento com a classificação do projeto, justificativa baseada nos quatro critérios e — se Spec Coding for obrigatório — os três primeiros itens da spec. Se Vibe Coding for aceitável, descrever os limites: em que momento o projeto exigiria migrar para Spec Coding.
:::

:::roteiro
Faço uma demo ao vivo de Vibe Coding puro: peço à IA um script em 3 prompts sem planejar nada. O código funciona. Depois peço para alguém da turma explicar por que aquela linha específica existe — ninguém consegue. Esse momento de silêncio é o argumento mais forte da aula. Depois mostro o mesmo sistema construído com spec — qualquer linha tem uma origem rastreável. A diferença não é estética: é profissional.
:::

## Fechamento

:::resumo
- Vibe Coding é legítimo para protótipos — perigoso para sistemas em produção
- Spec Coding é obrigatório quando há dependência, dados sensíveis, manutenção ou auditabilidade
- Os dois estilos coexistem no mesmo projeto — a habilidade é saber quando fazer a transição
:::
