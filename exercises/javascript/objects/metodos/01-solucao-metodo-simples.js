/* Crie um objeto `cachorro` com uma propriedade `nome` ("Rex") e um método `latir` 
que retorna a string "Au Au!" */

const cachorro = {
    nome: "Rex",
    latir: function () {
        return "Au Au!";
    }
};

console.log(
    "6. Latir:",
    cachorro.latir && cachorro.latir() === "Au Au!" ? "✅" : "❌"
);
