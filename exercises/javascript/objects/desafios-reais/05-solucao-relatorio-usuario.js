/*Crie uma função formatarUsuario(usuario) que recebe um objeto com nome, email e cidade, e retorna uma string: "Nome: [nome], Contato: [email]". */

function formatarUsuario(usuario) {
    return `Nome: ${usuario.nome}, Contato: ${usuario.email}`;

}


const u = { nome: "Bob", email: "bob@email.com", cidade: "SP" };
console.log(
    "20. Relatório:",
    formatarUsuario(u) === "Nome: Bob, Contato: bob@email.com" ? "✅" : "❌"
);