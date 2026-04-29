async function buscarLivro(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

buscarLivro("https://openlibrary.org/works/OL20734329W.json")
  .then((livro) => console.log("Título:", livro.title));
