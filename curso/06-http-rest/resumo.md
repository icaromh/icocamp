# Semana 6 – HTTP, APIs, Fetch e REST

## O papel do HTTP na Web

HTTP é o protocolo que permite a comunicação entre **cliente** (browser/app) e **servidor**.

- Cliente faz uma requisição
- Servidor responde
- Comunicação é stateless (sem memória entre requisições)

---

## Request e Response

Uma comunicação HTTP sempre envolve:

- **Request**: enviada pelo cliente
- **Response**: enviada pelo servidor

Componentes principais:

- URL
- Método HTTP
- Headers
- Body (opcional)

---

## Métodos HTTP

Cada método representa uma intenção.

- `GET` – buscar dados
- `POST` – criar dados
- `PUT` – atualizar dados
- `DELETE` – remover dados

Exemplo mental:

- `GET /livros`
- `POST /livros`
- `DELETE /livros/3`

---

## Status Codes

Indicam o resultado da requisição.

- `200` – sucesso
- `201` – criado
- `400` – erro do cliente
- `401` – não autorizado
- `404` – não encontrado
- `500` – erro do servidor

---

## Headers

Metadados da requisição/resposta.

Exemplos:

- `Content-Type`
- `Authorization`
- `Accept`

```http
Content-Type: application/json
```

---

## Body e JSON

O corpo da requisição/resposta geralmente usa JSON.

```json
{
  "titulo": "Dom Casmurro",
  "autor": "Machado de Assis",
  "lido": true
}
```

JSON é:

- texto
- estruturado
- independente de linguagem

---

## O que é uma API

API é uma interface para comunicação entre sistemas.

- Define contratos
- Expõe dados e ações
- Esconde implementação interna

---

## API REST

REST é um estilo arquitetural.

Princípios:

- Recursos bem definidos (ex: livros)
- Uso correto de métodos HTTP
- URLs previsíveis
- Comunicação via JSON

Exemplo:

```
GET    /livros
POST   /livros
GET    /livros/1
DELETE /livros/1
```

---

## Fetch API

Usada no browser para fazer requisições HTTP.

```js
fetch("/api/livros")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

---

## Fetch com async/await

```js
async function carregarLivros() {
  const response = await fetch("/api/livros");
  const data = await response.json();
  return data;
}
```

---

## Envio de dados com POST

```js
fetch("/api/livros", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ titulo: "1984" }),
});
```

---

## Tratamento de erros

```js
if (!response.ok) {
  throw new Error("Erro na requisição");
}
```

Sempre tratar:

- erros de rede
- erros de servidor
- respostas inválidas

---

## CORS (conceito)

Browsers bloqueiam requisições entre domínios diferentes por segurança.

- CORS define quem pode acessar a API
- Backend controla permissões

---

## Testando APIs

Ferramentas comuns:

- Postman
- Insomnia
- curl

Usadas para:

- testar endpoints
- validar respostas
- simular erros

---

## Mini exemplo: integração front + API

```js
async function adicionarLivro(titulo) {
  await fetch("/api/livros", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ titulo }),
  });

  carregarLivros();
}
```

---

## Boas práticas

- URLs claras
- Métodos corretos
- Não misturar responsabilidades
- Tratar erros
- Validar dados

---

## Conexão com o backend

Esta semana prepara para:

- criar APIs com Node
- integrar frontend e backend
- persistir dados em banco

É a ponte entre **frontend estático** e **aplicações full stack**.
