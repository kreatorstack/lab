const routes = {};

function register(path, handler) {
  routes[path] = handler;
}

function resolve() {
  const hash = window.location.hash || '#/';
  const path = hash.slice(1) || '/';

  // rota dinâmica: /p/:slug
  if (path.startsWith('/p/')) {
    const slug = path.replace('/p/', '');
    if (routes['/p/:slug']) {
      routes['/p/:slug'](slug);
      return;
    }
  }

  const handler = routes[path] || routes['/404'];
  if (handler) handler();
}

function init() {
  window.addEventListener('hashchange', resolve);
  resolve();
}

function navigate(path) {
  window.location.hash = path;
}

export default { register, init, navigate };