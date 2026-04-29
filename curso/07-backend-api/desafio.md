# Desafio — Semana 7: API da Minha Estante Virtual

## 🎯 Objetivo

Construir a API completa da **Minha Estante Virtual** — com todas as rotas do CRUD, validações, filtros e dados iniciais.

Esta é a primeira vez que você cria algo que outros programas podem consumir.

---

## Contexto

Você foi contratada para criar o backend de um app de estante de livros.
O frontend já existe (será construído na semana 9 em React), mas ele precisa de uma API para funcionar.

Seu trabalho esta semana: entregar essa API.

---

## Estrutura esperada

```
estante-api/
├── package.json     (com "type": "module" e scripts start/dev)
├── .gitignore       (com node_modules)
├── node_modules/
└── server.js
```

---

## Parte 1 — Estrutura e dados iniciais (obrigatório)

### 1.1 — Configure o projeto

- `package.json` com `"type": "module"` e scripts `start` e `dev`
- Express instalado
- `.gitignore` com `node_modules`

### 1.2 — Defina a estrutura de um livro

Cada livro deve ter:

```js
{
  id: 1,
  titulo: "Beach Read",
  autora: "Emily Henry",
  paginas: 361,
  lido: false,
  categoria: "romance"
}
```

### 1.3 — Dados iniciais (seeding)

Comece com **3 livros** já no array, para facilitar os testes:

```js
let livros = [
  { id: 1, titulo: "Beach Read", autora: "Emily Henry", paginas: 361, lido: false, categoria: "romance" },
  { id: 2, titulo: "People We Meet on Vacation", autora: "Emily Henry", paginas: 384, lido: true, categoria: "romance" },
  { id: 3, titulo: "Book Lovers", autora: "Emily Henry", paginas: 400, lido: false, categoria: "romance" },
];
let proximoId = 4;
```

---

## Parte 2 — Rotas obrigatórias

### `GET /livros`

Retorna todos os livros da estante.

```
curl http://localhost:3000/livros
```

---

### `GET /livros/:id`

Retorna um livro específico. Se não encontrar, retorna `404`.

```
curl http://localhost:3000/livros/1
curl http://localhost:3000/livros/99   → 404
```

---

### `POST /livros`

Adiciona um novo livro. Campos **obrigatórios**: `titulo` e `autora`.

O servidor deve:
- Validar que `titulo` e `autora` foram enviados
- Retornar `400` se estiverem faltando
- Retornar `201` com o livro criado (incluindo o ID gerado)

```bash
curl -X POST http://localhost:3000/livros \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Happy Place", "autora": "Emily Henry", "paginas": 400}'
```

---

### `PATCH /livros/:id`

Atualiza campos de um livro existente (apenas os campos enviados).

Casos de uso:
- Marcar como lido: `{ "lido": true }`
- Corrigir número de páginas: `{ "paginas": 380 }`
- Mudar categoria: `{ "categoria": "contemporaneo" }`

```bash
curl -X PATCH http://localhost:3000/livros/1 \
  -H "Content-Type: application/json" \
  -d '{"lido": true}'
```

---

### `DELETE /livros/:id`

Remove um livro da lista. Retorna `204` em caso de sucesso, `404` se não encontrar.

```bash
curl -X DELETE http://localhost:3000/livros/3
```

---

## Parte 3 — Filtros por query param (obrigatório)

### `GET /livros?lido=true`

Retorne apenas os livros lidos (ou não lidos).

```bash
curl "http://localhost:3000/livros?lido=true"
curl "http://localhost:3000/livros?lido=false"
```

Dica:

```js
app.get("/livros", (req, res) => {
  let resultado = livros;

  if (req.query.lido !== undefined) {
    const filtroLido = req.query.lido === "true";
    resultado = livros.filter((l) => l.lido === filtroLido);
  }

  res.json(resultado);
});
```

---

## Parte 4 — Rota de estatísticas (obrigatório)

### `GET /estatisticas`

Retorna um resumo da estante:

```json
{
  "total": 3,
  "lidos": 1,
  "naoLidos": 2,
  "totalPaginas": 1145,
  "paginasLidas": 384
}
```

---

## Parte 5 — Extras (escolha pelo menos 1)

- [ ] `GET /livros?categoria=romance` — filtrar por categoria
- [ ] `GET /livros?autora=Emily+Henry` — filtrar por autora
- [ ] Validar que `paginas` é um número quando enviado
- [ ] Rota `GET /livros/aleatorio` que retorna um livro não lido aleatório
- [ ] Rota 404 global para rotas que não existem

---

## ✅ Critérios de conclusão

### Entrega (código)

- [ ] Projeto Node.js configurado com `package.json` correto
- [ ] Express instalado e `.gitignore` com `node_modules`
- [ ] Todas as 5 rotas obrigatórias implementadas e funcionando
- [ ] Validações de campos obrigatórios no POST
- [ ] Status codes corretos (201, 204, 400, 404)
- [ ] Filtro por `?lido=` funcionando
- [ ] Rota `/estatisticas` funcionando

### Explicação (apresentação)

Prepare uma explicação curta (3–5 minutos) cobrindo:

- [ ] O que é um servidor e como o Express funciona
- [ ] Por que `express.json()` é necessário
- [ ] A diferença entre `req.params` e `req.body` e `req.query`
- [ ] Por que os dados somem quando o servidor é reiniciado
- [ ] O que muda na semana 8 (banco de dados)

---

## Sequência de testes recomendada

Use o [Hoppscotch](https://hoppscotch.io) ou `curl` e siga essa ordem:

```txt
1. GET  /livros                    → ver os 3 livros iniciais
2. POST /livros                    → criar "Happy Place"
3. GET  /livros                    → confirmar que agora são 4
4. GET  /livros/4                  → ver o livro criado
5. PATCH /livros/4  lido: true     → marcar como lido
6. GET  /livros/4                  → confirmar lido: true
7. DELETE /livros/3                → remover "Book Lovers"
8. GET  /livros                    → confirmar que são 3
9. GET  /livros?lido=true          → ver apenas os lidos
10. GET /estatisticas              → ver o resumo
11. GET /livros/99                 → confirmar 404
12. POST /livros sem titulo        → confirmar 400
```
