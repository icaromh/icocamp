async function buscarComSeguranca(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

// Teste 1: URL válida
buscarComSeguranca("https://openlibrary.org/works/OL20734329W.json")
  .then((data) => console.log("Sucesso:", data?.title));

// Teste 2: URL inválida
buscarComSeguranca("https://openlibrary.org/works/ID_INVALIDO.json")
  .then((data) => console.log("Resultado:", data));
