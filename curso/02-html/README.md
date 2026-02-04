# 📚 Bootcamp Marcie — Semana 2

[💻 Learn HTML](https://www.codecademy.com/learn/learn-html)

## HTML: estrutura da aplicação e navegação

Projeto em evolução: **Minha Estante Virtual**

## 🎯 Objetivo da semana

Ao final desta semana, a aluna será capaz de:

- Entender o papel do **HTML** em uma aplicação web
- Estruturar páginas usando **HTML semântico**
- Criar múltiplas páginas conectadas entre si
- Pensar a aplicação como **telas**, não como exercícios isolados
- Preparar o terreno para CSS e JavaScript nas próximas semanas

> Nesta semana, **não há lógica em JavaScript**.
> O foco é **estrutura, conteúdo e navegação**.

## 🧠 Conceito central da semana

> HTML não é visual.
> HTML é **estrutura e significado**.

Antes de estilizar ou programar:

- definimos **o que existe na página**
- organizamos o conteúdo de forma clara
- pensamos como o usuário navega

## 📘 Conteúdos da semana (com intenção pedagógica)

### 1️⃣ Estrutura básica de um documento HTML

Todo arquivo HTML deve conter:

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Minha Estante Virtual</title>
  </head>
  <body></body>
</html>
```

Pontos importantes:

- `<!DOCTYPE html>` não é opcional
- `<head>` não aparece na tela
- `<body>` contém tudo que o usuário vê

### 2️⃣ HTML semântico

Usar tags que **explicam o significado do conteúdo**:

- `<header>`
- `<main>`
- `<section>`
- `<article>`
- `<nav>`
- `<footer>`

Exemplo:

```html
<main>
  <section>
    <h2>Livros da minha estante</h2>

    <article>
      <h3>Dom Casmurro</h3>
      <p>Machado de Assis</p>
    </article>
  </section>
</main>
```

### 3️⃣ Listas e repetição visual

Livros são **itens de uma lista**.

<details>
<summary>💡 Fun fact — Os nomes das tags HTML fazem sentido (quase sempre)</summary>

Muitas tags HTML usam abreviações em inglês, e entender isso ajuda muito a lembrar para que elas servem. No exemplo abaixo

- ul vem de Unordered List → lista sem ordem (com bolinhas)
- li vem de List Item → cada item da lista

O mesmo vale para várias outras tags comuns:

- ol → Ordered List (lista ordenada)
- p → Paragraph
- a → Anchor (link)
- nav → Navigation
- header → cabeçalho

Pensar no significado do nome da tag, em vez de tentar decorar, facilita muito a memorização e a leitura de código HTML.

</details>

```html
<ul>
  <li>Dom Casmurro</li>
  <li>A Hora da Estrela</li>
</ul>
```

### 4️⃣ Links e navegação

```html
<nav>
  <a href="index.html">Home</a>
  <a href="novo-livro.html">Cadastrar livro</a>
  <a href="nova-categoria.html">Cadastrar categoria</a>
</nav>
```

### 5️⃣ Formulários (estrutura)

```html
<form>
  <label>
    Título do livro
    <input type="text" name="title" />
  </label>

  <label>
    Autor
    <input type="text" name="author" />
  </label>

  <button type="submit">Salvar</button>
</form>
```

## 🏁 Desafio da semana

Nesta semana, a aplicação será composta por **páginas estáticas**, com conteúdo fixo.
Essas páginas representam **o esqueleto final da aplicação**.


## 🗂️ Páginas que farão parte do projeto

Criar uma aplicação com 3 páginas HTML conectadas entre si usando navegação básica e conteúdo fictício.

1. **Home** — lista de livros da estante
2. **Detalhes do livro** — informações de um livro específico
3. **Cadastro de livro** — formulário

Cada página será um arquivo `.html`.

<details>
    <summary>💡 Fun fact — Nem toda página web é .html</summary>
> Quando você vê um arquivo .html, geralmente está lidando com um conteúdo estático: o navegador recebe o arquivo pronto e apenas exibe o que está escrito ali. Mas na web também existem páginas com outras extensões, como .php, .asp, .aspx, .jsp ou até URLs sem extensão aparente. Esses formatos indicam que, antes de chegar ao navegador, a página passou por um servidor que executou código (por exemplo, em PHP, C#, Java ou JavaScript) para gerar o HTML dinamicamente. Ou seja: o navegador sempre recebe HTML, mas esse HTML pode ter sido criado “na hora”, com base em dados de um banco, usuário logado ou regras de negócio. Encontrar uma página com outro formato normalmente significa que existe lógica no servidor por trás daquela tela, e não apenas um arquivo estático sendo exibido.
</details>


## ✅ Critérios de conclusão

- [ ] Uso correto de HTML semântico
- [ ] Navegação funcional
- [ ] Estrutura clara das páginas

## 📋 Conceitos da semana

- Estrutura básica de um documento HTML
- HTML semântico (header, main, section, article, footer)
- Formulários e inputs
- Listas e tabelas
- Atributos globais e acessibilidade básica
- Separação de conteúdo e comportamento
- Organização de arquivos (index.html, assets, scripts)
- Boas práticas de marcação
