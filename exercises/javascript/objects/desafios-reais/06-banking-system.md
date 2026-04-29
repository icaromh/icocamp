# 06 - Banking System

**Challenge**: Create a banking system using an Object.
The account object should have a `balance` and a list of `transactions`.
You need to implement methods to:

1. `deposit(amount)`: Add money to the balance and record the transaction.
2. `withdraw(amount)`: Remove money from the balance (if sufficient funds) and record the transaction.
3. `getStatement()`: Return the list of all transactions.

Each transaction should be an object containing the `type` ("deposit" or "withdraw"), the `amount`, and a `date`.

**Example Usage:**

```javascript
account.deposit(100);
account.withdraw(30);
console.log(account.balance); // 70
console.log(account.getStatement());
// [
//   { type: 'deposit', amount: 100, date: '2023-10-27T...' },
//   { type: 'withdraw', amount: 30, date: '2023-10-27T...' }
// ]
```
