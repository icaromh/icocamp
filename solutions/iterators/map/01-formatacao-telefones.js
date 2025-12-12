const telefones = ["12345678", "87654321", "99998888"];

function formatarTelefones(arr) {
  return arr.map((telefone) => {
    return telefone.slice(0, 4) + "-" + telefone.slice(4);
  });
}

console.log(formatarTelefones(telefones));
