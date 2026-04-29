const itens = ["Arroz", "Feijão", "Carne"];

function imprimirLista(arr) {
  arr.forEach((item) => {
    console.log("[ ] " + item);
  });
}

imprimirLista(itens);
