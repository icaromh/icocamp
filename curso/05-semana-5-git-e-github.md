# 📚 Bootcamp Marcie — Semana 5  

## Git e GitHub: versionamento e histórico do projeto

Projeto em evolução: **Minha Estante Virtual**

## 🎯 Objetivo da semana

Ao final desta semana, a aluna será capaz de:

- Entender **o que é Git** e para que ele serve
- Versionar o projeto localmente
- Criar e manter um repositório no **GitHub**
- Fazer commits conscientes e legíveis
- Entender Git como parte do fluxo profissional de desenvolvimento

> Nesta semana, **não há código novo da aplicação**.  
> O foco é **organização, histórico e segurança do projeto**.

## 🧠 Conceito central da semana

> Git não é backup.  
> Git é **história do código**.

## 🧠 O que é Git?

Git é um **sistema de controle de versão** que salva o histórico do projeto ao longo do tempo.

## 🧠 O que é GitHub?

GitHub é uma **plataforma online** para hospedar repositórios Git e compartilhar código.

## 📘 Conteúdos da semana

### 1️⃣ Criando um repositório Git

```bash
git init
```

### 2️⃣ Ciclo básico do Git

```txt
Arquivo modificado
        ↓
git add
        ↓
git commit
```

```bash
git status
git add .
git commit -m "mensagem do commit"
```

### 3️⃣ Commits com mensagens claras

Exemplos bons:

- `add book form structure`
- `style book cards`
- `persist books in localStorage`

### 4️⃣ Criando o repositório no GitHub

```bash
git remote add origin URL_DO_REPOSITORIO
git branch -M main
git push -u origin main
```

### 5️⃣ README: explicando o projeto

README é o primeiro contato de alguém com o projeto.

Deve conter:

- nome do projeto
- descrição
- funcionalidades
- tecnologias usadas
- como rodar localmente

## ✍️ Sintaxe básica de Markdown (para o README)

O arquivo `README.md` é escrito em **Markdown**, uma linguagem simples de formatação de texto.

💡 Fun fact: Markdown pode ser usado em mensgens do Whatsapp para enviar texto em negrito, sublinhado e taxado. Além de listas.

### Títulos

```md
# Título principal
## Subtítulo
### Título menor
```

### Parágrafo

```md
Este é um parágrafo do README.
Aqui você explica o projeto com suas próprias palavras.
```

### Lista

```md
- Cadastrar livros
- Listar livros
- Ver detalhes de um livro
```

### Exemplo simples de README

```md
# Minha Estante Virtual

Projeto pessoal para organizar livros lidos e não lidos.

## Funcionalidades
- Cadastro de livros
- Listagem da estante
- Estatísticas de leitura
```

## 🏁 Desafio da semana

Projeto versionado no GitHub com README claro e histórico de commits legível.

## ✅ Critérios de conclusão

- [ ] Explicar Git
- [ ] Diferenciar Git e GitHub
- [ ] Criar commits claros
- [ ] Criar README em Markdown
