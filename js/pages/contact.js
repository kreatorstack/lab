import ui from '../ui.js';

function contact() {
  ui.setContent(`
    <div class="page-header">
      <h1>Contato</h1>
    </div>
    <ul class="contact-links">
      <li><a href="mailto:topverbs@gmail.com" target="_blank">topverbs@gmail.com</a></li>
      <li><a href="https://linkedin.com/in/gribeirodev" target="_blank">linkedin</a></li>
      <li><a href="https://github.com/grcodev" target="_blank">github</a></li>
      <li><a href="https://instagram.com/front.stack" target="_blank">instagram</a></li>
    </ul>
  `);
}

export default contact;