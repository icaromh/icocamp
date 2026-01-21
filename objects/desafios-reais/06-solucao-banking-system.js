/* Challenge: Create a banking system using an Object. The account object should have a balance and a list of transactions. 
You need to implement methods to:

deposit(amount): Add money to the balance and record the transaction.
withdraw(amount): Remove money from the balance (if sufficient funds) and record the transaction.
getStatement(): Return the list of all transactions.

Each transaction should be an object containing the type ("deposit" or "withdraw"), the amount, and a date. */

function transactionObject(type, amount) {
    const obj = {
        type: type,
        amount: amount,
        date: new Date()
    };
    return obj;
}

let account = {
    balance: 0,
    transaction: [],
    //deposit
    deposit: function (amount) {
        this.balance += amount;
        this.transaction.push(transactionObject('deposit', amount));
    },
    //withdraw
    withdraw: function (amount) {
        if (amount > this.balance) {
            return "Não é possível fazer essa operação";
        } else {
            this.balance -= amount;
            this.transaction.push(transactionObject('deposit', amount));
        }
    },
    //Return all the transactions
    getStatement: function () {
        return this.transaction;
    }
};

account.deposit(100);
account.withdraw(30);
account.withdraw(130);

console.log(account.balance); // 70
console.log(account.getStatement());
