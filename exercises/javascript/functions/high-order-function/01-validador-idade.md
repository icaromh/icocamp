## 🔞 Validador de Idade

Você está desenvolvendo o sistema de controle parental de uma plataforma de streaming. Diferentes filmes têm diferentes classificações indicativas (Livre, 10+, 12+, 14+, 16+, 18+).

Em vez de escrever uma verificação separada para cada filme, você usará o poder das **High Order Functions** para criar validadores personalizados.

**O que é uma High Order Function (HOF)?**
É uma função que recebe outra função como argumento (como vimos nos Callbacks) **OU** uma função que **retorna** outra função. Neste exercício, vamos focar no segundo caso.

**Objetivo**
Crie uma função chamada `criarValidador` que aceita uma idade mínima (`idadeMinima`) e retorna uma **nova função**. Essa nova função deve aceitar a idade do usuário e retornar `true` se ele puder assistir, ou `false` caso contrário.

**Exemplo de Uso**

```javascript
const podeAssistirViolencia = criarValidador(18);
console.log(podeAssistirViolencia(20)); // true
console.log(podeAssistirViolencia(12)); // false

const podeAssistirDesenho = criarValidador(0);
console.log(podeAssistirDesenho(5)); // true
```

**Template**

```javascript
/**
 * Cria uma função validadora para uma idade mínima específica.
 * @param {number} idadeMinima - A idade mínima necessária.
 * @returns {function(number): boolean} Uma função que verifica se a idade do usuário é suficiente.
 */
function criarValidador(idadeMinima) {
  // Retorne uma função aqui
}
```

<details>
  <summary>🫣 Spoiler</summary>

> 1.  Dentro de `criarValidador`, você deve escrever `return function(idadeUsuario) { ... }`.
> 2.  A função interna tem acesso ao parâmetro `idadeMinima` da função externa (isso se chama Closure).
> 3.  A lógica dentro da função interna será simplesmente `return idadeUsuario >= idadeMinima`.

</details>
