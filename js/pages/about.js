import config from '../config.js';
import ui from '../ui.js';

function about() {
  ui.setContent(`
    <div class="page-header">
      <h1>${config.website.name}</h1>
    </div>
    <p>Zero dependências. Zero frameworks. Arquitetura vanilla com HTML, CSS e JavaScript — conteúdo técnico sobre desenvolvimento front-end com foco em fundamentos, performance e boas práticas.</p>
    <p>Desenvolvido por ${config.website.author}.</p>
    <p>${config.website.description}</p>
  `);
}

export default about;