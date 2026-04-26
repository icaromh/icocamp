## 📝 Tratamento de Erros

Nem toda requisição HTTP dá certo. O `fetch` não lança erro automaticamente quando o servidor responde com um status de falha (como `404` ou `500`) — você precisa verificar `response.ok`.

**URL que retorna 404 (não encontrada)**

```
https://openlibrary.org/works/ID_INVALIDO.json
```

**Objetivo**: Escreva uma função `buscarComSeguranca` que:

1. Faz a requisição para a URL recebida como parâmetro
2. Verifica se `response.ok` é `true`
3. Se não for, lança um `Error` com a mensagem `"Recurso não encontrado: <status>"`
4. Se der certo, retorna o JSON
5. Envolve tudo em `try/catch` e imprime o erro no console caso ocorra

**Template**

```javascript
/**
 * Busca dados de uma URL com tratamento de erro.
 * @param {string} url - URL da API
 * @returns {Promise<Object|null>} Dados ou null em caso de erro
 */
async function buscarComSeguranca(url) {
  // Seu código aqui
}

// Teste 1: URL válida
buscarComSeguranca("https://openlibrary.org/works/OL20734329W.json")
  .then((data) => console.log("Sucesso:", data?.title));

// Teste 2: URL inválida
buscarComSeguranca("https://openlibrary.org/works/ID_INVALIDO.json")
  .then((data) => console.log("Resultado:", data));
```

**Saída esperada**

```
Sucesso: Beach Read
Erro na requisição: 404
Resultado: null
```

<details>
  <summary>🫣 Spoiler</summary>

> 1. Dentro do `try`, faça `const response = await fetch(url)`.
> 2. Verifique com `if (!response.ok)`.
> 3. Se falhar, use `throw new Error(...)`.
> 4. No `catch`, imprima o erro com `console.error(...)` e retorne `null`.

</details>
