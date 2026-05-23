
A web como conhecemos hoje e resultado de decadas de evolucao tecnica e uma filosofia de abertura que permitiu que qualquer pessoa com um navegador pudesse acessar e criar conteudo para o mundo inteiro.

Este post e um ponto de partida. Nao cobre tudo, mas organiza o essencial para quem quer entender como a web funciona antes de sair escrevendo codigo.

---

## Como a web funciona

Quando voce digita um endereco no navegador, uma serie de eventos acontece em fracoes de segundo. O navegador consulta um servidor DNS para traduzir o dominio em um endereco IP, estabelece uma conexao com o servidor via TCP/IP e faz uma requisicao HTTP. O servidor responde com um arquivo HTML, que o navegador interpreta e renderiza como pagina.

Esse ciclo de requisicao e resposta e a base de tudo na web. Entender isso antes de escrever qualquer linha de codigo muda a forma como voce pensa sobre o que esta construindo.

---

## As tres camadas do frontend

Todo projeto web frontend e composto por tres tecnologias com responsabilidades distintas.

**HTML** define a estrutura e o significado do conteudo. E uma linguagem de marcacao, nao de programacao. Um paragrafo e um paragrafo, um titulo e um titulo, um link e um link. A escolha correta das tags, o que se chama de HTML semantico, impacta acessibilidade, SEO e manutencao.

**CSS** controla a apresentacao visual: cores, tipografia, espacamento, layout e responsividade. O CSS moderno, com Flexbox e Grid, resolveu problemas de layout que por anos exigiram solucoes improvisadas.

**JavaScript** adiciona comportamento. E a unica linguagem de programacao nativa dos navegadores. Manipula o DOM, responde a eventos do usuario, faz requisicoes a APIs e atualiza a pagina sem recarregar. E o que transforma documentos estaticos em aplicacoes interativas.

---

## O que e o DOM

DOM significa *Document Object Model*. E a representacao do HTML em memoria, organizada como uma arvore de nos. Quando o JavaScript acessa uma pagina, le um valor, muda um estilo ou adiciona um elemento, esta manipulando o DOM.

Entender o DOM e entender o que acontece entre o HTML que voce escreve e o que o navegador exibe.

---

## Ferramentas basicas

Antes de qualquer framework ou ferramenta avancada, tres coisas sao suficientes para comecar.

Um **editor de codigo**. VSCode e o mais usado hoje, com suporte a extensoes, terminal integrado e excelente suporte a JavaScript e TypeScript.

Um **navegador com DevTools**. Chrome e Firefox tem ferramentas de desenvolvimento robustas: inspetor de elementos, console, monitor de rede, debugger. Aprender a usar o DevTools e tao importante quanto aprender a escrever codigo.

**Git** para controle de versao. Desde o primeiro projeto, vale versionar. Git registra o historico de mudancas, permite reverter erros e e o padrao da industria para colaboracao.

---

## HTTP e APIs

HTTP e o protocolo de comunicacao da web. Toda requisicao tem um metodo: GET para buscar dados, POST para enviar, PUT para atualizar, DELETE para remover. Toda resposta tem um status code. 200 significa sucesso, 404 recurso nao encontrado, 500 erro no servidor.

APIs REST usam esses verbos e status codes para criar interfaces de comunicacao entre sistemas. Quando um frontend busca dados de um backend ou integra um servico externo, esta fazendo requisicoes HTTP para uma API.

---

## Hosting e deploy

Escrever codigo localmente e so metade do trabalho. Publicar um projeto na web envolve escolher onde hospedar, configurar um dominio e entender o processo de deploy.

Para projetos estaticos, HTML, CSS e JavaScript sem backend, servicos como Vercel, Netlify e GitHub Pages oferecem deploy gratuito conectado a um repositorio Git. Cada push na branch principal atualiza o site automaticamente.

---

## Referencias

- [MDN Web Docs](https://developer.mozilla.org) — documentacao de referencia para HTML, CSS e JavaScript. Mantida pela Mozilla, e o recurso mais completo e confiavel disponivel.
- [web.dev](https://web.dev) — guias e boas praticas publicados pela equipe do Chrome. Cobre performance, acessibilidade, SEO e muito mais.
- [The Odin Project](https://www.theodinproject.com) — curriculo open source de desenvolvimento web, do zero ao emprego. Baseado em projetos e gratuito.
- [CS50W](https://cs50.harvard.edu/web) — curso gratuito de Harvard. Cobre HTML, CSS, JavaScript, Git, SQL e Django.
- [W3C](https://www.w3.org) — organizacao que mantem os padroes da web.