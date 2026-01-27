# Semana 8 – Banco de Dados Relacional e PostgreSQL

## O papel do banco de dados

O banco de dados é responsável por **armazenar dados de forma persistente**.
Diferente de variáveis em memória, os dados continuam existindo após o servidor reiniciar.

---

## O que é um banco de dados relacional

Bancos relacionais organizam dados em **tabelas** com linhas e colunas.

Conceitos principais:

- tabela
- coluna
- linha (registro)
- chave primária

---

## Modelagem de dados

Antes de criar tabelas, é preciso pensar na estrutura.

Exemplo: entidade Livro

- id
- titulo
- autor
- lido

Essa etapa define como os dados serão armazenados e acessados.

---

## PostgreSQL

PostgreSQL é um banco de dados relacional robusto e amplamente usado.

Características:

- open source
- confiável
- suporte a SQL padrão
- escalável

---

## SQL básico

SQL é a linguagem para interagir com bancos relacionais.

### Criando tabela

```sql
CREATE TABLE livros (
  id SERIAL PRIMARY KEY,
  titulo TEXT NOT NULL,
  autor TEXT,
  lido BOOLEAN
);
```

---

### Inserindo dados

```sql
INSERT INTO livros (titulo, autor, lido)
VALUES ('Dom Casmurro', 'Machado de Assis', true);
```

---

### Buscando dados

```sql
SELECT * FROM livros;
```

---

### Atualizando dados

```sql
UPDATE livros
SET lido = false
WHERE id = 1;
```

---

### Removendo dados

```sql
DELETE FROM livros WHERE id = 1;
```

---

## Conectando Node.js ao PostgreSQL

Para acessar o banco no backend, usamos um cliente SQL.

```js
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
```

---

## Executando queries no backend

```js
const result = await pool.query("SELECT * FROM livros");
return result.rows;
```

---

## Separação de responsabilidades

- Rotas: recebem requisição
- Controllers: lógica
- Camada de dados: acesso ao banco

---

## Persistência real

Agora:

- dados sobrevivem a reinícios
- múltiplos usuários podem acessar
- backend se torna confiável

---

## Integração completa com API

```js
app.get("/livros", async (req, res) => {
  const result = await pool.query("SELECT * FROM livros");
  res.json(result.rows);
});
```

---

## Variáveis de ambiente

Nunca salvar credenciais no código.

```bash
DATABASE_URL=postgres://user:pass@host:5432/db
```

Usar `.env` e `process.env`.

---

## Erros comuns

- Esquecer await
- Não tratar erro de conexão
- Hardcode de senha
- Misturar SQL com lógica de rota

---

## Boas práticas

- Modelar antes de codar
- Usar parâmetros nas queries
- Centralizar acesso ao banco
- Validar dados

---

## Conexão com a próxima semana

Na próxima semana:

- frontend React
- consumo da API real
- fim do frontend estático
