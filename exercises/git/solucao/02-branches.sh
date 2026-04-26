#!/bin/bash

# Solução para o Exercício 02 - Trabalhando com Branches
# Assumindo que você está dentro do "projeto-secreto"

# Passo 2: Criar branch e mudar para ela
git checkout -b teste-cores

# Passo 3: Modificar o arquivo
echo "<style>body { background: blue; }</style>" >> index.html

# Passo 4: Adicionar e commitar
git add index.html
git commit -m "adiciona fundo azul"

# Passo 5: Voltar para a main
git checkout main

# Passo 6: Fazer o merge
git merge teste-cores
