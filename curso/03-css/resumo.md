# Semana 3 – CSS: Layout, Responsividade e Legibilidade

## O papel do CSS

CSS é responsável pela **apresentação visual** da aplicação. Ele controla cores, espaçamentos, tipografia, layout e adaptação para diferentes telas.

---

## Formas de aplicar CSS

- **Inline** (não recomendado)
- **Interno** (`<style>`)
- **Externo** (recomendado)

```html
<link rel="stylesheet" href="css/style.css" />
```

---

## Seletores básicos

```css
p {
}
.classe {
}
#id {
}
```

- Elemento: afeta todas as tags
- Classe: reutilizável
- ID: único

---

## Box Model

Todo elemento é uma caixa composta por:

- `content`
- `padding`
- `border`
- `margin`

```css
.card {
  padding: 16px;
  border: 1px solid #ccc;
  margin: 12px;
}
```

---

## Display

Define como o elemento se comporta no layout.

```css
div {
  display: block;
}
span {
  display: inline;
}
```

- `block`
- `inline`
- `inline-block`
- `none`

---

## Posicionamento

```css
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.fixed {
  position: fixed;
}
```

- `relative`: referência local
- `absolute`: relativo ao ancestral posicionado
- `fixed`: preso à tela

---

## Flexbox (layout unidimensional)

Usado para alinhar elementos em linha ou coluna.

```css
.container {
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
}
```

Principais propriedades:

- `flex-direction`
- `justify-content`
- `align-items`
- `gap`
- `flex-wrap`

---

## Grid (layout bidimensional)

Usado para layouts mais complexos.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
```

---

## Tipografia

```css
body {
  font-family: Arial, sans-serif;
  line-height: 1.5;
}
```

Boas práticas:

- Evitar fontes decorativas
- Usar tamanhos legíveis
- Espaçamento adequado entre linhas

---

## Cores e contraste

```css
body {
  color: #222;
  background-color: #fafafa;
}
```

- Garantir contraste suficiente
- Evitar excesso de cores
- Usar cores para hierarquia visual

---

## Responsividade

Adaptação da interface para diferentes telas.

```css
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

---

## Mobile-first

Começar o layout pensando em telas pequenas e evoluir para telas maiores.

```css
.card {
  width: 100%;
}
```

---

## Organização do CSS

- Separar por seções
- Nomear classes de forma clara
- Evitar estilos globais excessivos

Exemplo:

```css
.header {
}
.book-list {
}
.book-card {
}
```

---

## Legibilidade e UX

- Espaçamento consistente
- Alinhamento visual
- Hierarquia clara
- Evitar sobrecarga visual

---

## Boas práticas gerais

- Evitar `!important`
- Reutilizar classes
- Preferir layout com Flex/Grid
- CSS simples é melhor que CSS complexo
