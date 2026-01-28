let cachorro = { nome: "Rex" };
cachorro.apresentar = function () {
  return "Eu sou o " + this.nome;
};
console.log(
  "7. Apresentar:",
  cachorro.apresentar() === "Eu sou o Rex" ? "✅" : "❌"
);
