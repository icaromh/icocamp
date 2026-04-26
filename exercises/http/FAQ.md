# ❓ FAQ — Exercícios de HTTP e Fetch API

Dúvidas comuns de quem está aprendendo `fetch`, `async/await` e APIs pela primeira vez.

---

## 🌐 Dúvidas Gerais

### "O que é exatamente uma API?"

Pensa assim: a Open Library tem um banco de dados gigante de livros. Eles poderiam te dar acesso direto ao banco de dados deles — mas isso seria perigoso e complicado. Em vez disso, eles criaram uma **porta de entrada organizada**: você manda uma URL específica, eles te respondem com os dados no formato JSON.

Essa porta de entrada é a API. É um contrato: "se você pedir assim, eu respondo assim".

---

### "Onde vejo o que a API retorna antes de programar?"

Basta abrir a URL no browser! Tente abrir isso:

```
https://openlibrary.org/works/OL20875704W.json
```

Você vai ver o JSON cru. Isso te ajuda a entender quais campos existem (`title`, `description`, etc.) antes de escrever qualquer código.

Outra opção: instale a extensão **JSON Viewer** no browser para ver o JSON formatado e com cores.

---

### "O fetch funciona no Node.js ou só no browser?"

A partir do **Node.js v18**, o `fetch` já vem embutido — não precisa instalar nada. Em versões anteriores, você precisaria de um pacote como `node-fetch`.

Para saber qual versão você tem:

```bash
node --version
```

---

### "Como testo o código sem criar um arquivo .js?"

Abra o browser, pressione **F12** (ou clique com o botão direito → Inspecionar), vá na aba **Console** e cole o código lá. O `fetch` funciona direto no console do browser.

---

## ⏳ Dúvidas sobre `async` / `await` / Promises

### "Por que a função precisa ser `async`?"

O `await` só funciona dentro de uma função marcada com `async`. Ele "pausa" a execução daquela função enquanto espera a Promise ser resolvida — mas sem bloquear o resto do programa.

Se você tentar usar `await` fora de uma função `async`, vai receber um erro:

```
SyntaxError: await is only valid in async functions
```

---

### "O que é uma Promise? Preciso entender isso para fazer os exercícios?"

Uma Promise é uma promessa de que algo vai acontecer no futuro (um valor que ainda não chegou). O `fetch` retorna uma Promise porque a requisição leva tempo.

Para os exercícios, você não precisa entender Promise a fundo — basta saber que:

- `await` espera a Promise terminar e te dá o valor
- `.then(resultado => ...)` faz a mesma coisa, mas com encadeamento

---

### "Qual a diferença entre usar `.then()` e `async/await`?"

Fazem a mesma coisa, são apenas estilos diferentes:

```javascript
// Com .then()
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));

// Com async/await (mais legível)
async function buscar() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
```

Prefira `async/await` — é mais fácil de ler e de depurar.

---

### "Por que chamar `.json()` no resultado do fetch? Não já é JSON?"

Não! O `fetch` te retorna um objeto `Response` — que é basicamente a "embalagem" da resposta HTTP (com status code, headers, etc.). O corpo da resposta ainda não foi lido.

Chamar `.json()` diz: "lê o corpo dessa resposta e converte de texto para um objeto JavaScript". Isso também é assíncrono, por isso precisa de `await`.

```javascript
const response = await fetch(url); // → objeto Response (ainda não tem os dados)
const data = await response.json(); // → agora sim, objeto JavaScript com os dados
```

---

## 🚨 Dúvidas sobre Tratamento de Erros (Exercício 2)

### "Por que `fetch` não lança erro quando recebe 404?"

Esse é um comportamento contra-intuitivo! O `fetch` só lança exceção em casos de **falha de rede** (sem internet, domínio não existe, etc.). Se o servidor respondeu — mesmo com erro 404, 500, etc. — o `fetch` considera um "sucesso" e não lança erro.

Por isso você precisa verificar manualmente:

```javascript
if (!response.ok) {
  throw new Error(`Erro: ${response.status}`);
}
```

`response.ok` é `true` quando o status está entre 200 e 299.

---

### "O que é `response.status`?"

É o código HTTP que o servidor devolveu. Os mais comuns:

| Status | Significado |
|--------|-------------|
| `200`  | OK — deu certo |
| `201`  | Created — recurso criado |
| `400`  | Bad Request — você mandou algo errado |
| `401`  | Unauthorized — precisa de autenticação |
| `404`  | Not Found — URL não existe |
| `500`  | Internal Server Error — bug no servidor |

---

### "Qual a diferença entre `throw` e `return` dentro de um `catch`?"

- `throw` relança o erro — quem chamou a função vai receber a exceção
- `return null` engole o erro silenciosamente e devolve `null` como valor

Para exercícios e UIs, `return null` é mais prático: permite checar `if (resultado === null)` e mostrar uma mensagem amigável ao usuário, sem travar a aplicação.

---

### "O que é `data?.title`? Por que o `?` no meio?"

É o **optional chaining** (`?.`). Se `data` for `null` ou `undefined`, em vez de lançar um erro (`Cannot read property 'title' of null`), ele simplesmente retorna `undefined`.

```javascript
// Sem optional chaining — erro se data for null
console.log(data.title);

// Com optional chaining — seguro
console.log(data?.title); // → undefined se data for null
```

---

## 🔍 Dúvidas sobre Busca e Filtro (Exercício 3)

### "Como sei que a resposta tem um campo `docs`?"

Abra a URL no browser e leia a resposta:

```
https://openlibrary.org/search.json?q=emily+henry&limit=3
```

Você vai ver um objeto com `numFound`, `start` e `docs`. O `docs` é o array de livros.

Sempre explore a resposta da API antes de codificar — é parte do trabalho.

---

### "Por que filtrar `first_publish_year !== undefined` em vez de só `first_publish_year`?"

Porque `0` e `undefined` são ambos falsy em JavaScript. Se um livro tiver `first_publish_year: 0` (improvável, mas possível), a checagem `if (doc.first_publish_year)` excluiria ele erroneamente.

Usar `!== undefined` é mais preciso: "só quero livros onde esse campo existe".

---

### "Como funciona `sort((a, b) => a.ano - b.ano)`?"

O `.sort()` espera uma função de comparação que retorna:
- número **negativo** → `a` vem antes de `b`
- número **positivo** → `b` vem antes de `a`  
- `0` → mesma posição

`a.ano - b.ano` faz exatamente isso de forma elegante: se o ano de `a` é menor, o resultado é negativo → `a` fica primeiro → ordem crescente (do mais antigo ao mais recente).

---

## 📤 Dúvidas sobre POST (Exercício 4)

### "Por que preciso de `JSON.stringify()`? Não posso passar o objeto direto?"

O `body` do `fetch` espera uma **string** (ou Blob, FormData, etc.) — não um objeto JavaScript. O `JSON.stringify()` converte o objeto para uma string no formato JSON:

```javascript
JSON.stringify({ titulo: "1984" })
// → '{"titulo":"1984"}'
```

Sem isso, o objeto seria convertido para `"[object Object]"` — o servidor receberia lixo.

---

### "O `Content-Type: application/json` é obrigatório?"

Tecnicamente não — a requisição vai chegar ao servidor de qualquer jeito. Mas sem esse header, o servidor **não sabe como interpretar o body**. É como mandar uma carta sem escrever o idioma: o destinatário pode não entender.

Sempre inclua quando estiver enviando JSON.

---

### "Os dados que enviei realmente foram criados no servidor?"

No caso do JSONPlaceholder: **não**. É uma API de teste que simula as respostas, mas não persiste nada. Toda vez que você fizer um POST, ela retorna um objeto como se tivesse criado — mas não há banco de dados real por trás.

É perfeito para aprender sem efeitos colaterais.

---

## ⚡ Dúvidas sobre Promise.all (Exercício 5)

### "Por que não posso usar um `for` com `await` em vez de `Promise.all`?"

Você pode! Mas aí as requisições acontecem **em série** — uma espera a outra terminar:

```javascript
// Em série — lento (espera cada uma terminar antes de começar a próxima)
for (const url of urls) {
  const data = await fetch(url).then(r => r.json());
}

// Em paralelo — rápido (todas disparam ao mesmo tempo)
const resultados = await Promise.all(urls.map(url => fetch(url).then(r => r.json())));
```

Se você tem 3 requisições de 1 segundo cada: em série leva 3s, em paralelo leva ~1s.

---

### "O que acontece se uma das requisições do `Promise.all` falhar?"

O `Promise.all` tem um comportamento de **"falha total"**: se qualquer Promise falhar, toda a operação falha e o `catch` é disparado.

Se você quiser que requisições independentes não derrubem as outras, use `Promise.allSettled` — ele espera todas terminarem e te diz quais deram certo e quais falharam.

---

### "Não entendi esse `.map()` dentro do `Promise.all`..."

Vamos destrinchar linha por linha:

```javascript
const promises = urls.map(url => fetch(url).then(r => r.json()));
```

Isso cria um array de Promises (ainda não resolvidas):

```javascript
[
  Promise { <pending> },  // → busca url[0]
  Promise { <pending> },  // → busca url[1]
  Promise { <pending> },  // → busca url[2]
]
```

```javascript
const livros = await Promise.all(promises);
```

Isso espera **todas** resolverem. `livros` agora é um array de objetos JSON:

```javascript
[
  { title: "Beach Read", ... },
  { title: "People We Meet on Vacation", ... },
  { title: "Book Lovers", ... },
]
```

```javascript
return livros.map(livro => livro.title);
```

Extrai só os títulos:

```javascript
["Beach Read", "People We Meet on Vacation", "Book Lovers"]
```

---

## 🐛 Erros comuns e como resolver

### `TypeError: fetch is not defined`

Você está usando Node.js abaixo da versão 18. Solução: atualize o Node.js ou use `node-fetch`:

```bash
npm install node-fetch
```

---

### `SyntaxError: await is only valid in async functions`

Você usou `await` fora de uma função `async`. Coloque o código dentro de uma função marcada com `async` ou envolva em um IIFE:

```javascript
(async () => {
  const data = await fetch(url).then(r => r.json());
  console.log(data);
})();
```

---

### A função retorna `Promise { <pending> }` em vez do valor

Você esqueceu de usar `await` ou `.then()` ao chamar a função. Funções `async` **sempre** retornam uma Promise:

```javascript
// ❌ Errado — imprime Promise { <pending> }
const resultado = buscarLivro(url);
console.log(resultado);

// ✅ Certo — espera a Promise resolver
const resultado = await buscarLivro(url);
console.log(resultado);
```

---

### O servidor retorna dados mas `livro.title` aparece como `undefined`

O campo pode ter um nome diferente do que você espera. Antes de acessar, faça um `console.log(livro)` para ver a estrutura completa do objeto e descobrir o nome exato do campo.
