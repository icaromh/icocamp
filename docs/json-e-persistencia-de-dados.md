# JSON e persistência local de dados

Até agora, você trabalhou com **objetos JavaScript bem modelados**:
- entidades
- coleções
- estado
- responsabilidades

Essas estruturas vivem **na memória** enquanto a página está aberta.

Neste capítulo, vamos responder a uma nova pergunta:

> Como transformar esses dados em algo que possa ser **salvo, enviado ou recuperado depois**?

Para isso, vamos conhecer o **JSON**.

## O que é JSON (JavaScript Object Notation)

**JSON (JavaScript Object Notation)** é um **formato de dados**.

Ele serve para:
- armazenar dados
- enviar dados
- salvar dados
- trocar dados entre sistemas

JSON **não é código JavaScript**, apesar de parecer muito com objetos JS.

## Objeto JavaScript vs JSON

Compare:

### Objeto JavaScript
```js
const book = {
  title: "Pride and Prejudice",
  totalPages: 432,
  isRead: false
};
```

### JSON
```json
{
  "title": "Pride and Prejudice",
  "totalPages": 432,
  "isRead": false
}
```

Eles são parecidos, mas **não são a mesma coisa**.

## Diferenças importantes

JSON tem regras mais rígidas:

| JavaScript Object | JSON |
|-------------------|------|
| aceita funções    | ❌ não aceita |
| aceita comentários | ❌ não aceita |
| chaves sem aspas  | ❌ não aceita |
| aspas simples     | ❌ não aceita |
| apenas dados      | ✅ |

JSON existe para **dados**, não para comportamento.

## Por que JSON é tão importante

JSON é o formato padrão da web para dados.

Ele é usado em:
- APIs
- backend
- bancos de dados
- arquivos de configuração
- armazenamento local

Quando você usa `fetch`, backend ou banco de dados no futuro, **tudo gira em torno de JSON**.

## Transformando objetos em JSON — JSON.stringify

Para converter um objeto JavaScript em JSON, usamos:

```js
JSON.stringify()
```

Exemplo:
```js
const book = {
  title: "Pride and Prejudice",
  totalPages: 432,
  isRead: false
};

const jsonString = JSON.stringify(book);

console.log(jsonString);
```

Resultado:
```json
{"title":"Pride and Prejudice","totalPages":432,"isRead":false}
```

Agora isso é **texto**, não mais um objeto.

## Transformando JSON em objeto — JSON.parse

Para fazer o caminho inverso, usamos:

```js
JSON.parse()
```

Exemplo:
```js
const jsonString = '{"title":"Pride and Prejudice","totalPages":432,"isRead":false}';

const bookObject = JSON.parse(jsonString);

console.log(bookObject.title);
```

Agora você tem novamente um **objeto JavaScript**.

## Onde JSON é usado no navegador

Um uso muito comum de JSON é junto com o **localStorage**.

## O que é localStorage

`localStorage` faz parte da **Web Storage API**.

Ele permite:
- salvar dados no navegador
- manter dados mesmo após fechar a página
- simular persistência sem backend

⚠️ Importante:
- localStorage **só salva strings**
- não salva objetos diretamente

Por isso precisamos de JSON.

## Salvando dados no localStorage

Fluxo mental:
1. Objeto JavaScript
2. Converter para JSON
3. Salvar como string

Exemplo:
```js
const book = {
  title: "Pride and Prejudice",
  totalPages: 432,
  isRead: false
};

const json = JSON.stringify(book);

localStorage.setItem("book", json);
```

Agora o dado está salvo no navegador.

## Recuperando dados do localStorage

Fluxo inverso:
1. Ler string
2. Converter de JSON para objeto

Exemplo:
```js
const storedJson = localStorage.getItem("book");

const bookObject = JSON.parse(storedJson);

console.log(bookObject.title);
```

Você recuperou um **objeto JavaScript completo**.

## Relacionando com o que você já aprendeu

Você pode salvar:
- um `book`
- uma `bookshelf`
- uma lista de seções
- o estado de leitura

Tudo isso usando:
- modelagem correta
- JSON
- localStorage

Sem backend.  
Sem banco de dados.  
Apenas o navegador.

## Limitações importantes

localStorage:
- não é seguro
- não é compartilhado entre dispositivos
- tem limite de tamanho
- não substitui um backend

Mas é **perfeito para aprender**.

## Conclusão

Neste capítulo, você aprendeu:

- o que é JSON
- diferença entre objeto JS e JSON
- como usar `JSON.stringify`
- como usar `JSON.parse`
- como persistir dados com `localStorage`

Isso fecha um ciclo importante:

> **modelar → transformar → persistir dados**

No próximo passo natural, esse conhecimento se conecta diretamente com:
- APIs
- backend
- bancos de dados
