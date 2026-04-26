# 🚀 Comandos Mais Utilizados do Git

Aqui está o seu **Cheat Sheet** (cola) com os comandos que você vai usar no seu dia a dia como pessoa desenvolvedora! 

## 1️⃣ Configuração Inicial (Uma vez por computador)

Antes de começar a usar o Git, você precisa dizer a ele quem você é:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
```

## 2️⃣ Iniciando um Projeto

```bash
git init
```
Cria um novo repositório Git na pasta atual. Transformando a pasta em um projeto rastreado pelo Git.

```bash
git clone URL_DO_REPOSITORIO
```
Baixa um repositório existente (do GitHub, por exemplo) para a sua máquina.

## 3️⃣ O Ciclo Básico (Você fará isso o tempo todo!)

```bash
git status
```
Mostra o status atual do repositório: quais arquivos foram modificados, adicionados ou removidos. **Dica: Use isso antes e depois de qualquer outro comando!**

```bash
git add NOME_DO_ARQUIVO
```
Adiciona um arquivo específico à "Staging Area" (área de preparação), preparando-o para ser salvo.

```bash
git add .
```
Adiciona **todos** os arquivos modificados à Staging Area. 

```bash
git commit -m "Mensagem clara e no presente"
```
Salva as mudanças que estão na Staging Area no histórico do Git. A mensagem deve explicar o *quê* e *por que* foi alterado.

## 4️⃣ Histórico e Desfazer

```bash
git log
```
Mostra o histórico de todos os commits realizados no projeto. Pressione `q` para sair da visualização do log.

```bash
git restore NOME_DO_ARQUIVO
```
Desfaz as alterações não commitadas em um arquivo, restaurando-o para o último estado salvo.

## 5️⃣ Trabalhando com Branches (Ramificações)

```bash
git branch
```
Lista todas as branches do projeto. A branch atual estará destacada.

```bash
git branch NOME_DA_BRANCH
```
Cria uma nova branch, mas **não** muda para ela.

```bash
git checkout NOME_DA_BRANCH
```
Muda para uma branch existente.

```bash
git checkout -b NOME_DA_BRANCH
```
Cria uma nova branch e já muda para ela imediatamente (Atalho super útil!).

```bash
git merge NOME_DA_BRANCH
```
Junta as alterações da branch especificada para dentro da branch que você está no momento (geralmente você faz merge na `main`).

## 6️⃣ Trabalhando com o GitHub (Remoto)

```bash
git remote add origin URL_DO_REPOSITORIO
```
Conecta o seu repositório local a um repositório remoto (ex: no GitHub).

```bash
git push -u origin main
```
Envia seus commits locais da branch `main` para o repositório remoto. O `-u` cria a ligação padrão para os próximos pushes. Depois, você só precisará digitar `git push`.

```bash
git pull
```
Baixa e aplica as alterações do repositório remoto no seu repositório local.

---

> 💡 **Dica de Ouro:** Se bater a dúvida, respire, digite `git status` e leia o que o Git está dizendo. Ele costuma dar dicas exatas do que você precisa fazer a seguir!
