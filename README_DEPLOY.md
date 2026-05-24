# FRONTLAB — Tutorial Completo

> Website/Blog estático com SPA (Single Page Application) em JavaScript puro, sem frameworks, sem build step. Deploy direto no GitHub Pages.

---

## O que você vai construir

Um blog/website pessoal completo com:

- Roteamento client-side via hash (`#/rota`)
- Posts escritos em Markdown, renderizados no browser
- Busca/filtro de posts em tempo real
- Páginas: Home, Sobre, Contato, Legal e 404
- Zero dependências de framework — HTML, CSS e JS puro
- Deploy automático e gratuito no GitHub Pages

---

## Pré-requisitos

Você não precisa instalar nada. Só precisa de:

- Uma conta no [GitHub](https://github.com)
- Um editor de texto (VS Code, Notepad++, ou qualquer um)
- Acesso ao [Claude.ai](https://claude.ai) para gerar os arquivos

---

## Estrutura do projeto

Antes de começar, entenda como o projeto está organizado:

```
meu-blog/
│
├── index.html              ← Página principal (ponto de entrada)
├── 404.html                ← Redireciona rotas para o SPA
│
├── css/
│   ├── styles.css          ← Estilos globais
│   └── queries.css         ← Media queries (responsividade)
│
├── js/
│   ├── app.js              ← Inicializa tudo, registra rotas
│   ├── config.js           ← Nome do site, nav, caminhos
│   ├── router.js           ← Sistema de roteamento por hash
│   ├── ui.js               ← Navbar, footer, injeção de conteúdo
│   └── pages/
│       ├── home.js         ← Página inicial (lista de posts + busca)
│       ├── about.js        ← Página "Sobre"
│       ├── contact.js      ← Página de contato
│       ├── legal.js        ← Privacidade e termos
│       └── 404.js          ← Página de erro 404
│
├── data/
│   └── content.json        ← Índice de todos os posts
│
├── content/
│   └── meu-post.md         ← Arquivos Markdown dos posts
│
└── assets/
    └── icon.png            ← Ícone/logo do site
```

**Como tudo se conecta:**

```
index.html
  └─ carrega app.js
       ├─ lê config.js       (nome, nav, paths)
       ├─ usa router.js      (mapeia #/rota → página)
       ├─ usa ui.js          (renderiza navbar e footer)
       └─ chama páginas      (home, about, contact, legal, 404)
            └─ home.js busca content.json → lista posts
                 └─ ao clicar: busca o .md → renderiza com marked.js
```

---

## Passo 1 — Criar o repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique em **New** (botão verde no canto superior esquerdo)
3. Preencha:
   - **Repository name:** `lab` (ou o nome que preferir — vai aparecer na URL)
   - **Description:** opcional
   - Marque **Public**
   - Marque **Add a README file**
4. Clique em **Create repository**

> O nome do repositório vira parte da URL: `https://seuusuario.github.io/lab`

---

## Passo 2 — Gerar os arquivos com o Claude.ai

Abra o [Claude.ai](https://claude.ai) e use os prompts abaixo para gerar cada arquivo. Cole o resultado diretamente no seu editor.

### 2.1 — `index.html`

**Prompt para o Claude:**

> Crie um arquivo `index.html` para um blog SPA em JavaScript puro. Ele deve:
> - Ter `<div id="navbar"></div>`, `<main id="app"></main>` e `<div id="footer"></div>`
> - Carregar `css/styles.css` e `css/queries.css`
> - Carregar `https://cdn.jsdelivr.net/npm/marked/marked.min.js` via CDN
> - Carregar `js/app.js` com `type="module"`
> - Título da página: MEU BLOG
> - lang="pt-BR"

### 2.2 — `404.html`

**Prompt para o Claude:**

> Crie um arquivo `404.html` que redireciona qualquer rota não encontrada de volta para o SPA. O repositório GitHub Pages se chama `lab`. O script deve pegar `window.location.pathname`, remover o prefixo `/lab`, e redirecionar para `window.location.origin + '/lab/#' + path`.

### 2.3 — `js/config.js`

**Prompt para o Claude:**

> Crie `js/config.js` com um objeto `config` exportado como default contendo:
> - `website.name`: "MEU BLOG"
> - `website.description`: "Minha descrição aqui."
> - `website.author`: "Seu Nome"
> - `website.year`: `new Date().getFullYear()`
> - `paths.posts`: `'./data/content.json'`
> - `paths.postsDir`: `'./content/'`
> - `nav`: array com links para home (`#/`), sobre (`#/about`) e contato (`#/contact`)

### 2.4 — `js/router.js`

**Prompt para o Claude:**

> Crie `js/router.js` com um sistema de roteamento via hash. Ele deve:
> - Ter funções: `register(path, handler)`, `resolve()`, `init()`, `navigate(path)`
> - Suportar rota dinâmica `/p/:slug` que extrai o slug e chama o handler com ele
> - Escutar `hashchange` e resolver na inicialização
> - Exportar as funções como default object

### 2.5 — `js/ui.js`

**Prompt para o Claude:**

> Crie `js/ui.js` que importa `config.js` e exporta as funções:
> - `renderNavbar()`: injeta nav com logo (img `assets/icon.png`) e links do `config.nav` no `#navbar`
> - `setActiveLink()`: marca o link ativo com classe `active` baseado no hash atual
> - `renderFooter()`: injeta `© ano · link para #/legal` no `#footer`
> - `setContent(html)`: define o innerHTML do `#app`
> - Escuta `hashchange` para atualizar o link ativo

### 2.6 — `js/app.js`

**Prompt para o Claude:**

> Crie `js/app.js` que importa config, router, ui e todas as páginas (home, about, contact, legal, notFound de `./pages/404.js`). Deve:
> - Ter função `renderPost(slug)` que busca `content.json`, acha o post pelo slug, busca o `.md` de `config.paths.postsDir`, renderiza com `marked.parse()` e injeta via `ui.setContent()` com título, data, tags e link de voltar
> - Ter função `init()` que renderiza navbar e footer, registra as rotas e chama `router.init()`
> - Chamar `init()` no final

### 2.7 — Páginas (`js/pages/`)

**Prompt para `home.js`:**

> Crie `js/pages/home.js` que importa config e ui. A função `home()` deve:
> - Buscar `config.paths.posts` (content.json)
> - Ordenar por data decrescente
> - Renderizar um campo de busca e uma lista `<ul class="post-list">` com data, tags, título (link para `#/p/slug`) e excerpt de cada post
> - Adicionar event listener no input para filtrar em tempo real por título, excerpt e tags
> - Exportar como default

**Prompt para `about.js`:**

> Crie `js/pages/about.js` que importa config e ui. A função `about()` usa `ui.setContent()` para mostrar o nome do site, uma descrição do blog e `config.website.description`. Exportar como default.

**Prompt para `contact.js`:**

> Crie `js/pages/contact.js` que importa ui. A função `contact()` mostra título "Contato" e uma lista de links: email, LinkedIn, GitHub e Instagram. Substitua pelos seus dados. Exportar como default.

**Prompt para `legal.js`:**

> Crie `js/pages/legal.js` que importa ui. A função `legal()` mostra título "Privacidade e Termos" com dois parágrafos: um sobre ausência de coleta de dados e cookies, outro sobre reprodução de conteúdo com atribuição. Exportar como default.

**Prompt para `404.js`:**

> Crie `js/pages/404.js` que importa ui. A função `notFound()` mostra um `<div class="not-found">` com h1 "404", parágrafo "Página não encontrada." e link de voltar ao início. Exportar como default.

### 2.8 — CSS

**Prompt para `css/styles.css`:**

> Crie um `styles.css` minimalista para um blog técnico em dark mode. Inclua estilos para: reset básico, variáveis CSS (cores, fontes, espaçamentos), nav com logo e links, `.post-list` e `.post-item`, `.post-title`, `.post-date`, `.post-tag`, `.post-excerpt`, `.post-header`, `.post-body` com tipografia para markdown, `.post-meta`, `.back-link`, `.search-wrap` e `.search-input`, `.contact-links`, `.not-found`, `.page-header`, e footer. Use fonte monospace ou sans-serif limpa.

**Prompt para `css/queries.css`:**

> Crie um `queries.css` com media queries para tornar o blog responsivo em mobile. Ajuste padding, tamanho de fontes e layout da navbar para telas menores que 768px.

---

## Passo 3 — Criar o arquivo de índice dos posts

Crie o arquivo `data/content.json`. Este é o **índice central** de todos os seus posts:

```json
[
  {
    "slug": "meu-primeiro-post",
    "title": "Meu Primeiro Post",
    "date": "2025-01-15",
    "tag": ["html", "css"],
    "excerpt": "Uma breve descrição do que este post aborda.",
    "file": "meu-primeiro-post.md"
  }
]
```

**Campos explicados:**

| Campo | Tipo | Descrição |
|---|---|---|
| `slug` | string | Identificador único na URL (`#/p/slug`) |
| `title` | string | Título exibido na listagem e no post |
| `date` | string | Data no formato `YYYY-MM-DD` |
| `tag` | string ou array | Tag(s) do post |
| `excerpt` | string | Resumo exibido na listagem |
| `file` | string | Nome do arquivo `.md` dentro de `content/` |

---

## Passo 4 — Escrever seus posts em Markdown

Crie o arquivo `content/meu-primeiro-post.md`:

```markdown
# Meu Primeiro Post

Bem-vindo ao meu blog! Este é o primeiro post.

## Subtítulo

Texto normal com **negrito** e *itálico*.

- Item 1
- Item 2
- Item 3

```javascript
// Bloco de código com syntax highlight via CSS
const ola = "mundo";
```

> Citação em bloco
```

O arquivo `.md` é o conteúdo completo do post. O título do `content.json` e o `<h1>` do markdown podem ser diferentes — use como quiser.

---

## Passo 5 — Adicionar um ícone

Coloque um arquivo `assets/icon.png` — pode ser seu logo, avatar ou qualquer imagem quadrada. Tamanho recomendado: 64×64 ou 128×128 px.

Se não tiver um, peça ao Claude:

> Gere um SVG simples de ícone/logo para um blog de desenvolvimento frontend. Use cores escuras com texto "LAB". Exporte como código SVG.

Salve como `assets/icon.png` (ou ajuste a extensão em `ui.js` e `index.html`).

---

## Passo 6 — Subir os arquivos no GitHub

### Opção A — Pelo site do GitHub (mais fácil)

1. Abra seu repositório em `github.com/seuusuario/lab`
2. Clique em **Add file → Upload files**
3. Arraste todos os arquivos e pastas criados
4. Clique em **Commit changes**

> Para subir pastas, crie os arquivos dentro delas: clique em **Add file → Create new file**, digite o caminho completo como `js/app.js`, cole o conteúdo e salve.

### Opção B — Via Git (para quem usa terminal)

```bash
# Clone o repositório
git clone https://github.com/seuusuario/lab.git
cd lab

# Copie todos os arquivos do projeto para a pasta
# ... cole seus arquivos aqui ...

# Suba tudo
git add .
git commit -m "feat: primeiro deploy do blog"
git push
```

---

## Passo 7 — Ativar o GitHub Pages

1. No seu repositório, clique em **Settings**
2. No menu lateral, clique em **Pages**
3. Em **Branch**, selecione `main` e pasta `/ (root)`
4. Clique em **Save**

Aguarde 1-2 minutos. Seu site estará disponível em:

```
https://seuusuario.github.io/lab
```

---

## Passo 8 — Publicar um novo post

Adicionar posts futuros é simples:

1. **Crie** `content/slug-do-novo-post.md` com o conteúdo em Markdown
2. **Adicione** a entrada no `data/content.json`:
   ```json
   {
     "slug": "slug-do-novo-post",
     "title": "Título do Novo Post",
     "date": "2025-02-01",
     "tag": ["javascript"],
     "excerpt": "Resumo do post.",
     "file": "slug-do-novo-post.md"
   }
   ```
3. **Suba** para o GitHub:
   ```bash
   git add .
   git commit -m "post: título do novo post"
   git push
   ```

O site atualiza automaticamente em segundos.

---

## Como o roteamento funciona

Este projeto usa **hash routing** — toda navegação acontece após o `#` na URL:

```
https://seuusuario.github.io/lab/#/         → home.js
https://seuusuario.github.io/lab/#/about    → about.js
https://seuusuario.github.io/lab/#/p/slug   → renderPost("slug") em app.js
```

O `404.html` existe por causa do GitHub Pages: quando alguém acessa uma URL diretamente (ex: `/lab/about`), o servidor não encontra o arquivo e retorna o `404.html`. Este arquivo detecta o caminho e redireciona para a URL correta com hash, fazendo o SPA funcionar normalmente.

---

## Personalizações comuns

### Mudar nome e descrição do site

Edite `js/config.js`:

```javascript
website: {
  name: 'MEU BLOG',
  description: 'Sua descrição aqui.',
  author: 'Seu Nome',
},
```

### Adicionar item na navbar

Em `js/config.js`, adicione ao array `nav`:

```javascript
nav: [
  { label: 'home', href: '#/' },
  { label: 'sobre', href: '#/about' },
  { label: 'projetos', href: '#/projects' },  // nova página
  { label: 'contato', href: '#/contact' },
],
```

Depois crie `js/pages/projects.js` e registre a rota em `js/app.js`:

```javascript
import projects from './pages/projects.js';
// ...
router.register('/projects', projects);
```

### Adicionar múltiplas tags a um post

No `content.json`, use um array:

```json
"tag": ["css", "performance", "web"]
```

---

## Problemas comuns

**O site abre mas está em branco**
→ Verifique o console do browser (F12). Provavelmente um erro de caminho em `config.js` ou um arquivo faltando.

**Posts não carregam**
→ Confirme que `data/content.json` existe e está com JSON válido. Use [jsonlint.com](https://jsonlint.com) para validar.

**O 404 não redireciona corretamente**
→ Verifique se o nome do repositório em `404.html` está correto:
```javascript
const repo = '/lab'; // deve ser o nome exato do seu repositório
```

**CSS não aplica**
→ O GitHub Pages é case-sensitive. `Styles.css` e `styles.css` são arquivos diferentes. Verifique se os nomes batem exatamente.

**Imagens não aparecem**
→ Use caminhos relativos sem `/` no início: `assets/icon.png`, não `/assets/icon.png`.

---

## Tecnologias usadas

| Tecnologia | Função |
|---|---|
| HTML5 | Estrutura da página |
| CSS3 | Estilização e responsividade |
| JavaScript (ES Modules) | Roteamento, lógica e renderização |
| [Marked.js](https://marked.js.org/) | Parser de Markdown para HTML |
| GitHub Pages | Hospedagem gratuita |

---

## Licença

Conteúdo de uso livre. Atribuição ao autor original é bem-vinda.
