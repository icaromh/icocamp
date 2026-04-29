## 🏁 Desafio da Semana 8 (entrega principal)

### Desafio: Minha Estante Virtual — versão persistente (API + Banco de Dados)

Até a semana passada, sua estante virtual funcionava **inteiramente em memória**, usando um array global de livros.
Agora, o desafio é **evoluir esse sistema** para um cenário mais realista:

- os dados não vivem mais em um array, mas em um **banco de dados**
- a API Express passa a ser a única responsável por acessar e manipular esses dados

Você vai transformar seu backend em uma **API persistente**, integrando:

- modelagem de dados
- banco de dados SQLite
- API Express
- consultas SQL no lugar de arrays globais

---

## 🎯 Objetivo do desafio

Ao final deste desafio, você deverá ser capaz de:

- Substituir dados em memória por um banco de dados relacional
- Modelar corretamente o banco de dados antes de implementá-lo
- Usar uma IA como **ferramenta de apoio técnico**
- Integrar uma API Express com SQLite
- Implementar operações CRUD reais usando SQL
- Entender claramente a separação entre:
  - lógica de negócio
  - acesso a dados
  - camada de API

---

## 🧠 Conceito central do desafio

> O que antes era um array global,
> agora é uma fonte de dados persistente.

Nada muda conceitualmente:

- ainda existe CRUD
- ainda existem livros
- ainda existem filtros e estatísticas

O que muda é **onde os dados vivem** e **como você acessa esses dados**.

---

## 📦 Contexto inicial

Você já possui:

- uma API Express básica
- rotas para criar, listar, atualizar e remover livros
- um array global de livros (ou equivalente)

**Esse array deve ser removido.**
Todas as operações devem passar a conversar com o banco de dados.

---

## 🧩 Etapas do desafio

### 1️⃣ Modelar o banco de dados (obrigatório)

Antes de escrever qualquer código:

- identifique as entidades necessárias
- defina campos e tipos de dados
- pense nas relações entre entidades

Você deve:

- criar um diagrama (Mermaid, desenho ou texto estruturado)
- usar uma IA para ajudar a revisar ou sugerir a modelagem

A decisão final é sua.

---

### 2️⃣ Usar IA para gerar SQL (obrigatório)

Com base na modelagem:

- peça à IA para gerar os comandos SQL para SQLite

Exemplo de prompt (referência):

> “Gere comandos SQL para SQLite para criar uma tabela de livros com id auto incremental e chave primária, título obrigatório, autor opcional, número de páginas e campo booleano de leitura.”

---

### 2.1️⃣ Criar um documento com os comandos SQL (obrigatório)

Crie um arquivo `database.sql` ou `database.md` contendo:

- os comandos SQL gerados pela IA
- comentários explicando:
  - o que cada comando faz
  - por que ele existe

Esse documento faz parte da **documentação do projeto**.

---

### 3️⃣ Criar o banco de dados SQLite (obrigatório)

- Crie o arquivo `.db`
- Execute os comandos SQL
- Verifique tudo usando o **DB Browser for SQLite**

Você deve conseguir:

- visualizar tabelas e colunas
- inserir dados manualmente para teste

---

### 4️⃣ Integrar a API Express com o banco (obrigatório)

Agora, substitua completamente o array global.

Você deve:

- conectar o backend ao SQLite
- garantir que toda operação CRUD use SQL

Exemplos conceituais:

- criar livro → INSERT
- listar livros → SELECT
- atualizar livro → UPDATE
- remover livro → DELETE

---

### 5️⃣ Manter a API funcional (obrigatório)

A API deve oferecer, no mínimo:

- criar livro (CREATE)
- listar livros (READ)
- marcar livro como lido (UPDATE)
- remover livro (DELETE)

Os dados devem persistir entre reinícios.

---

### 6️⃣ Testar e validar (obrigatório)

Você deve:

- executar chamadas da API
- usar console.log() para verificar respostas
- confirmar no DB Browser que o banco foi alterado

O teste visual do banco faz parte da entrega.

---

## 🚀 Ir além (opcional)

Implemente **pelo menos 3** melhorias extras, como:

- filtros por categoria usando SQL
- busca parcial por título
- estatísticas (total, lidos, páginas)
- melhor separação de responsabilidades
- documentação técnica no README

---

## 📤 Entregáveis obrigatórios

- API Express funcionando sem array global
- Banco SQLite criado
- Documento com os comandos SQL gerados pela IA
- Código usando SQL para todas as operações
- Demonstração via console.log() e DB Browser

---

## ✅ Critérios de conclusão

### Código

- Nenhum dado crítico em memória
- CRUD completo via banco
- API estável e previsível

### Explicação

Prepare uma explicação curta abordando:

- como o banco foi modelado
- como a IA foi utilizada
- principais dificuldades
- aprendizados da transição

---

## 🧠 Observação final

Neste desafio:

- errar é esperado
- consultar IA é permitido
- decorar SQL não é objetivo
- entender arquitetura é o foco

Você está aprendendo a **construir sistemas reais**.
