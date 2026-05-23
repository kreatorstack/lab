
Toda pagina que voce acessa no navegador e construida sobre duas linguagens: HTML e CSS. Elas trabalham juntas, mas fazem coisas completamente diferentes. Entender essa separacao e o primeiro passo para aprender desenvolvimento web.

---

## HTML: a estrutura

HTML significa *HyperText Markup Language*. E a linguagem que define o que existe na pagina, ou seja, o conteudo e sua organizacao.

Um documento HTML e formado por **elementos**. Cada elemento tem uma tag de abertura e uma de fechamento, como `<p>` para abrir e `</p>` para fechar um paragrafo. O conteudo fica entre as duas tags.

Os elementos se organizam de forma hierarquica, um dentro do outro. Todo documento HTML comeca com a declaracao `<!DOCTYPE html>`, seguida do elemento `<html>` que envolve tudo. Dentro dele, o `<head>` guarda informacoes que o usuario nao ve diretamente, como o titulo que aparece na aba do navegador. O `<body>` e onde o conteudo visivel vive: textos, imagens, botoes, listas, links.

Alguns elementos que voce vai usar o tempo todo:

| Elemento | Para que serve |
|---|---|
| `<h1>` a `<h6>` | Titulos e subtitulos |
| `<p>` | Paragrafos |
| `<a>` | Links |
| `<img>` | Imagens |
| `<ul>` e `<li>` | Listas |
| `<div>` | Agrupador generico |

---

## CSS: a aparencia

CSS significa *Cascading Style Sheets*. E a linguagem que define como os elementos HTML vao aparecer visualmente: cor, tamanho, espacamento, posicao, fonte.

Uma regra CSS tem sempre a mesma forma: um **seletor** que aponta qual elemento voce quer estilizar, seguido de um bloco com pares de **propriedade** e **valor**. Por exemplo, para estilizar todos os paragrafos da pagina voce escreve `p` como seletor, e dentro das chaves define as propriedades, como `color` para a cor do texto e `font-size` para o tamanho.

Para conectar o CSS ao HTML, voce cria um arquivo `.css` separado e o referencia dentro do `<head>` com a tag `<link>`. Manter os dois em arquivos distintos e uma boa pratica: o HTML cuida do conteudo, o CSS cuida da apresentacao. Se voce precisar mudar a cor de todos os titulos do site, voce mexe num unico lugar, sem tocar no conteudo.

---

## Seletores: como o CSS encontra os elementos

Alem de selecionar por tag, como `p`, `h1` ou `div`, o CSS permite selecionar elementos por **classe** e por **id**.

Uma classe pode ser aplicada a varios elementos. Voce a define no HTML com o atributo `class="nome"` e no CSS usando um ponto na frente: `.nome`. Um id e unico na pagina e deve identificar um elemento especifico. No HTML voce usa `id="nome"` e no CSS o `#` na frente: `#nome`.

A diferenca pratica e essa: classes sao para grupos de elementos que compartilham um estilo, ids sao para elementos unicos como o cabecalho ou o rodape da pagina.

---

## O modelo de caixa

Todo elemento HTML e tratado pelo CSS como uma caixa retangular. Essa caixa tem quatro camadas que se acumulam de dentro para fora:

1. **content** — o conteudo em si, o texto ou a imagem
2. **padding** — o espaco interno entre o conteudo e a borda
3. **border** — a borda ao redor do elemento
4. **margin** — o espaco externo, entre esse elemento e os vizinhos

Voce controla cada uma dessas camadas com as propriedades `padding`, `border` e `margin` no CSS. Quando algo nao esta no lugar certo visualmente, quase sempre e questao de ajustar uma dessas tres.

---

## Por onde continuar

Com HTML e CSS basicos em mao, os proximos passos naturais sao Flexbox e Grid, os sistemas de layout do CSS moderno que resolvem o posicionamento de elementos de forma muito mais direta. Depois, responsividade: fazer a pagina se adaptar a diferentes tamanhos de tela usando `@media`. Por fim, JavaScript, para adicionar comportamento e interatividade ao que HTML e CSS constroem.

A pratica e o caminho mais curto. Crie um arquivo `.html`, abra no navegador, quebre coisas, conserte, repita.