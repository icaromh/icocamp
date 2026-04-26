async function buscarAutor(autor) {
  const query = autor.split(" ").join("+");
  const url = `https://openlibrary.org/search.json?q=${query}&limit=10`;

  const response = await fetch(url);
  const data = await response.json();

  return data.docs
    .filter((doc) => doc.first_publish_year !== undefined)
    .map((doc) => ({ titulo: doc.title, ano: doc.first_publish_year }))
    .sort((a, b) => a.ano - b.ano);
}

buscarAutor("Emily Henry").then((livros) => {
  livros.forEach((l) => console.log(`${l.ano} — ${l.titulo}`));
});
