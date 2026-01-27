# 📚 Bootcamp Marcie — Fullstack do Zero ao Deploy

Projeto central do bootcamp: **Minha Estante Virtual**
Uma aplicação web inspirada no Goodreads, evoluída incrementalmente ao longo de 12 semanas.

## 🎯 Objetivo do Bootcamp

Ao final do bootcamp, a aluna será capaz de:

- Criar uma aplicação **frontend + backend + banco de dados**
- Implementar **CRUD de livros e categorias**
- Consumir e criar **APIs REST**
- Versionar código com **Git e GitHub**
- Fazer **deploy** da aplicação
- Entender conceitos fundamentais para seguir estudando com autonomia

## 🧱 Metodologia

- Um **único projeto** evoluindo semana a semana
- Cada semana contém:
  - Conteúdo programático (o que estudar)
  - Materiais de apoio (links + leituras)
  - Um checkpoint de entendimento (explicar o que fez)
- Ritmo pensado para **3 dias por semana**

# 🗓️ Currículo (12 semanas)

> Lista objetiva de tópicos por semana para fechar o ciclo full stack:
> lógica → web → backend → frontend moderno → integração → produção.

## Semana 1 — Fundamentos de Programação e Algoritmia (reforço)

- Materiais no repo: [Semana 1](./01-javascript/README.md)
- Vídeo/curso: [Codecademy — Introduction to JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)

Tópicos:

- Pensamento computacional
- Decomposição de problemas
- Variáveis e tipos primitivos
- Objetos e arrays
- Controle de fluxo (`if / else`)
- Laços (`for`, `while`, `for...of`)
- Funções (declaração, parâmetros, retorno)
- Algoritmos simples (contagem, busca, agregação)
- Métodos de array: `map`, `filter`, `reduce`
- Imutabilidade vs mutabilidade
- Leitura e escrita de dados em estruturas JS

## Semana 2 — HTML Semântico e Estrutura de Aplicações Web

- Materiais no repo: [Semana 2](./02-html/README.md)
- Vídeo/curso: [Codecademy — Learn HTML](https://www.codecademy.com/learn/learn-html)

Tópicos:

- Estrutura básica de um documento HTML
- HTML semântico (`header`, `main`, `section`, `article`, `footer`)
- Formulários e inputs
- Listas e tabelas
- Atributos globais e acessibilidade básica
- Separação de conteúdo e comportamento
- Organização de arquivos (`index.html`, `assets`, `scripts`)
- Boas práticas de marcação

## Semana 3 — CSS: Layout, Responsividade e Legibilidade

- Materiais no repo: [Semana 3](./03-css/README.md)
- Vídeo/curso: [Codecademy — Learn CSS](https://www.codecademy.com/learn/learn-css)

Tópicos:

- Box model
- Posicionamento (`relative`, `absolute`, `fixed`)
- Flexbox
- Grid (introdução)
- Tipografia e hierarquia visual
- Cores e contraste
- Responsividade (media queries)
- Mobile-first
- Organização de CSS
- Legibilidade e UX básico

## Semana 4 — JavaScript no Browser: DOM e Estado Local

- Materiais no repo: [Semana 4](./04-dom-localstorage/README.md)

Tópicos:

- O que é o DOM
- Seleção de elementos
- Manipulação de classes e estilos
- Eventos (`click`, `submit`, `input`)
- Prevenção de comportamento padrão
- Renderização dinâmica
- Estado da aplicação no front
- LocalStorage (leitura e escrita)
- Serialização (JSON)
- Sincronização entre estado e UI

Vídeos (curtos):

- [What is DOM](https://www.youtube.com/watch?v=KShnPYN-voI)
- [More on DOM](https://www.youtube.com/watch?v=NO5kUNxGIu0)
- [Element Selectors](https://www.youtube.com/watch?v=FQtjI1PC5Z0)
- [Event Listeners (10 min)](https://www.youtube.com/watch?v=g_vXSKbfUiQ)
- [Event Listeners (5 min)](https://www.youtube.com/watch?v=i_8NQuEAOmg)
- [LocalStorage](https://www.youtube.com/watch?v=fYTTUBa-lPc)

## Semana 5 — Git, GitHub e Fluxo de Trabalho

- Materiais no repo: [Semana 5](./05-git/README.md)
- Vídeo/curso: [Codecademy — Learn Git](https://www.codecademy.com/learn/learn-git)

Tópicos:

- O que é controle de versão
- Repositórios locais vs remotos
- `git init`, `clone`, `status`, `add`, `commit`
- Histórico de commits
- Branches
- `merge` e conflitos
- `.gitignore`
- Fluxo básico de colaboração
- Boas práticas de commit
- Leitura de código versionado

## Semana 6 — HTTP, APIs e Comunicação Cliente-Servidor

- Materiais no repo: [Semana 6](./06-http-rest/README.md)
- Vídeo/curso: [Codecademy — Asynchronous JavaScript](https://www.codecademy.com/learn/asynchronous-javascript)

Tópicos:

- O que é HTTP
- Request vs response
- Métodos HTTP (`GET`, `POST`, `PUT`, `DELETE`)
- Status codes
- Headers
- JSON como formato de troca de dados
- O que é uma API REST
- Fetch API
- Promises e `async/await`
- Tratamento de erros em requisições
- Consumo de APIs externas

## Semana 7 — Backend com Node.js e Express (Fundamentos)

- Materiais no repo: [Semana 7](./07-backend-api/README.md)
- Vídeo/curso: [Codecademy — Learn Node.js](https://www.codecademy.com/learn/learn-node-js)
- Vídeo/curso: [Codecademy — Learn Express](https://www.codecademy.com/learn/learn-express)

Tópicos:

- O que é Node.js
- Runtime vs browser
- NPM e gerenciamento de dependências
- Estrutura de um projeto backend
- Express.js
- Criação de servidor HTTP
- Rotas
- Middlewares
- Request body e query params
- Respostas JSON
- Organização básica do backend

## Semana 8 — Banco de Dados Relacional e Integração Backend

- Materiais no repo: [Semana 8](./08-banco-dados/README.md)
- Vídeo/curso: [Codecademy — Intro to SQL](https://www.codecademy.com/learn/intro-to-sql)
- Vídeo/curso: [Codecademy — Design Databases (PostgreSQL)](https://www.codecademy.com/learn/paths/design-databases-with-postgresql)

Tópicos:

- O que é um banco de dados relacional
- Modelagem de dados
- Tabelas, colunas e tipos
- Chaves primárias
- SQL básico (`SELECT`, `INSERT`, `UPDATE`, `DELETE`)
- PostgreSQL
- Conexão Node ↔ PostgreSQL
- Uso de ORM ou query builder
- Camada de dados no backend
- Persistência real da aplicação

Vídeos (curtos)

- [SQL Explained in 100 Seconds](https://www.youtube.com/watch?v=zsjvFFKOm3c)

## Semana 9 — React: Fundamentos de Frontend Moderno

- Materiais no repo: [Semana 9](./09-react/README.md)
- Vídeo/curso: [Codecademy — React 101](https://www.codecademy.com/learn/react-101)

Tópicos:

- O que é React
- SPA (Single Page Application)
- Componentes
- JSX
- Props
- Estado (`useState`)
- Renderização condicional
- Listas e keys
- Organização de componentes
- Fluxo de dados no React

## Semana 10 — React Avançado e Integração com Backend

- Materiais no repo: [Semana 10](./10-react-avancado/README.md)
- Vídeo/curso: [Codecademy — React 101 (revisão)](https://www.codecademy.com/learn/react-101)

Tópicos:

- Ciclo de vida (`useEffect`)
- Fetch no React
- Integração com API própria
- Estados de loading e erro
- Formulários controlados
- Envio de dados para o backend
- Atualização de UI após mutações
- React Router (introdução)
- Estrutura de pastas em projetos React

## Semana 11 — Qualidade, Arquitetura e Boas Práticas

- Materiais no repo: [Semana 11](./11-deploy/README.md)

Tópicos:

- Separação de responsabilidades
- Arquitetura frontend vs backend
- Validação de dados
- Tratamento de erros
- Variáveis de ambiente
- CORS
- Segurança básica (input validation)
- Debugging frontend e backend
- Testes (conceito e exemplos simples)
- Leitura e entendimento de código

## Semana 12 — Deploy, Produção e Encerramento

- Materiais no repo: [Semana 12](./12-conclusao/README.md)

Tópicos:

- Build de frontend
- Deploy de aplicações React
- Deploy de backend Node
- Deploy de banco de dados
- Variáveis de ambiente em produção
- Integração front ↔ back em produção
- Problemas comuns de deploy
- Escrita de README
- Apresentação do projeto
- Próximos passos (TypeScript, testes, autenticação, etc.)

## 🧠 Princípio pedagógico do bootcamp

> Nunca ensinar uma abstração antes da dor que ela resolve.

Esse bootcamp prioriza entendimento real, prática contínua e construção de autonomia.

## 📋 Recursos

- [Javascript Cheat Sheet](https://www.freemote.com/javascript-cheat-sheet)
