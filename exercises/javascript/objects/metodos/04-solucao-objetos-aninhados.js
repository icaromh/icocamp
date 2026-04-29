/* 
Crie um objeto `usuario` que tenha `nome` e uma propriedade `endereco`, que por sua vez é 
outro objeto com `rua` e `numero`.
*/

const usuario = {
    nome: "Marcie",
    endereco: {
        rua: "Gran Via de Les Corts Catalanes",
        numero: 433
    }
};

// --- Verificação ---
console.log(
    "9. Aninhado:",
    usuario.endereco && usuario.endereco.rua ? "✅" : "❌"
);