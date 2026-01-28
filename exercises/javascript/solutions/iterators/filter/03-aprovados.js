const notas = [5.5, 8.0, 9.5, 4.0, 7.0, 6.5];

function filtrarAprovados(arr) {
  return arr.filter((nota) => nota >= 7.0);
}

console.log(filtrarAprovados(notas));
