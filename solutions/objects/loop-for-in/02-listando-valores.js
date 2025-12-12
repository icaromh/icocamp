const carro = { marca: "Ford", modelo: "Ka", ano: 2020 };
let valores = [];
for (let chave in carro) {
  valores.push(carro[chave]);
}
console.log("12. Valores:", valores.length === 3 ? "✅" : "❌");
