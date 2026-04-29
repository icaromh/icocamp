/* Verifique se a chave "turbo" existe no objeto `carro` (sem usar `for...in`, use o operador 
`in` ou acesso direto).*/

const carro = {
    marca: "Ford",
    modelo: "Ka",
    ano: 2020
};

let temTurbo = "turbo" in carro;

// --- Verificação ---
console.log("15. Tem turbo:", temTurbo === false ? "✅" : "❌");
