import ui from '../ui.js';

function legal() {
  ui.setContent(`
    <div class="page-header">
      <h1>Legal</h1>
    </div>
    <p>Todo o conteúdo deste website é de responsabilidade do autor. As opiniões expressas são pessoais.</p>
    <h2>Privacidade</h2>
    <p>Este site não coleta dados pessoais, não utiliza cookies e não rastreia usuários.</p>
    <h2>Conteúdo</h2>
    <p>Os textos publicados podem ser reproduzidos com atribuição ao autor original.</p>
  `);
}

export default legal;