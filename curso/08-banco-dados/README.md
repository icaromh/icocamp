# 📚 Bootcamp Marcie — Semana 8

[📺 Codecademy — Intro to SQL](https://www.codecademy.com/learn/intro-to-sql)  
[📺 SQL Explained in 100 Seconds](https://www.youtube.com/watch?v=zsjvFFKOm3c)  

> 💬 Ficou travada com o banco de dados? Consulte o **[FAQ](./FAQ.md)** com os erros e dúvidas mais comuns antes de pedir ajuda.

## Banco de Dados Relacional com SQLite: Transformando a Estante Virtual em um sistema persistente

Projeto em evolução: **Minha Estante Virtual**

## 🎯 Objetivo da semana

Ao final desta semana, a aluna será capaz de:

- Entender a diferença entre dados em memória e dados persistentes
- Compreender conceitos básicos de banco de dados relacional (Tabela, Coluna, Linha, Chave Primária)
- Instalar e utilizar ferramentas visuais para banco de dados (DBeaver Lite e extensões do VSCode)
- Criar e manipular um banco de dados **SQLite**
- Escrever consultas **SQL** básicas (CRUD)
- Conectar a API em Node.js/Express ao banco de dados, substituindo arrays por SQL

> Nesta semana, nossa aplicação finalmente ganha uma memória de longo prazo. Chega de perder todos os livros quando reiniciamos o servidor!

## 🧠 Conceito central da semana

> Nada muda conceitualmente. Só muda onde os dados vivem.

Até agora, você usou arrays e métodos como `filter` ou `push`. Agora você usará tabelas e comandos SQL como `SELECT` e `INSERT`. A lógica de negócio é a mesma, apenas a ferramenta de armazenamento muda.

## 🧩 Domínio do problema: Persistência real

Na semana passada, criamos a "cozinha" da aplicação (o backend). Mas nossa geladeira desliga toda vez que saímos do ambiente. Precisamos de uma despensa permanente.
Vamos usar o **SQLite**, um banco de dados leve, prático, e que salva tudo em um único arquivo `.db`.

---

## 📘 Conteúdos da semana (passo a passo)

### 1️⃣ Por que precisamos de um Banco de Dados?
[Lição 1 →](./01-por-que-banco-de-dados.md)  
A transição da memória temporária (RAM) para a persistência em disco. 

### 2️⃣ Conceitos Fundamentais e Modelagem
[Lição 2 →](./02-conceitos-fundamentais.md)  
Tabelas, colunas, chaves e como planejar os dados antes de codar.

### 3️⃣ SQLite e Ferramentas Visuais na Prática
[Lição 3 →](./03-sqlite-na-pratica.md)  
Configurando nosso ambiente com SQLite (nativo no Mac), DBeaver Lite e extensões do VSCode.

### 4️⃣ O CRUD em SQL (Escrevendo Queries)
[Lição 4 →](./04-sql-crud.md)  
Como transformar Javascript (`push`, `filter`, `splice`) em SQL (`INSERT`, `SELECT`, `DELETE`).

### 5️⃣ Relações e JOINs (Cruzando Dados)
[Lição 5 →](./05-relacoes-e-joins.md)  
Como conectar tabelas diferentes (ex: Canal e Vídeos) e buscar tudo de uma vez.

### 6️⃣ Integrando o Banco de Dados com Express
[Lição 6 →](./06-integrando-com-express.md)  
Colocando o `better-sqlite3` no nosso servidor Node.js e aposentando o array global.

---

## 🏋️ Exercícios de Fixação

Se precisar de mais prática com a sintaxe SQL antes de ir para o desafio final, visite a pasta de exercícios:
[Lista de Exercícios Práticos →](../../exercises/banco-de-dados/README.md)

---

## 🏁 Desafio da semana

[Desafio →](./desafio.md)

Evoluir a API Express da "Minha Estante Virtual" para usar exclusivamente o SQLite como fonte de dados, mantendo as funcionalidades de CRUD.

## ✅ Critérios de conclusão

- [ ] Conseguir desenhar a tabela de livros num diagrama simples
- [ ] Criar o arquivo `estante.db` e abri-lo no DBeaver Lite ou VSCode
- [ ] Escrever as 4 operações básicas (CRUD) usando SQL
- [ ] Reiniciar o servidor Node.js e constatar que os livros **não sumiram**

## 📋 Conceitos da Semana

- Persistência vs Memória
- Banco de Dados Relacional
- Tabela, Coluna, Linha (Registro)
- Chave Primária (Primary Key)
- SQLite
- Queries em SQL (DML e DDL)
- Comandos Básicos (CREATE, SELECT, INSERT, UPDATE, DELETE, WHERE)
- Integração SQL + Node.js
