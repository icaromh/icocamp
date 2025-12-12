const notas = [5.5, 8.0, 9.5, 4.0, 7.0];

function encontrarMaiorNota(arr) {
  return arr.reduce((max, nota) => Math.max(max, nota), -Infinity);
}

console.log(encontrarMaiorNota(notas));
