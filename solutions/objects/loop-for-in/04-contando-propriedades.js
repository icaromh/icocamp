const carro = { marca: "Ford", modelo: "Ka", ano: 2020 };
function contarPropriedades(obj) {
  let count = 0;
  for (let k in obj) {
    count++;
  }
  return count;
}
console.log("14. Contar:", contarPropriedades(carro) === 3 ? "✅" : "❌");
