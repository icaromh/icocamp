async function criarPost(dados) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  });

  return await response.json();
}

criarPost({
  title: "Minha Estante Virtual",
  body: "Uma aplicação para organizar livros lidos e não lidos.",
  userId: 1,
}).then((post) => {
  console.log("Post criado com id:", post.id);
  console.log("Título:", post.title);
});
