// config.js
// Configuração central do blog. Edite aqui para personalizar.

// ─── BASE URL ─────────────────────────────────────────────

const BASE = location.hostname === '127.0.0.1' || location.hostname === 'localhost'
  ? ''
  : '/lab';

// ─── CONFIG ───────────────────────────────────────────────

const CONFIG = {
  siteName:  "grcodev/lab",
  author:    "Guilherme Ribeiro",
  email:     "topverbs@gmail.com",
  github:    "https://github.com/grcodev",
  linkedin:  "https://linkedin.com/in/gribeirodev",
  icon:      `${BASE}/lab_icon.png`,

  products: [
    {
      icon:  "💬",
      title: "Dúvidas/Suporte",
      slug:  "support",
    },   
  ],
};