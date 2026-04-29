# 📘 Lição 3 — SQLite e Ferramentas Visuais na Prática

## 🎯 Objetivo desta lição

Preparar nosso ambiente de desenvolvimento configurando o banco de dados e instalando uma ferramenta gráfica para "ver" os dados por trás das cortinas.

---

## Rodando o SQLite no seu MacOS

O SQLite já vem **instalado nativamente** no MacOS! 🎉

Isso significa que você não precisa abrir o terminal e rodar comandos do tipo `brew install sqlite3` ou baixar instaladores complicados. O seu sistema já sabe lidar com arquivos de banco de dados SQLite sem você precisar configurar nada extra. Nós vamos focar em usar ferramentas para visualizar os dados de forma mais amigável.

---

## Como "ver" um banco de dados?

Diferente do JavaScript, onde você dava um `console.log()` e via tudo no terminal, olhar para um arquivo `.db` gerado pelo SQLite não é tão amigável. Se você tentar abrir esse arquivo como texto, verá um monte de caracteres codificados sem sentido.

Precisamos de **Interfaces Gráficas (GUIs)** para nos mostrar essas tabelas de uma forma bonita e organizada. 

Nós recomendaremos duas formas de fazer isso: a extensão do VSCode (rápida e prática) e o DBeaver Lite (profissional e completa).

---

### Opção 1: DBeaver Lite (Recomendado)

O **DBeaver** é uma das ferramentas de banco de dados mais populares e usadas no mercado. A versão "Lite" é gratuita, super amigável e mais do que suficiente para nós.

1. Acesse o site oficial: [https://dbeaver.io/download/](https://dbeaver.io/download/)
2. Baixe o instalador para o MacOS.
3. Instale o aplicativo no seu computador como faria com qualquer outro app.
4. Quando abrirmos nosso arquivo de banco de dados mais à frente, poderemos arrastá-lo para dentro do DBeaver ou usar a opção de conectar em um banco "SQLite".

### Opção 2: Extensão SQLite Viewer no VSCode

Se você preferir não sair do seu editor de código, existe uma extensão excelente para o VSCode que permite espiar dentro do banco de dados rapidinho.

1. Abra o VSCode e vá na aba de **Extensions (Extensões)**.
2. Pesquise por `SQLite Viewer`. O autor da extensão mais recomendada é `alexcvzz`.
3. Clique em **Install**.
4. Sempre que você clicar em um arquivo `.db` no seu VSCode, ele vai abrir uma aba bonita mostrando as tabelas e os dados.

---

## ✍️ Mini-exercício

Vamos testar o seu ambiente!

1. No terminal do seu projeto, apenas digite o comando abaixo para criar um arquivo vazio onde nosso banco viverá:
   ```bash
   touch estante.db
   ```
2. Abra o seu VSCode. Você verá o arquivo `estante.db` listado. 
3. Clique nele usando a extensão SQLite Viewer (ou abra o DBeaver Lite e conecte neste arquivo).
4. A tela deve mostrar que o banco está vazio (ainda não temos tabelas!).

Tudo certo? Então prepare-se, porque na próxima lição vamos começar a criar nossas tabelas e inserir nossos livros usando a linguagem SQL!

---

## Próxima lição

[Lição 4 — O CRUD em SQL (Escrevendo Queries) →](./04-sql-crud.md)
