## 📧 Enviando Emails

Você tem uma lista de usuários e precisa enviar um email de boas-vindas para cada um. Como não podemos enviar emails de verdade, vamos simular imprimindo no console.

**Array de Entrada**

```javascript
const usuarios = ["Ana", "Bruno", "Carlos"];
// Saída esperada no console:
// "Enviando email para Ana"
// "Enviando email para Bruno"
// "Enviando email para Carlos"
```

**Template**

```javascript
/**
 * Simula o envio de emails para cada usuário.
 * @param {string[]} arr - Array de nomes de usuários.
 */
function enviarEmails(arr) {}

enviarEmails(usuarios);
```

<details>
  <summary>🫣 Spoiler</summary>

> 1.  Use `console.log("Enviando email para " + usuario)` dentro do callback.

</details>
