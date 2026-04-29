/* Adicione um método `apresentar` ao objeto `cachorro` que retorna "Eu sou o Rex" (use `this.nome`)*/

const cachorro = {
    nome: "Rex",
    latir: function () {
        return "Au Au!";
    },
    apresentar: function () {
        return `Eu sou o ${this.nome}`;
    }
};

/* fiz depois da primeira solução pra testar se dava pra adicionar depois usando o this. 
cachorro.apresentar = function () {
    return `Eu sou o ${this.nome}`;
}*/

// --- Verificação ---
console.log(
    "7. Apresentar:",
    cachorro.apresentar && cachorro.apresentar() === "Eu sou o Rex" ? "✅" : "❌"
);


