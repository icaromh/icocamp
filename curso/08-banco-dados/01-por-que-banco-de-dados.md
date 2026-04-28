# 📘 Lição 1 — Por que precisamos de um Banco de Dados?

## 🎯 Objetivo desta lição

Entender o problema de armazenar dados na memória do servidor e como os Bancos de Dados resolvem isso.

---

## O Problema da "Geladeira Desligada"

Na Semana 7, nós criamos um servidor Node.js maravilhoso com o Express. Ele recebia requisições e guardava os livros em um **array global**:

```js
let livros = []; // Nossa "memória"
```

Tudo funcionava perfeitamente até o momento em que o servidor precisava ser reiniciado. Se houvesse um erro e o programa fechasse, ou se a gente parasse o servidor manualmente... **POOF!** Todos os livros sumiam.

> **💡 O que acontece nos bastidores?**  
> Variáveis no JavaScript (como arrays e objetos) vivem na **memória RAM** do computador. Quando o programa (processo do Node.js) é encerrado, o sistema operacional "limpa" aquela memória.

É como ter uma geladeira que descongela e estraga tudo dentro dela toda vez que você pisca as luzes da casa. 

---

## A Solução: Persistência de Dados

Para que nossos dados sobrevivam a um reinício do servidor (ou até mesmo um desligamento completo do computador), precisamos movê-los da memória temporária (RAM) para o **disco rígido** (HD/SSD).

Nós poderíamos simplesmente salvar os livros em um arquivo de texto ou `.json` e lê-lo toda vez. No entanto, se milhares de pessoas tentassem atualizar esse arquivo `.json` ao mesmo tempo, teríamos corrupção de dados e muita lentidão.

É aí que entram os **Sistemas de Gerenciamento de Banco de Dados (SGBD)**.

---

## O que é um Banco de Dados (SGBD)?

Um banco de dados é como uma planilha do Excel ultra-poderosa que:
1. **Nunca perde os dados** (persiste no disco).
2. Consegue buscar informações muito específicas em milissegundos.
3. Permite que várias requisições sejam feitas ao mesmo tempo sem corromper as informações.
4. Garante regras de segurança e consistência (ex: "não deixe criar um livro sem título").

**Existem vários tipos de bancos de dados.**  
Alguns famosos são: PostgreSQL, MySQL, SQL Server (Bancos Relacionais) e MongoDB (Bancos Não-Relacionais).

### Por que usaremos o SQLite?
Nesta semana, nós vamos usar o **SQLite**.  
Escolhemos ele pela **simplicidade**. Em vez de precisarmos instalar um "servidor de banco de dados" gigantesco, o SQLite faz tudo funcionar a partir de **um único arquivo local**. Ele é perfeito para aprendizado e também muito usado no mundo real (como dentro de celulares para guardar configurações dos aplicativos).

---

## 🔄 JS vs Banco de Dados: Nada muda, tudo se transforma

O mais importante é entender que **os conceitos de CRUD continuam os mesmos**. Nós apenas mudamos as ferramentas.

| O que você fazia no JavaScript (Arrays) | O que você fará no Banco de Dados |
| :--- | :--- |
| Criar um Array vazio (`let livros = []`) | Criar uma **Tabela** |
| Adicionar um Objeto (`livros.push(...)`) | Inserir um **Registro (Linha)** |
| `livros.filter(l => l.autor === "Asimov")` | Filtrar com a cláusula **WHERE** |
| Usar o `id` como índice ou para o `.find()` | Usar a **Chave Primária (Primary Key)** |

A lógica da sua aplicação já está na sua cabeça. Só vamos aprender a "falar o idioma" do banco de dados para executar as mesmas tarefas.

---

## ✍️ Mini-exercício

Antes de irmos para a próxima lição, faça um teste rápido para sentir essa dor:
1. Vá até o projeto da semana anterior (Módulo 07) onde você usava um array.
2. Inicie seu servidor.
3. Faça uma requisição POST para criar um livro novo.
4. Faça um GET para ver que ele está lá.
5. Agora vá no terminal, aperte `CTRL+C` para parar o servidor e rode-o novamente.
6. Faça um GET de novo.
O livro sumiu? É exatamente esse o problema que vamos resolver na próxima lição.

---

## Próxima lição

[Lição 2 — Conceitos Fundamentais e Modelagem →](./02-conceitos-fundamentais.md)
