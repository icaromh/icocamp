# 🟡 Exercícios de Relações e JOIN

Nestes exercícios vamos separar os produtos e suas categorias em tabelas diferentes e aprender a cruzá-los com o comando `JOIN`.

### 1️⃣ Criar tabela de categorias
Crie a tabela `categories` com:
- `id` (PK, auto incremental)
- `name` (único, não nulo)

### 2️⃣ Produtos com categoria por ID
Crie a tabela `products_v2` com:
- `id`
- `name`
- `price`
- `category_id` (INTEGER, que será a nossa Foreign Key apontando para `categories.id`)

### 3️⃣ Inserir categorias e produtos relacionados
- Insira 2 categorias diferentes primeiro (ex: 'food' e 'electronics').
- Insira produtos usando o respectivo `category_id` (faça um `SELECT * FROM categories` para descobrir quais IDs foram gerados).

### 4️⃣ Listar produtos com nome da categoria
Use o `JOIN` para listar:
- nome do produto
- preço
- nome da categoria (vinda da tabela `categories`)

### 5️⃣ Filtrar produtos por categoria (PK)
Busque produtos da categoria `"food"` usando o **id da categoria** (`category_id`), não o texto direto.

### 6️⃣ Total gasto por categoria
Calcule o total gasto por categoria usando agrupamento.
O resultado esperado é algo como:
```
food → 45.90
electronics → 399.99
```
> **Dica:** use a cláusula `GROUP BY`.
