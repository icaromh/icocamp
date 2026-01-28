const usuarios = ["Ana", "Bruno", "Carlos"];

function enviarEmails(arr) {
  arr.forEach((usuario) => {
    console.log("Enviando email para " + usuario);
  });
}

enviarEmails(usuarios);
