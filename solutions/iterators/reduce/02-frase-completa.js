const palavras = ["Eu", "amo", "programar", "em", "JavaScript"];

function formarFrase(arr) {
  // Opção com reduce
  return arr.reduce((acc, palavra, index) => {
    if (index === 0) return palavra;
    return acc + " " + palavra;
  }, "");
}

console.log(formarFrase(palavras));
