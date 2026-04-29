function memorizar(funcao) {
  const cacheEntradas = [];
  const cacheResultados = [];

  return function (entrada) {
    const index = cacheEntradas.indexOf(entrada);

    if (index !== -1) {
      // Encontrou no cache!
      return cacheResultados[index];
    }

    // Não encontrou, calcula
    const resultado = funcao(entrada);

    // Salva no cache
    cacheEntradas.push(entrada);
    cacheResultados.push(resultado);

    return resultado;
  };
}

// Teste rápido
let chamadas = 0;
const dobro = (n) => {
  chamadas++;
  return n * 2;
};
const dobroMemo = memorizar(dobro);

dobroMemo(5);
dobroMemo(5);
console.log(chamadas === 1 ? "Sucesso: Cache funcionou" : "Erro: Cache falhou");
