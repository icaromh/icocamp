# Semana 2 – HTML Semântico e Estrutura de Aplicações Web

## Estrutura básica de um documento HTML

Todo documento HTML segue uma estrutura padrão que informa ao navegador como interpretar o conteúdo.

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Minha Estante</title>
  </head>
  <body>
    Conteúdo da aplicação
  </body>
</html>
```

---

## HTML semântico

HTML semântico descreve o significado do conteúdo, não apenas sua aparência.

### Principais elementos semânticos

- `<header>` – cabeçalho
- `<main>` – conteúdo principal
- `<section>` – agrupamento temático
- `<article>` – conteúdo independente
- `<footer>` – rodapé
- `<nav>` – navegação

```html
<header>
  <h1>Minha Estante Virtual</h1>
</header>
```

---

## Títulos e hierarquia

```html
<h1>Título principal</h1>
<h2>Seção</h2>
<h3>Subseção</h3>
```

---

## Parágrafos e texto

```html
<p>Texto com <strong>ênfase forte</strong> e <em>ênfase leve</em>.</p>
```

---

## Listas

### Não ordenada

```html
<ul>
  <li>Romance</li>
  <li>Fantasia</li>
</ul>
```

### Ordenada

```html
<ol>
  <li>Ler</li>
  <li>Anotar</li>
</ol>
```

---

## Links

```html
<a href="https://example.com">Link externo</a>
```

---

## Imagens

```html
<img src="capa.jpg" alt="Capa do livro Dom Casmurro" />
```

---

## Formulários

```html
<form>
  <label for="titulo">Título</label>
  <input id="titulo" type="text" />
  <button type="submit">Salvar</button>
</form>
```

---

## Botões

```html
<button>Adicionar livro</button>
```

---

## Tabelas

```html
<table>
  <thead>
    <tr>
      <th>Título</th>
      <th>Autor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dom Casmurro</td>
      <td>Machado de Assis</td>
    </tr>
  </tbody>
</table>
```

---

## Atributos globais

```html
<div id="livros" class="lista" data-categoria="romance"></div>
```

---

## Acessibilidade básica

- HTML semântico
- `alt` em imagens
- `label` associado a `input`

---

## Organização de arquivos

```
/index.html
/css/style.css
/js/script.js
/assets/
```

---

## Boas práticas

- Código legível
- Semântica correta
- Separação de responsabilidades
