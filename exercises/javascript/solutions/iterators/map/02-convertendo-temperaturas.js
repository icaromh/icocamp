const celsius = [0, 10, 20, 30, 100];

function converterParaFahrenheit(arr) {
  return arr.map((temp) => (temp * 9) / 5 + 32);
}

console.log(converterParaFahrenheit(celsius));
