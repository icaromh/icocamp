# 📘 Lição 5 — Relações e JOINs (Cruzando Dados)

## 🎯 Objetivo desta lição

Entender como o Banco de Dados Relacional organiza informações em tabelas separadas e como podemos "unir" esses dados em uma única consulta (Query).

---

## Por que separar os dados?

Imagine que você tem um Canal no Youtube chamado **Pausa para o Chá**. Você posta vários vídeos de resenhas de livros.

Poderíamos colocar o nome do canal em todos os vídeos? Sim. Mas se um dia você mudar o nome do canal para "Chá com Livros", teria que editar **centenas** de vídeos!

A solução profissional é a **Normalização**:
1. Criamos uma tabela para os **Canais**.
2. Criamos uma tabela para os **Vídeos**.
3. Na tabela de vídeos, apenas dizemos a qual ID de canal aquele vídeo pertence.

---

## 1. O conceito de 1:N (Um para Muitos)

Este é o relacionamento mais comum.
- **Um** Canal pode ter **Muitos** Vídeos.
- **Um** Vídeo pertence a apenas **Um** Canal.

Para fazer isso funcionar, usamos a **Chave Estrangeira (Foreign Key)**.

### Exemplo de Estrutura:

**Tabela: canais**
| id | nome |
| :--- | :--- |
| 1 | Pausa para o Chá |

**Tabela: videos**
| id | titulo | canal_id |
| :--- | :--- | :--- |
| 10 | Resenha: Beach Read | 1 |
| 11 | Resenha: Book Lovers | 1 |
| 12 | Top 5 Romances | 1 |

> O `canal_id` na tabela de vídeos é a nossa **Chave Estrangeira**. Ela "aponta" para o ID 1 da tabela de canais.

---

## 2. Unindo os dados com o JOIN

Se você fizer um `SELECT * FROM videos`, você verá apenas o número `1` na coluna `canal_id`. O usuário não quer ver um número, ele quer ver o nome "Pausa para o Chá".

É aqui que entra o comando **JOIN** (Unir/Juntar).

```sql
SELECT 
  videos.titulo, 
  canais.nome AS nome_do_canal
FROM videos
JOIN canais ON videos.canal_id = canais.id;
```

**Traduzindo o comando:**
- `SELECT videos.titulo, canais.nome`: Eu quero o título do vídeo e o nome do canal.
- `FROM videos`: Comece procurando na tabela de vídeos.
- `JOIN canais`: Junte com a tabela de canais.
- `ON videos.canal_id = canais.id`: A regra da união é: onde o `canal_id` do vídeo for igual ao `id` do canal.

---

## 3. Por que isso é incrível?

Se você mudar o nome do canal na tabela `canais` para "Marcie's Books", a próxima vez que rodar o mesmo `JOIN`, todos os vídeos aparecerão com o nome novo instantaneamente! 🚀

Isso garante que sua aplicação seja organizada, rápida e fácil de manter.

---

## ✍️ Mini-exercício

Vamos praticar a lógica:

1. Imagine que o canal **Pausa para o Chá** (ID 1) acabou de postar um vídeo novo chamado "Resenha: People We Meet on Vacation".
2. Como seria o comando `INSERT` para colocar esse vídeo na tabela `videos`, garantindo que ele pertença ao canal correto?

*Resposta (spoiler)*:
<details>
<summary>Clique aqui para ver o comando</summary>

```sql
INSERT INTO videos (titulo, canal_id) 
VALUES ('Resenha: People We Meet on Vacation', 1);
```
</details>

---

## Próxima lição

[Lição 6 — Integrando o Banco de Dados com Express →](./06-integrando-com-express.md)
