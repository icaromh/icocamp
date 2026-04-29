const carro = { marca: "Ford", modelo: "Ka", ano: 2020 };
let chaves = [];
for (let chave in carro) {
  chaves.push(chave);
}
console.log("11. Chaves:", chaves.length === 3 ? "✅" : "❌");
