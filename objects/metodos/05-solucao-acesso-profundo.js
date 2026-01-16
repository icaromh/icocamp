//Acesse o número da rua do `usuario` e armazene em uma variável `numeroCasa`.

const usuario = {
    nome: "Ana",
    endereco: {
        rua: "Rua das Flores",
        numero: 123,
    },
};

const numeroCasa = usuario.endereco.numero;

console.log(
    "10. Acesso profundo:",
    numeroCasa === usuario.endereco?.numero ? "✅" : "❌"
);
