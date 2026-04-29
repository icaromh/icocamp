/* 
Use `for...in` para percorrer o objeto `carro` e adicione todos os **valores** em um array chamado
`valores`.
*/

const carro = {
    marca: "Ford",
    modelo: "Ka",
    ano: 2020
}

const valores = [];

for (let key in carro) {
    valores.push(carro[key]);
}

// --- Verificação ---
console.log(
    "12. Valores:",
    valores.includes("Ford") && valores.length === 3 ? "✅" : "❌"
);
