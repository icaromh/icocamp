/* 🧱 Acesso com Colchetes

Acesse a propriedade `idade` do objeto `pessoa` usando a notação de colchetes 
`['propriedade']` e armazene em uma variável chamada `idadeDaPessoa`.
*/

const pessoa = {
    nome: "Ana",
    idade: 30
};

const idadeDaPessoa = pessoa['idade'];
console.log("4. Idade acessada:", idadeDaPessoa === pessoa.idade ? "✅" : "❌");
