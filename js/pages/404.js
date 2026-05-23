import ui from '../ui.js';

function notFound() {
  ui.setContent(`
    <div class="not-found">
      <h1>404</h1>
      <p>Página não encontrada.</p>
      <a href="#/">← voltar ao início</a>
    </div>
  `);
}

export default notFound;