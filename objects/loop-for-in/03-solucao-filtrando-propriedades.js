/* Dado o objeto notas, use for...in para somar apenas as notas que são maiores que 7.*/

const notas = {
    mat: 8,
    port: 6,
    hist: 9
};

// Soma maiores que 7
let somaAprovadas = 0;

for (let key in notas) {
    if (notas[key] > 7) {
        somaAprovadas += notas[key];
    }
}

// --- Verificação ---
console.log("13. Soma > 7:", somaAprovadas === 17 ? "✅" : "❌"); // 8 + 9

