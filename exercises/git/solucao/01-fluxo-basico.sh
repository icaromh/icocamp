#!/bin/bash

# Solução para o Exercício 01 - O Fluxo Básico

# Passo 1: Criar e entrar na pasta
mkdir projeto-secreto
cd projeto-secreto

# Passo 2: Iniciar repositório Git
git init

# Passo 3: Criar o arquivo index.html
touch index.html

# Passo 4: Verificar o estado (opcional na solução, mas importante no processo)
git status

# Passo 5: Adicionar arquivo à staging area
git add index.html

# Passo 6: Fazer o commit
git commit -m "primeiro commit: adiciona index.html"

# Passo 7: Verificar o histórico
git log
