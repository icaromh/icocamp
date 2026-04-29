# 📘 Lição 4 — O CRUD em SQL (Escrevendo Queries)

## 🎯 Objetivo desta lição

Aprender a escrever comandos na linguagem SQL para realizar as quatro operações fundamentais do CRUD: Criar, Ler, Atualizar e Deletar.

---

## O que é uma "Query"?

Na programação, você vai escutar muito a palavra **Query** (lê-se *"qué-ri"*).
Uma query nada mais é do que uma **consulta** ou uma **instrução** que você envia para o banco de dados. 

Sempre que dizemos "vou rodar uma query", significa que vamos escrever um comando na linguagem SQL pedindo para o banco de dados fazer algo: criar uma tabela, inserir um dado, buscar uma lista ou deletar algo.

---

## 💡 Dica de Ouro: O arquivo `schema.sql`

O SQL é uma linguagem com regras próprias, assim como o JavaScript. Para facilitar a nossa vida, **sempre que for testar queries e criar a estrutura do banco**, é uma boa prática salvar esses comandos em um arquivo com a extensão `.sql` (como `schema.sql`).

**Por que fazer isso?**
Porque o VSCode entende arquivos `.sql` e vai aplicar o que chamamos de **Syntax Highlight** (realce de sintaxe). 
Em vez de você ver um texto preto e branco chato, o VSCode vai pintar os comandos (como `CREATE`, `SELECT`) com cores bonitinhas, igual ele faz no seu código `.js`! Isso previne muitos erros de digitação.

### Comentários no SQL
Você também pode escrever **comentários** nos arquivos `.sql` usando dois traços seguidos (`--`). Eles serão ignorados pelo banco de dados:

```sql
-- Isso é um comentário!
-- Abaixo, vou criar a tabela de livros:
CREATE TABLE livros ...
```

---

## 1. Criando a Tabela (CREATE TABLE)

A primeira query que precisamos rodar não é para colocar um livro, mas sim para **criar a estrutura (a Tabela)** que vai guardar os livros.

```sql
-- Cria a tabela livros se ela não existir
CREATE TABLE livros (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo TEXT NOT NULL,
  autor TEXT,
  paginas INTEGER,
  lido INTEGER DEFAULT 0
);
```

**Explicando a mágica:**
- `PRIMARY KEY AUTOINCREMENT`: O banco se encarrega de dar o id `1`, depois `2`, `3` sozinho. Você nunca precisa enviar o ID manualmente!
- `NOT NULL`: Garante que não deixem criar o livro sem título.
- `DEFAULT 0`: Se ninguém disser se o livro foi lido ou não, ele entra como falso (`0` no SQLite) por padrão.

---

## 2. Inserir dados (INSERT) → O 'Create' do CRUD

```sql
-- Inserindo um livro na tabela
INSERT INTO livros (titulo, autor, paginas, lido)
VALUES ('Beach Read', 'Emily Henry', 384, 1);
```

---

## 3. Buscar dados (SELECT) → O 'Read' do CRUD

```sql
-- Traz TODAS as colunas de TODOS os livros
SELECT * FROM livros;
```

O `*` significa "todas as colunas". E se você quiser **filtrar**, em vez de usar `.filter()` do JavaScript, nós usamos a poderosa cláusula **`WHERE`**:

```sql
-- Traz os livros em que a coluna lido seja igual a 1 (verdadeiro)
SELECT * FROM livros WHERE lido = 1;

-- Buscar um livro específico pelo ID
SELECT * FROM livros WHERE id = 1;
```

---

## 4. Atualizar dados (UPDATE) → O 'Update' do CRUD

```sql
-- Atualiza a coluna "lido" para verdadeiro (1) no livro de ID 2
UPDATE livros
SET lido = 1
WHERE id = 2;
```

🚨 **Cuidado extremo:** NUNCA faça um `UPDATE` sem a cláusula `WHERE`. Se você rodar apenas `UPDATE livros SET lido = 1;`, **todos os livros do banco de dados inteiro** serão marcados como lidos! 

---

## 5. Remover dados (DELETE) → O 'Delete' do CRUD

```sql
-- Apaga o livro de ID 3
DELETE FROM livros WHERE id = 3;
```

🚨 **A mesma regra se aplica:** NUNCA faça um `DELETE` sem o `WHERE`. Se rodar apenas `DELETE FROM livros;`, você apagará **absolutamente tudo**!

---

## ✍️ Mini-exercício

Abra o VSCode:
1. Crie um arquivo chamado `schema.sql` no seu projeto.
2. Copie e cole a query de `CREATE TABLE` descrita na seção 1 acima. (Veja as cores bonitinhas!).
3. Agora, copie a query de `INSERT` da seção 2 e mude os dados para inserir o seu livro favorito.
4. (Opcional) Copie as queries do seu arquivo `schema.sql` e execute dentro do **DBeaver Lite** usando a aba de Scripts SQL apontando para o seu banco de dados `estante.db` para ver a tabela sendo criada de verdade.

Na próxima lição, vamos ver como nosso servidor Node.js (que está usando Javascript) consegue rodar essas mesmas queries SQL!

---

## Próxima lição

[Lição 5 — Relações e JOINs (Cruzando Dados) →](./05-relacoes-e-joins.md)
