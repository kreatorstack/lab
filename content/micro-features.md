
Aplicacoes crescem. Estruturas organizadas por tipo tecnico, como `components`, `services` e `utils`, comecam simples mas rapidamente viram um sistema dificil de navegar. Voce abre o projeto e nao sabe por onde comecar, porque tudo que pertence a uma funcionalidade esta espalhado em varias pastas diferentes.

A arquitetura baseada em funcionalidades muda esse eixo. O codigo passa a ser organizado pelo que o sistema faz. Cada funcionalidade vira um bloco isolado, contendo interface, logica e acesso a dados no mesmo lugar.

---

## Estrutura por dominio

Em vez de separar por tecnologia, a divisao e por funcionalidade.

`auth`, `cart`, `search`. Cada uma dessas partes existe como um modulo proprio. Nada fica espalhado entre varias pastas tecnicas.

Voce entra em uma feature e encontra tudo ali. Isso reduz o esforco de entendimento e limita o impacto de mudancas. Se voce precisa alterar algo no fluxo de autenticacao, sabe exatamente onde ir.

---

## Estrutura no frontend

Uma hierarquia comum de pastas para aplicar esse modelo:

**`app`** — inicializacao da aplicacao, providers globais e configuracao geral.

**`pages`** — representa as rotas. Cada pagina organiza e compoe funcionalidades.

**`widgets`** — blocos maiores de interface que combinam multiplas features.

**`features`** — onde vivem as funcionalidades reais. Cada pasta representa uma acao ou regra de negocio: `features/auth`, `features/add-to-cart`.

**`entities`** — modelos centrais do sistema. Representam dados como `user`, `product`, `order`.

**`shared`** — codigo generico: componentes base, utilitarios, helpers. Nao deve conter regra de negocio.

---

## Regra de dependencia

Ha uma regra simples e rigida: camadas superiores so podem depender das inferiores.

`pages` pode usar `features`. `features` pode usar `entities` e `shared`. O inverso nao acontece.

Isso evita dependencias circulares e mantem o isolamento entre as partes do sistema. Quando essa regra e respeitada, alterar uma feature nao produz efeitos colaterais inesperados em outras.

---

## Organizacao interna de uma feature

Dentro de cada feature, a estrutura costuma seguir um padrao previsivel:

- `ui` — componentes visuais
- `model` — estado, regras e logica
- `api` — chamadas externas
- `lib` — funcoes auxiliares internas

Tudo que pertence a feature fica encapsulado aqui. O que nao esta nessa pasta nao e responsabilidade dela.

---

## Backend no mesmo modelo

No backend, a logica e a mesma. Cada funcionalidade pode ser tratada como uma unidade isolada: um handler, funcao ou servico independente.

`auth-service`, `comment-service`, `payment-service`. Cada um recebe requisicoes, processa e responde sem depender diretamente dos outros. Isso permite escalar partes do sistema de forma independente sem reescrever o restante.

---

## O que esse modelo resolve

Menos codigo espalhado significa que mudancas ficam mais contidas. A leitura do projeto se torna mais direta porque a estrutura reflete o que o sistema faz, nao como ele foi implementado. Times conseguem trabalhar em paralelo em features diferentes sem conflito constante.

A escalabilidade tambem melhora: adicionar uma nova funcionalidade nao exige tocar em dezenas de arquivos espalhados pelo projeto.

---

## Limitacoes

Esse modelo exige disciplina. A pasta `shared` pode virar uma gaveta de tudo se nao houver controle claro do que pertence a ela. A comunicacao entre features precisa ser bem definida para que o isolamento seja real e nao apenas aparente.

Para projetos pequenos ou com escopo muito limitado, a estrutura pode ser excesso. O modelo faz mais sentido quando o projeto tem previsao de crescimento ou quando varias pessoas trabalham nele ao mesmo tempo.

---

## Conclusao

Organizar por funcionalidade reduz complexidade estrutural real. Quando o projeto cresce, essa abordagem evita o colapso comum de codigo espalhado e dificil de manter. A estrutura passa a refletir o sistema, nao apenas as escolhas tecnicas de quem o construiu.