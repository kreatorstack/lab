Um roteiro progressivo para quem está começando ou reorganizando o aprendizado de desenvolvimento frontend. A ordem importa: cada etapa prepara o terreno para a próxima.

---

## 1. Lógica e programação

Antes de qualquer linguagem ou framework, o que sustenta tudo é raciocínio lógico. Não é necessário um curso específico só para isso, mas vale dedicar tempo antes de avançar.

O que desenvolver nessa etapa:

- Variáveis, tipos de dados e operadores
- Estruturas de controle: condicionais (`if`, `else`, `switch`) e loops (`for`, `while`)
- Funções: parâmetros, retorno, escopo
- Estruturas de dados básicas: arrays e objetos
- Algoritmos simples: ordenação, busca, transformação de listas

Qualquer linguagem serve para aprender lógica. JavaScript já funciona aqui, o que evita trocar de contexto mais tarde.

---

## 2. Fundamentos da web

Entender como a web funciona antes de escrever código muda a forma como você pensa sobre o que está construindo.

**HTTP** é o protocolo de comunicação da web. Toda interação entre navegador e servidor é uma requisição com um método (GET, POST, PUT, DELETE) e uma resposta com um status code (200, 404, 500). Esse modelo é a base de tudo.

**DNS** traduz domínios em endereços IP. Quando você acessa um site, o navegador consulta um servidor DNS antes de fazer qualquer requisição.

**Navegador** interpreta HTML, aplica CSS e executa JavaScript. Entender o ciclo de renderização, o que é o DOM e como o navegador processa recursos é conhecimento que vai aparecer em problemas de performance e debugging mais tarde.

---

## 3. HTML e CSS

As duas linguagens que definem estrutura e aparência de tudo que é exibido no navegador.

**HTML** é marcação semântica. A escolha correta das tags afeta acessibilidade e SEO. Os elementos estruturais como `<header>`, `<main>`, `<section>` e `<article>` têm significado além da apresentação visual.

**CSS** controla a apresentação. Os conceitos fundamentais:

- O modelo de caixa: `content`, `padding`, `border`, `margin`
- Especificidade e cascata: como o CSS decide qual regra prevalece
- Flexbox: layout unidimensional, alinhamento e distribuição de elementos
- Grid: layout bidimensional, estruturas de página mais complexas
- Responsividade com `@media`: adaptar o layout a diferentes tamanhos de tela
- Variáveis CSS (`--custom-property`): reutilização de valores e temas

---

## 4. JavaScript

A única linguagem de programação nativa dos navegadores. O fundamento mais importante do frontend.

**Base da linguagem**

- Tipos primitivos e objetos
- Funções, arrow functions e escopo
- Closures e o que elas resolvem
- Prototype chain e herança
- `this` e seus contextos

**Manipulação do DOM**

- Selecionar elementos: `querySelector`, `getElementById`
- Modificar conteúdo, atributos e estilos via JavaScript
- Criar e remover elementos dinamicamente
- Eventos: `addEventListener`, propagação, delegação

**Assíncrono**

- O event loop e por que JavaScript é single-threaded
- Callbacks e seus problemas
- Promises: `.then()`, `.catch()`, encadeamento
- `async/await`: escrita de código assíncrono com aparência síncrona
- `fetch`: requisições HTTP nativas do navegador

**Módulos ES6**

- `import` e `export`: organização do código em arquivos com escopo isolado
- Named exports e default exports
- Como o sistema de módulos funciona no navegador e no Node.js

---

## 5. TypeScript

TypeScript adiciona tipagem estática ao JavaScript. É um superset: todo JavaScript válido também é TypeScript válido. O compilador identifica erros antes da execução e os editores oferecem autocompletar preciso.

O que aprender:

- Tipos básicos: `string`, `number`, `boolean`, `null`, `undefined`, `unknown`, `never`
- Interfaces e type aliases
- Generics: funções e componentes que funcionam com tipos variáveis
- Union types e intersection types
- Utility types: `Partial`, `Required`, `Pick`, `Omit`, `Record`
- Configuração do `tsconfig.json`

TypeScript é hoje o padrão em projetos de médio e grande porte. Aprender cedo evita reaprender depois.

---

## 6. Git e workflow de versionamento

Git é o padrão da indústria para controle de versão. Não é opcional.

**Conceitos essenciais**

- Repositório, commits, branches e merges
- `git init`, `git clone`, `git add`, `git commit`, `git push`, `git pull`
- `.gitignore`: arquivos que não devem ser versionados
- `git log`, `git diff`, `git status`

**Workflow com branches**

A prática mais comum em times é o Git Flow simplificado: uma branch `main` estável, branches de feature criadas a partir dela e pull requests para revisão antes do merge.

- `git checkout -b feature/nome`
- Commits atômicos com mensagens descritivas
- Rebase vs. merge: quando usar cada um
- Resolução de conflitos

**GitHub**

- Repositórios remotos e colaboração
- Pull Requests: abertura, revisão e merge
- Issues para rastreamento de tarefas
- Actions: automação de testes e deploy disparada por eventos no repositório

---

## 7. SPAs e roteamento no cliente

Uma SPA (Single Page Application) carrega uma única página HTML e atualiza o conteúdo dinamicamente via JavaScript, sem recarregar o navegador a cada navegação.

**Como o roteamento funciona**

O roteamento no cliente intercepta a navegação e renderiza o componente correspondente sem fazer uma nova requisição ao servidor. Isso é feito via History API do navegador (`pushState`, `replaceState`) ou via hash na URL.

**Conceitos a entender**

- Diferença entre roteamento no servidor e no cliente
- Rotas dinâmicas: `/usuario/:id`
- Rotas aninhadas e layouts compartilhados
- Lazy loading de rotas: carregar o código de uma rota só quando ela é acessada
- Redirecionamentos e rotas protegidas (guards)

Os principais roteadores do ecossistema atual são React Router, TanStack Router (para React) e Vue Router. O funcionamento interno é similar entre eles.

---

## 8. APIs e REST

O frontend raramente existe isolado. Quase sempre consome dados de uma API.

**O que é REST**

REST (Representational State Transfer) é um estilo arquitetural que usa os verbos HTTP para operações em recursos. Um recurso é identificado por uma URL e as operações seguem a convenção:

| Método | Ação |
|---|---|
| GET | Buscar um ou mais recursos |
| POST | Criar um novo recurso |
| PUT / PATCH | Atualizar um recurso existente |
| DELETE | Remover um recurso |

**Consumo de APIs no frontend**

- `fetch` nativo: requisições, headers, body, tratamento de erros
- `axios`: alternativa com mais recursos e interceptors
- Autenticação: envio de tokens via header `Authorization: Bearer <token>`
- Tratamento de erros de rede e erros da API (status 4xx e 5xx)
- CORS: por que existe e como o servidor precisa configurar

**JSON**

O formato de troca de dados padrão na web. `JSON.stringify()` converte objetos para string, `JSON.parse()` faz o caminho inverso. Entender a estrutura de objetos e arrays aninhados é essencial para trabalhar com respostas de API.

---

## 9. Deploy

Escrever código localmente é metade do trabalho. Publicar é o que torna o projeto real.

**GitHub Pages**

Hospedagem gratuita diretamente de um repositório GitHub. Ideal para sites estáticos, portfólios e projetos de estudo. Basta ativar nas configurações do repositório e apontar para a branch ou pasta de saída do build.

**Netlify**

Plataforma de deploy contínuo para projetos estáticos e JAMstack. Conecta ao repositório Git e dispara um novo deploy a cada push. Suporta funções serverless, redirects, formulários e variáveis de ambiente. O plano gratuito é generoso para projetos pessoais.

**Vercel**

Criada pela equipe do Next.js, é a plataforma mais integrada ao ecossistema React. Deploy contínuo, preview de pull requests, Edge Functions e excelente suporte a frameworks modernos. Também funciona com Vue, Svelte e projetos estáticos.

**Cloudflare Pages**

Alternativa ao Vercel e ao Netlify com infraestrutura global da Cloudflare. Sem limites de banda no plano gratuito, integrado ao ecossistema Cloudflare (Workers, KV, R2). Bom para projetos que já usam ou pretendem usar outros serviços da Cloudflare.

**Variáveis de ambiente**

Nunca commitar chaves de API ou segredos no repositório. Todas as plataformas acima suportam variáveis de ambiente configuradas no painel, acessíveis durante o build e em runtime.

---

## 10. Cloudflare Workers e ecossistema edge

Cloudflare Workers permite executar JavaScript na borda da rede da Cloudflare, em mais de 300 pontos de presença ao redor do mundo. O código roda perto do usuário, com latência mínima.

**Workers**

O modelo de execução é baseado em Service Workers. Cada Worker recebe um objeto `Request` e retorna um objeto `Response`. A API é similar ao `fetch` padrão, o que torna a curva de aprendizado menor para quem já conhece JavaScript no navegador.

Casos de uso comuns:

- Proxies e redirecionamentos
- Transformação de respostas em tempo real
- Autenticação e autorização na borda
- APIs leves sem servidor dedicado

**KV (Key-Value Storage)**

Armazenamento chave-valor distribuído, acessível dentro dos Workers. Ideal para cache, configurações, sessões e dados que precisam de leitura rápida em qualquer região. A consistência é eventual, o que significa que escritas podem demorar alguns segundos para se propagar globalmente.

**Sistema de autenticação com Workers e KV**

Um padrão comum é construir autenticação diretamente na borda:

1. O usuário envia credenciais para um Worker
2. O Worker valida, gera um token (JWT ou token opaco) e armazena no KV com TTL definido
3. Requisições subsequentes passam pelo Worker, que valida o token no KV antes de encaminhar ao serviço de destino
4. O logout invalida o token no KV

Esse modelo dispensa um servidor de autenticação dedicado e funciona globalmente sem configuração adicional de infraestrutura.

**D1 (banco de dados SQL)**

Banco de dados SQLite distribuído da Cloudflare, acessível nos Workers. Para projetos que precisam de dados relacionais sem gerenciar um servidor de banco de dados.

**R2 (armazenamento de objetos)**

Equivalente ao S3 da AWS, sem custo de egresso. Para armazenamento de arquivos, imagens e assets acessíveis pelos Workers.

---

## Ordem sugerida de aprendizado

1. Lógica e programação básica
2. Fundamentos da web (HTTP, DNS, navegador)
3. HTML e CSS
4. JavaScript — dedique tempo aqui, é o alicerce de tudo
5. Git e GitHub
6. TypeScript
7. SPAs e roteamento
8. APIs e REST
9. Deploy com GitHub Pages ou Netlify
10. Cloudflare Workers, KV e ecossistema edge

Não é necessário dominar completamente cada etapa para avançar. O aprendizado é iterativo: você vai voltar para consolidar conceitos à medida que encontra problemas reais.