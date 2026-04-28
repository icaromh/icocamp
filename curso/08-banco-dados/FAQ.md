# ❓ FAQ — Semana 8: Banco de Dados Relacional e SQLite

Aqui estão as dúvidas e erros mais comuns ao trabalhar com Banco de Dados na nossa Estante Virtual.

---

## 🗄️ SQLite e o arquivo `.db`

### "O arquivo `.db` não aparece no meu projeto. Como eu crio?"
Se você rodou o servidor com `const db = new Database('estante.db');`, e esse arquivo não existia, a biblioteca `better-sqlite3` deveria criar ele automaticamente. 
Se você quer criar manualmente antes, basta ir no terminal e rodar `touch estante.db`.

### "Abri o arquivo `.db` no VSCode e é tudo lixo codificado"
Isso é normal! Arquivos de banco de dados são arquivos binários otimizados para a máquina ler, não humanos. Para conseguir ler, você precisa usar a Extensão `SQLite Viewer` do VSCode ou abrir no DBeaver Lite. **Nunca tente editar o texto dentro do arquivo `.db` manualmente**.

---

## 🖥️ GUI: DBeaver Lite e VSCode

### "O DBeaver não está achando o meu arquivo `.db`!"
Para abrir um banco SQLite no DBeaver:
1. Vá no menu `Database > New Database Connection`.
2. Escolha **SQLite** na lista.
3. No campo "Path" ou "Database", clique em `Browse` e procure pelo seu arquivo `estante.db` gerado na pasta do projeto.
4. Clique em "Finish".

### "Por que meus comandos não ficam coloridos no VSCode?"
Para que o VSCode aplique as cores (*Syntax Highlighting*) aos comandos `CREATE`, `SELECT`, etc, o arquivo **precisa** ter a extensão `.sql` no nome (ex: `schema.sql`). Se o arquivo for `.txt` ou `.md`, ele não vai colorir.

---

## 📝 SQL: Dúvidas de Sintaxe

### "Recebi um erro `no such table: livros`"
Você está tentando fazer um `INSERT` ou `SELECT` numa tabela que ainda não foi criada.
Lembre-se: conectar no arquivo `estante.db` **não cria as tabelas magicamente**. Você precisa primeiro abrir sua GUI (DBeaver ou extensão), colar o seu comando `CREATE TABLE livros ...` e **executar** essa query para que a tabela nasça dentro do arquivo.

### "Minha query dá erro de Syntax Error near..."
Geralmente é um problema de digitação simples:
- Esqueceu a vírgula separando as colunas no `CREATE TABLE`?
- Colocou uma vírgula sobrando no último campo?
- Esqueceu de fechar parênteses?

### "Como faço para apagar todos os dados para testar do zero?"
Você pode fazer de duas formas:
1. Deletar os dados da tabela: `DELETE FROM livros;`
2. Ou deletar a tabela inteira e recriar: `DROP TABLE livros;` (e depois roda o `CREATE TABLE` de novo).

---

## 🔗 Integração com Node.js (`better-sqlite3`)

### "Qual a diferença entre `.run()`, `.all()` e `.get()`?"
A biblioteca precisa saber o que você espera de resposta da sua query:
- `.all()`: Você quer **todos** os resultados que baterem com a query. Retorna um *Array de Objetos*. Usado no GET `/livros`.
- `.get()`: Você quer **somente o primeiro** resultado que achar. Retorna um único *Objeto*. Usado no GET `/livros/:id`.
- `.run()`: Você quer apenas **executar** o comando, não quer receber dados de livros de volta. Usado para INSERT, UPDATE e DELETE.

### "Erro: `SqliteError: bind parameter count differs from number of values`"
Esse erro significa que você colocou uma quantidade de pontos de interrogação `?` na query diferente da quantidade de parâmetros que você passou no `.run()`.

```js
// ❌ ERRO: Tem 3 interrogações, mas passou 4 valores.
db.prepare('INSERT INTO livros (titulo, autor, lido) VALUES (?, ?, ?)')
  .run(titulo, autor, lido, paginas); 

// ✅ CORRETO: 3 interrogações = 3 valores.
db.prepare('INSERT INTO livros (titulo, autor, lido) VALUES (?, ?, ?)')
  .run(titulo, autor, lido); 
```

---

## 🐛 Erros comuns adicionais

### "Erro ao instalar o better-sqlite3"
O pacote `better-sqlite3` compila código em C na sua máquina quando é instalado. Se der erro na instalação, certifique-se de que:
- Você está com Node.js atualizado (v18 ou superior).
- Você tem ferramentas de build (No MacOS, você já deve ter caso tenha instalado o XCode Command Line Tools).
- Se a dor persistir, pesquise o log de erro exato no Google/StackOverflow.

### "Atualizei a tabela, mas a API não pegou os dados!"
Verifique no seu código se você está esquecendo de retornar ou usar o objeto processado pelo banco. E se você atualizou dados manuais no DBeaver, não esqueça de clicar em "Save" (ou Commit) lá no DBeaver para que os dados sejam efetivamente gravados no arquivo `.db` e fiquem visíveis para a API Node.
