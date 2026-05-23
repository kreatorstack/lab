import config from '../config.js';
import ui from '../ui.js';

function about() {
  ui.setContent(`
    <div class="page-header">
      <h1>${config.website.name}</h1>
    </div>
    <p>Este é o ${config.website.name}, mantido por ${config.website.author}.</p>
    <p>${config.website.description}</p>
  `);
}

export default about;