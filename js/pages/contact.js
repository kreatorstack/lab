import ui from '../ui.js';

function contact() {
  ui.setContent(`
    <div class="page-header">
      <h1>Contato</h1>
    </div>
    <ul class="contact-links">
      <li><a href="mailto:topverbs@gmail.com" target="_blank">topverbs@gmail.com</a></li>
      <li><a href="https://linkedin.com/in/grfront" target="_blank">linkedin.com/in/grfront</a></li>
      <li><a href="https://github.com/grfront" target="_blank">github.com/grfront</a></li>
      <li><a href="https://instagram.com/front.stack" target="_blank">instagram.com/front.stack</a></li>
    </ul>
  `);
}

export default contact;