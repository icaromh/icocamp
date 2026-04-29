let usuario = {
  nome: "Ana",
  endereco: {
    rua: "Rua das Flores",
    numero: 123,
  },
};

// --- Exercício 10 ---
let numeroCasa; // Implemente aqui

// --- Verificação ---
console.log(
  "10. Acesso profundo:",
  numeroCasa === usuario.endereco?.numero ? "✅" : "❌"
);
