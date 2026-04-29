/* Adicione uma nova propriedade chamada `corFavorita` ao objeto `pessoa` com 
o valor "Azul".

**Template**

```javascript
let pessoa = { nome: "Ana", idade: 30 };
*/

const pessoa = {
    nome: "Ana",
    idade: 30
};

pessoa.corFavorita = "Azul";

console.log("5. Cor adicionada:", pessoa.corFavorita === "Azul" ? "✅" : "❌");
