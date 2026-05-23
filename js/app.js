import config from './config.js';
import router from './router.js';
import ui from './ui.js';
import home from './pages/home.js';
import about from './pages/about.js';
import contact from './pages/contact.js';
import legal from './pages/legal.js';
import notFound from './pages/404.js';

async function renderPost(slug) {
  try {
    const res = await fetch(config.paths.posts);
    const posts = await res.json();
    const post = posts.find(post => post.slug === slug);

    if (!post) {
      notFound();
      return;
    }

    const mdRes = await fetch(`${config.paths.postsDir}${post.file}`);
    const md = await mdRes.text();
    const html = marked.parse(md);

    const tags = Array.isArray(post.tag) ? post.tag : (post.tag ? [post.tag] : []);
    const tagHtml = tags.length ? ' · ' + tags.join(', ') : '';

    ui.setContent(`
      <a class="back-link" href="#/">← voltar</a>
      <article>
        <header class="post-header">
          <h1>${post.title}</h1>
          <p class="post-meta">${post.date}${tagHtml}</p>
        </header>
        <div class="post-body">${html}</div>
      </article>
    `);
  } catch (e) {
    ui.setContent('<p>Erro ao carregar post.</p>');
  }
}

function init() {
  ui.renderNavbar();
  ui.renderFooter();

  router.register('/', home);
  router.register('/about', about);
  router.register('/contact', contact);
  router.register('/legal', legal);
  router.register('/404', notFound);
  router.register('/p/:slug', renderPost);

  router.init();
}

init();