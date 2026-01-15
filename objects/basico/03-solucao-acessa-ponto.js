/*
🧱 Acesso com Ponto

Acesse a propriedade `nome` do objeto `pessoa` criado acima e armazene em uma variável 
chamada `nomeDaPessoa`.
**Template**

```javascript
let pessoa = { nome: "Ana", idade: 30 };

// 3. Acesse o nome
let nomeDaPessoa;
*/

const pessoa = {
    nome: "Ana",
    idade: 30
};

const nomeDaPessoa = pessoa.nome;

console.log("3. Nome acessado:", nomeDaPessoa === pessoa.nome ? "✅" : "❌");
