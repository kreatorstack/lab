import config from '../config.js';
import ui from '../ui.js';

function about() {
  ui.setContent(`
    <div class="page-header">
      <h1>${config.website.name}</h1>
    </div>
    <p>Guias & Projetos para Desenvolvedores. Front-end com HTML, CSS e JavaScript — conteúdo técnico sobre desenvolvimento front-end com foco em fundamentos, performance e boas práticas.</p>
    <p>${config.website.description}</p>
  `);
}

export default about;