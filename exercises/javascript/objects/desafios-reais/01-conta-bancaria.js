// --- Exercício 16 ---
let conta = {
  saldo: 0,
  // Implemente depositar e sacar
};

// --- Verificação ---
if (conta.depositar) conta.depositar(100);
if (conta.sacar) conta.sacar(30);
console.log("16. Saldo:", conta.saldo === 70 ? "✅" : "❌");
