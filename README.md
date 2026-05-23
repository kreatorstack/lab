# blog

Blog estático com SPA em JavaScript puro.

- Roteamento via hash (`#/`)
- Posts em Markdown renderizados com [Marked.js](https://marked.js.org/)
- Zero frameworks, zero build step
- Deploy direto no GitHub Pages

## estrutura

```
index.html
404.html
css/
  styles.css
  queries.css
js/
  config.js
  router.js
  ui.js
  app.js
  pages/
    home.js
    about.js
    contact.js
    legal.js
    404.js
data/
  articles.json
articles/
  intro.md
```

## novo post

1. Crie `articles/slug-do-post.md`
2. Adicione entrada em `data/articles.json`
3. `git add . && git commit -m "post: título" && git push`

Veja `DEPLOY.md` para instruções de deploy.