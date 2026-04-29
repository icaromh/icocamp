# 📚 Bootcamp Marcie — Semana 3

[💻 Learn CSS](https://www.codecademy.com/learn/learn-css)

---

## Material auxiliar

- [“Everything You Know About Web Design Just Changed” by Jen Simmons](https://www.youtube.com/watch?v=jBwBACbRuGY&t=1s) - Uma caminhada por como o web design foi desde o imprincípio até a chegada de Grid Layout. É um ótimo material pra entender o contexto de cada mudança (table -> tableless(divs) -> flex -> grid).
- [CSS Grid mini curso](https://cssgrid.io/)
- [Grid Garden](https://cssgridgarden.com/) - Joguinho pra praticar mover elementos usando CSS Grid
- [CSS Flexbox mini curso](https://flexbox.io/)
- [Flexbox Groggy](https://flexboxfroggy.com/) - Joguinho pra praticar mover elementos usando Flexbox.
- [1-line Layouts](https://1linelayouts.com/) - Colinha de como fazer layouts em poucas linhas de CSS. Os mais comuns estão aqui.
- [Curso para transformar layouts em HTML](https://www.figma.com/community/file/1154460535210746004/interactive-css-course)
- [Curso interativo de HTML e CSS com feedback](https://scrimba.com/fullstack-path-c0fullstack)

## CSS: layout, legibilidade e organização visual

Projeto em evolução: **Minha Estante Virtual**

## 🎯 Objetivo da semana

Ao final desta semana, a aluna será capaz de:

- Entender o papel do **CSS** em uma aplicação web
- Separar **estrutura (HTML)** de **aparência (CSS)**
- Criar layouts simples usando **Flexbox**
- Aplicar hierarquia visual para melhorar a leitura
- Organizar arquivos CSS de forma clara

> Nesta semana, **não há JavaScript novo**.
> O foco é **visual, clareza e organização**.

## 🧠 Conceito central da semana

> CSS não é decoração.
> CSS é **comunicação visual**.

Um bom CSS ajuda o usuário a:

- entender o que é importante
- escanear a página
- navegar sem esforço

## 🧠 O que é CSS, afinal?

CSS é a sigla para **Cascading Style Sheets**, que em português significa algo como **Folhas de Estilo em Cascata**.

- **Style** → define aparência (cores, tamanhos, espaçamento, layout)
- **Sheets** → regras ficam em arquivos separados
- **Cascading** → existe uma ordem de prioridade entre as regras

O papel do CSS é **controlar como o conteúdo HTML é apresentado**, sem misturar aparência com estrutura.

> HTML diz _o que é_ cada coisa.
> CSS diz _como isso aparece_.

## 🧩 Domínio do problema: deixando a estante legível

Até agora, a aplicação:

- existe
- funciona como estrutura

Nesta semana, vamos torná-la:

- **legível**
- **organizada**
- **agradável de usar**

## 📘 Conteúdos da semana

### 1️⃣ Como o CSS funciona

```css
seletor {
  propriedade: valor;
}
```

### 2️⃣ Conectando CSS ao HTML

```html
<link rel="stylesheet" href="styles.css" />
```

📘 MDN: <https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/link>

### 3️⃣ Seletores básicos

- Elementos: `p`, `section`
- Classes: `.book-card`
- IDs: `#main-title`

### 4️⃣ Box Model

Todo elemento é uma caixa:

- content
- padding
- border
- margin

### 5️⃣ Flexbox

```css
.book-list {
  display: flex;
  gap: 16px;
}
```

## 🌊 Cascading: como o navegador decide qual estilo usar

Quando várias regras tentam estilizar o mesmo elemento, o navegador segue uma **ordem de prioridade**.

```css
p {
  color: blue;
}
p {
  color: green;
}
```

A última regra vence.

## 🎯 Especificidade no CSS

Hierarquia básica:

1. Elementos
2. Classes
3. IDs
4. Inline style

```css
p {
  color: blue;
}
.book-card {
  color: green;
}
#featured {
  color: red;
}
```

## ⚠️ Boas práticas

- Prefira classes
- Evite inline styles
- CSS quase nunca “não funciona”, geralmente é conflito de regras

## 🏁 Desafio da semana

Organizar visualmente a aplicação usando um único arquivo CSS, com layout consistente entre páginas.

## ✅ Critérios de conclusão

- [ ] Entender o papel do CSS
- [ ] Explicar cascading
- [ ] Diferenciar especificidade

## 📋 Conceitos da Semana

- Box model
- Posicionamento (relative, absolute, fixed)
- Flexbox
- Grid (introdução)
- Tipografia e hierarquia visual
- Cores e contraste
- Responsividade (media queries)
- Mobile-first
- Organização de CSS
- Legibilidade e UX básico
