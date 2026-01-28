## ⚙️ Usando `this`

Adicione um método `apresentar` ao objeto `cachorro` que retorna "Eu sou o Rex" (use `this.nome`).

**Template**

```javascript
let cachorro = { nome: "Rex" };

// 7. Adicione apresentar
cachorro.apresentar = function () {
  // ...
};
```

<details>
  <summary>🫣 Spoiler</summary>

> `return "Eu sou o " + this.nome;`

</details>
