# ProfToniCoimbra

Repositorio de materiais didaticos do Toni Coimbra.

## Estrutura

- `publicadas/`: aulas validadas e prontas para consumo
- `staging/pendentes/`: rascunhos intermediarios
- `staging/reprovadas/`: saidas que falharam na validacao
- `manifest.json`: indice simples das aulas publicadas

## Grade Atual

- 1a Serie - Analise e Metodos para Sistemas
- 1a Serie - Introducao a Computacao
- 2a Serie - Inovacao Tecnologia e Empreendedorismo
- 2a Serie - Programacao Front-End
- 3a Serie - Programacao no Desenvolvimento de Sistemas
- 3a Serie - Analise e Projeto de Sistemas
- Disciplinas Extras - Inteligencia Artificial

## Fluxo

1. O bot gera a aula em Markdown.
2. A aula passa pelo validador do contrato do ProfessorDash.
3. Se aprovada, vai para `publicadas/`.
4. O manifest e atualizado.
5. O repositorio recebe commit Git.

O push para o GitHub depende do remoto `git@github.com:elvertoni/ProfToniCoimbra.git` existir.
