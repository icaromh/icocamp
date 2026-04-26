const urls = [
  "https://openlibrary.org/works/OL20734329W.json",
  "https://openlibrary.org/works/OL30845046W.json",
  "https://openlibrary.org/works/OL24801992W.json",
];

async function buscarVarios(urls) {
  const promises = urls.map((url) => fetch(url).then((r) => r.json()));
  const livros = await Promise.all(promises);
  return livros.map((livro) => livro.title);
}

buscarVarios(urls).then((titulos) => {
  console.log("Livros encontrados:");
  titulos.forEach((titulo) => console.log("-", titulo));
});
