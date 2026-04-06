---
title: MCP — Model Context Protocol
description: Function Calling resolve a integração entre um agente e uma ferramenta. Mas e quando você quer que qualquer agente, em qualquer plataforma, acesse qualquer f...
order: 13
published: true
---

# Aula 13 — MCP — Model Context Protocol

Function Calling resolve a integração entre um agente e uma ferramenta. Mas e quando você quer que qualquer agente, em qualquer plataforma, acesse qualquer ferramenta — sem reescrever a integração toda vez? O MCP, Model Context Protocol, é a resposta da Anthropic para esse problema. Lançado em 2024, o MCP é um protocolo aberto que padroniza como agentes de IA se conectam a ferramentas, dados e serviços externos. É o USB da IA: um padrão universal que elimina a necessidade de integração customizada para cada par de modelo e ferramenta.

## O problema que o MCP resolve

:::conceito
**Definição:** MCP é um protocolo aberto que padroniza a comunicação entre agentes de IA (clientes) e fontes de dados ou ferramentas (servidores). Um servidor MCP expõe capacidades — ferramentas, recursos e prompts — que qualquer cliente MCP compatível pode usar sem integração customizada.
:::

Antes do MCP, cada integração era um projeto: conectar o Claude ao Notion exigia código específico para o Claude; conectar o GPT ao mesmo Notion exigia código diferente. Com MCP, o Notion expõe um servidor MCP uma única vez — e qualquer cliente compatível, seja Claude Desktop, Claude Code, Cursor ou qualquer outra ferramenta, conecta diretamente. É a diferença entre cabos proprietários e USB: o padrão elimina a multiplicação de adaptadores.

## Arquitetura do MCP — clientes, servidores e o que eles expõem

:::importante
**Cliente vs Servidor MCP:** O cliente MCP é o agente ou ferramenta de IA — Claude Desktop, Claude Code, Cursor. O servidor MCP é qualquer sistema que expõe capacidades: um banco de dados, uma API, um sistema de arquivos, um serviço externo. A comunicação entre os dois segue o protocolo padronizado.
:::

### Diferença entre cliente e servidor na prática

O **cliente MCP** é onde a IA está em execução — é quem faz perguntas e usa ferramentas. O **servidor MCP** é o sistema que fornece dados ou executa ações em nome do cliente. Pense na arquitetura como uma requisição HTTP comum: o cliente (navegador) pede algo a um servidor (API). A diferença é que aqui o "cliente" é um modelo de IA e o "servidor" pode ser qualquer sistema — um banco de dados, o filesystem, uma API de terceiros.

- **Cliente**: Claude Desktop, Cursor, Claude Code, seu próprio agente via SDK
- **Servidor**: o Notion, seu PostgreSQL, seu filesystem, uma API REST, um script Python customizado

### Exemplo de configuração real: claude_desktop_config.json

Para usar um servidor MCP no Claude Desktop, basta adicionar a configuração no arquivo `claude_desktop_config.json`. Exemplo com o servidor **filesystem** (acesso a arquivos locais) e **n8n** (automação de workflows):

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/home/usuario/projetos"]
    },
    "n8n": {
      "command": "npx",
      "args": ["-y", "@n8n/mcp-server", "https://seu-n8n.exemplo.com"]
    }
  }
}
```

> **Anatomia da configuração:** `mcpServers` é o objeto raiz. Cada chave ( `"filesystem"`, `"n8n"` ) é o nome que o cliente exibe ao usuário. `command` define como iniciar o servidor — `npx` baixa e executa o pacote npm correspondente. `args` são os argumentos passados ao servidor: no caso do filesystem, o caminho da pasta que o servidor pode acessar. Essa configuração é específica do cliente — cada cliente MCP (Cursor, Claude Code) tem seu próprio arquivo de configuração.

### Servidores MCP que você pode instalar hoje

O ecossistema MCP já tem servidores prontos para uso imediato. Alguns dos mais populares:

| Servidor | O que expõe | Quando usar |
|---|---|---|
| **@modelcontextprotocol/server-filesystem** | Leitura e escrita de arquivos locais | Quando o agente precisa acessar seu projeto |
| **@modelcontextprotocol/server-github** | Repositórios, issues, PRs, código | Quando o agente desenvolve com Git |
| **@modelcontextprotocol/server-sqlite** | Consultas em banco SQLite local | Para projetos pequenos sem PostgreSQL |
| **@n8n/mcp-server** | Workflows de automação n8n | Para acionar automações via agente |
| **@modelcontextprotocol/server-postgres** | Consultas PostgreSQL | Quando você já usa PostgreSQL |
| **@modelcontextprotocol/server-brave-search** | Busca na web em tempo real | Para agentes que precisam de informações atuais |
| **@notionhq/transport** | Páginas e databases do Notion | Para agentes que consultam sua base de notas |

A lista completa está em [github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — com servidores para Slack, Google Drive, S3, Redis e dezenas de outros sistemas.

:::atencao
Um servidor MCP é uma superfície de ataque: ele dá ao modelo de IA a capacidade de executar ações no sistema que expõe. Um servidor filesystem sem restrições permite que o agente leia e escreva qualquer arquivo no caminho configurado. Antes de ativar um servidor em produção, defina escopos mínimos — por exemplo, qual pasta específica o servidor pode acessar, não o filesystem inteiro. Essa configuração é sua responsabilidade, não do protocolo.
:::

Um servidor MCP pode expor três tipos de capacidade:

- **Tools** — funções que o agente pode chamar para executar ações, como buscar dados, criar registros ou enviar mensagens
- **Resources** — dados que o agente pode ler, como arquivos, páginas de documentação ou registros de banco de dados
- **Prompts** — templates reutilizáveis que o servidor fornece para guiar o comportamento do agente em tarefas específicas

O protocolo define como o cliente descobre o que o servidor oferece, como negocia as capacidades e como as chamadas são estruturadas — tudo isso de forma padronizada, independente de qual modelo ou qual serviço está envolvido.

## MCP no dia a dia — exemplos reais

:::exemplo
MCP é o USB da inteligência artificial. Antes do USB, cada periférico tinha seu próprio conector — mouse, teclado, impressora, câmera, todos diferentes. O USB padronizou tudo: um único padrão, qualquer dispositivo, qualquer computador. MCP faz o mesmo para ferramentas de IA.
:::

Servidores MCP já disponíveis e usados em produção:

- **Filesystem** — acesso a arquivos e diretórios locais
- **GitHub** — repositórios, issues, pull requests e código
- **Notion** — páginas, databases e blocos de conteúdo
- **PostgreSQL / SQLite** — consultas e manipulação de banco de dados
- **Brave Search** — busca na web em tempo real
- **n8n** — criação e execução de workflows de automação

Qualquer desenvolvedor pode criar um servidor MCP para expor qualquer sistema — a especificação é aberta e as bibliotecas estão disponíveis em Python, TypeScript e outras linguagens.

## Questões de fixação

:::questao Uma empresa tem três ferramentas de IA diferentes — Claude Desktop, Cursor e um agente customizado — e quer que todas acessem o mesmo sistema interno de documentos. Sem MCP, cada integração exigiria código customizado. Com MCP, qual é a abordagem correta?
a) Criar um servidor MCP para cada ferramenta de IA, cada um específico para o sistema de documentos
b) Usar Function Calling em cada ferramenta de IA com definições de função idênticas para o sistema
c) Criar um único servidor MCP para o sistema de documentos — todas as ferramentas de IA compatíveis se conectam a ele *
d) Migrar todas as ferramentas para Claude Desktop, que já tem integração nativa com qualquer sistema
> A alternativa C está correta. Essa é a proposta central do MCP: um servidor exposto uma única vez, qualquer cliente compatível se conecta. A empresa implementa o servidor MCP do sistema de documentos uma vez — Claude Desktop, Cursor e o agente customizado se conectam ao mesmo servidor sem nenhuma integração adicional. É exatamente a eliminação da multiplicação de integrações customizadas.
:::

:::questao Sobre os tipos de capacidade que um servidor MCP pode expor, qual das afirmações a seguir NÃO é verdadeira?
a) Tools são funções que o agente pode chamar para executar ações no sistema exposto
b) Resources são dados que o agente pode ler, como arquivos ou registros de banco de dados
c) Prompts são templates reutilizáveis fornecidos pelo servidor para guiar o agente em tarefas específicas
d) Um servidor MCP só pode expor um único tipo de capacidade por vez — Tools, Resources ou Prompts, nunca os três juntos *
> A alternativa D está incorreta — e essa é a resposta. Um servidor MCP pode expor os três tipos simultaneamente. O servidor do Notion, por exemplo, expõe Tools para criar e editar páginas, Resources para ler o conteúdo das páginas e Prompts para guiar tarefas comuns como resumir ou estruturar conteúdo. A combinação dos três tipos é o que torna um servidor MCP completo e versátil.
:::

## Atividade prática

Configure um servidor MCP simples no seu ambiente de desenvolvimento. Use o servidor **filesystem** do MCP oficial para conectar o Claude Desktop a uma pasta local de documentos. Faça pelo menos duas perguntas ao Claude que exijam leitura de arquivos da pasta e documente como o Claude usou o servidor MCP para responder.

:::importante
Print da configuração do servidor MCP no claude_desktop_config.json, prints das duas interações onde o Claude leu arquivos via MCP e uma análise de 3 linhas descrevendo o que o servidor MCP fez em cada caso.
:::

:::roteiro
Mostro ao vivo a configuração do claude_desktop_config.json com o servidor n8n-mcp — algo que uso no dia a dia. Faço uma pergunta ao Claude que aciona o servidor e mostro no log o que o cliente enviou e o servidor respondeu. A turma vê que é JSON puro, protocolo simples, sem magia. Depois mostro a lista de servidores disponíveis em github.com/modelcontextprotocol/servers — o tamanho do ecossistema já construído impressiona.
:::

## Fechamento

:::resumo
- MCP é um protocolo aberto que padroniza a conexão entre agentes de IA e ferramentas externas
- Um servidor MCP pode expor Tools, Resources e Prompts para qualquer cliente compatível
- Um servidor implementado uma vez é acessível por qualquer ferramenta MCP — sem integrações customizadas
:::
