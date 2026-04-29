let usuario = {
  nome: "Ana",
  endereco: {
    rua: "Rua das Flores",
    numero: 123,
  },
};
let numeroCasa = usuario.endereco.numero;
console.log("10. Acesso profundo:", numeroCasa === 123 ? "✅" : "❌");
