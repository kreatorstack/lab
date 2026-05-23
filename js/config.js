const config = {
  website: {
    name: 'FRONTLAB',
    description: 'Um blog totalmente Front-end.',
    author: 'Guilherme Ribeiro',
    year: new Date().getFullYear(),
  },
  paths: {
    posts: './data/content.json',
    postsDir: './content/',
  },
  nav: [
    { label: 'home', href: '#/' },
    { label: 'sobre', href: '#/about' },
    { label: 'contato', href: '#/contact' },
  ],
};

export default config;