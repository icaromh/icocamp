# 🟢 Exercícios de CRUD Básico

### 1️⃣ Criar tabela de clientes
Crie a tabela `clients` com:
- `id` (PK, auto incremental)
- `name` (TEXT, obrigatório)
- `email` (TEXT, obrigatório)

### 2️⃣ Inserir clientes
Insira **3 clientes diferentes** na tabela `clients`.

### 3️⃣ Listar todos os clientes
Busque todos os registros da tabela `clients`.

### 4️⃣ Atualizar email de um cliente
Atualize o email de um cliente usando o `id`.
> **Dica:** nunca use UPDATE sem WHERE.

### 5️⃣ Remover um cliente
Delete um cliente pelo `id`.

---

### 6️⃣ Criar tabela de produtos
Crie a tabela `products` com:
- `id`
- `name`
- `price` (REAL)
- `category` (TEXT)

### 7️⃣ Inserir produtos
Insira **5 produtos** com categorias diferentes (ex: `food`, `cleaning`, `electronics`).

### 8️⃣ Filtrar produtos por categoria (string)
Busque apenas produtos da categoria `"food"`.

### 9️⃣ Contar produtos por categoria
Conte quantos produtos existem na categoria `"electronics"`.
> **Dica:** use `COUNT(*)`.

### 🔟 Total gasto em uma nota fiscal
Some o preço de todos os produtos cadastrados.
> **Dica:** use `SUM(coluna)`.
