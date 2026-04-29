# 🔴 Exercícios Avançados: Blog Completo

### 1️⃣ Blog: modelagem e criação
Crie duas tabelas:
- `blog_categories` (id, name)
- `blog_posts` (id, title, content, category_id)

Crie uma chave estrangeira ligando o post à categoria.

### 2️⃣ Inserção de dados
Insira 3 categorias (ex: `technology`, `lifestyle`, `food`) e insira 5 posts espalhados por essas categorias.

### 3️⃣ Filtrar posts por categoria (nome)
Busque todos os posts da categoria `"technology"`. Mas atenção: a sua cláusula `WHERE` deve usar o nome em texto da categoria, e não o ID. Isso obriga você a usar um `JOIN`!

### 4️⃣ Estatísticas do blog
Escreva três queries distintas para descobrir:
1. O total de posts no blog (apenas um número).
2. O total de posts por cada categoria (usando `GROUP BY`).
3. Qual é a categoria campeã (a que tem mais posts). Você vai precisar usar `ORDER BY` e limitar (`LIMIT`) o resultado a 1.
