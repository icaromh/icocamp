function formatarUsuario(usuario) {
  return "Nome: " + usuario.nome + ", Contato: " + usuario.email;
}
const u = { nome: "Bob", email: "bob@email.com", cidade: "SP" };
console.log(
  "20. Relatório:",
  formatarUsuario(u) === "Nome: Bob, Contato: bob@email.com" ? "✅" : "❌"
);
