import config from '../config.js';
import ui from '../ui.js';

function renderList(posts) {
  if (posts.length === 0) {
    return '<p style="color:var(--muted)">nenhum resultado.</p>';
  }
  return `
    <ul class="post-list">
      ${posts.map(post => {
        const tags = Array.isArray(post.tag) ? post.tag : (post.tag ? [post.tag] : []);
        const tagHtml = tags.length
          ? ' · ' + tags.map(t => `<span class="post-tag">${t}</span>`).join(' ')
          : '';
        return `
        <li class="post-item">
          <p class="post-date">${post.date}${tagHtml}</p>
          <h2 class="post-title"><a href="#/p/${post.slug}">${post.title}</a></h2>
          ${post.excerpt ? `<p class="post-excerpt">${post.excerpt}</p>` : ''}
        </li>
      `;
      }).join('')}
    </ul>
  `;
}

async function home() {
  try {
    const res = await fetch(config.paths.posts);
    const posts = await res.json();

    const sorted = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    ui.setContent(`
      <div class="search-wrap">
        <input
          type="text"
          id="search-input"
          class="search-input"
          placeholder="🔍 Pesquisar"
          autocomplete="off"
        />
      </div>
      <div id="post-list-wrap">${renderList(sorted)}</div>
    `);

    document.getElementById('search-input').addEventListener('input', e => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        document.getElementById('post-list-wrap').innerHTML = renderList(sorted);
        return;
      }
      const filtered = sorted.filter(post => {
        const tags = Array.isArray(post.tag) ? post.tag : (post.tag ? [post.tag] : []);
        return (
          post.title.toLowerCase().includes(q) ||
          (post.excerpt && post.excerpt.toLowerCase().includes(q)) ||
          tags.some(t => t.toLowerCase().includes(q))
        );
      });
      document.getElementById('post-list-wrap').innerHTML = renderList(filtered);
    });

  } catch (e) {
    ui.setContent('<p>Erro ao carregar posts.</p>');
  }
}

export default home;