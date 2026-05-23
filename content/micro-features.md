Aplicações crescem. Estruturas organizadas por tipo técnico, como `components`, `services` e `utils`, começam simples, mas rapidamente viram um sistema difícil de navegar. Você abre o projeto e não sabe por onde começar, porque tudo que pertence a uma funcionalidade está espalhado em várias pastas diferentes.

A arquitetura baseada em funcionalidades muda esse eixo. O código passa a ser organizado pelo que o sistema faz. Cada funcionalidade vira um bloco isolado, contendo interface, lógica e acesso a dados no mesmo lugar.

---

## Estrutura por domínio

Em vez de separar por tecnologia, a divisão é por funcionalidade.

`auth`, `cart`, `search`. Cada uma dessas partes existe como um módulo próprio. Nada fica espalhado entre várias pastas técnicas.

Você entra em uma feature e encontra tudo ali. Isso reduz o esforço de entendimento e limita o impacto de mudanças. Se você precisa alterar algo no fluxo de autenticação, sabe exatamente onde ir.

---

## Estrutura no frontend

Uma hierarquia comum de pastas para aplicar esse modelo:

**`app`** — inicialização da aplicação, providers globais e configuração geral.

**`pages`** — representa as rotas. Cada página organiza e compõe funcionalidades.

**`widgets`** — blocos maiores de interface que combinam múltiplas features.

**`features`** — onde vivem as funcionalidades reais. Cada pasta representa uma ação ou regra de negócio: `features/auth`, `features/add-to-cart`.

**`entities`** — modelos centrais do sistema. Representam dados como `user`, `product`, `order`.

**`shared`** — código genérico: componentes base, utilitários, helpers. Não deve conter regra de negócio.

---

## Regra de dependência

Há uma regra simples e rígida: camadas superiores só podem depender das inferiores.

`pages` pode usar `features`. `features` pode usar `entities` e `shared`. O inverso não acontece.

Isso evita dependências circulares e mantém o isolamento entre as partes do sistema. Quando essa regra é respeitada, alterar uma feature não produz efeitos colaterais inesperados em outras.

---

## Organização interna de uma feature

Dentro de cada feature, a estrutura costuma seguir um padrão previsível:

- `ui` — componentes visuais
- `model` — estado, regras e lógica
- `api` — chamadas externas
- `lib` — funções auxiliares internas

Tudo que pertence à feature fica encapsulado aqui. O que não está nessa pasta não é responsabilidade dela.

---

## Backend no mesmo modelo

No backend, a lógica é a mesma. Cada funcionalidade pode ser tratada como uma unidade isolada: um handler, função ou serviço independente.

`auth-service`, `comment-service`, `payment-service`. Cada um recebe requisições, processa e responde sem depender diretamente dos outros. Isso permite escalar partes do sistema de forma independente sem reescrever o restante.

---

## O que esse modelo resolve

Menos código espalhado significa que mudanças ficam mais contidas. A leitura do projeto se torna mais direta porque a estrutura reflete o que o sistema faz, não como ele foi implementado. Times conseguem trabalhar em paralelo em features diferentes sem conflito constante.

A escalabilidade também melhora: adicionar uma nova funcionalidade não exige tocar em dezenas de arquivos espalhados pelo projeto.

---

## Limitações

Esse modelo exige disciplina. A pasta `shared` pode virar uma gaveta de tudo se não houver controle claro do que pertence a ela. A comunicação entre features precisa ser bem definida para que o isolamento seja real e não apenas aparente.

Para projetos pequenos ou com escopo muito limitado, a estrutura pode ser excessiva. O modelo faz mais sentido quando o projeto tem previsão de crescimento ou quando várias pessoas trabalham nele ao mesmo tempo.

---

## Conclusão

Organizar por funcionalidade reduz complexidade estrutural real. Quando o projeto cresce, essa abordagem evita o colapso comum de código espalhado e difícil de manter. A estrutura passa a refletir o sistema, não apenas as escolhas técnicas de quem o construiu.