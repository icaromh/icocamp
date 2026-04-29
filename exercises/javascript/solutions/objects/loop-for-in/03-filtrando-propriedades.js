const notas = { mat: 8, port: 6, hist: 9 };
let somaAprovadas = 0;
for (let materia in notas) {
  if (notas[materia] > 7) {
    somaAprovadas += notas[materia];
  }
}
console.log("13. Soma > 7:", somaAprovadas === 17 ? "✅" : "❌");
