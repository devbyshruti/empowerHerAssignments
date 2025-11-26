// Closure-Based Counter Implementation
function createCounter() {
    let count=0;

    return {
        increment: function(){
            count++
            console.log("Current Count:",count);
        },
        decrement: function() {
            count--;
            console.log("Current Count:",count);
        },
        getcount: function() {
            console.log("Current Count:",count);
        }
    };
}
const counter1 = createCounter();
counter1.increment();
counter1.increment();
counter1.decrement();
counter1.getcount();

const counter2 = createCounter();
counter2.increment();
counter2.getcount();

// Simulating Private Variables using Closures
function createBankAccount() {
    let balance=0;
    let transactionHistory=[];

    return {
        deposit(amount) {   
        balance += amount;
        transactionHistory.push(`Deposited: ${amount}`);
        console.log(`Deposited: ${amount}`);
        },
        withdraw(amount) {
            if (amount<=balance) {
                balance-=amount;
                transactionHistory.push(`Withdraw:${amount}`);
                console.log(`Withdraw: ${amount}`);
            } else {
                 transactionHistory.push(`Failed Withdraw Attempt:${amount}`);
                console.log("Insufficient balance");
            }
        },
        getBalance() {
            console.log(`Current Balance: ${balance}`);
        },
        getHistory() {
            console.log("Transcation History", transactionHistory);
        }
    }
}
const account = createBankAccount();
account.deposit(500); 
account.withdraw(200); 
account.withdraw(400);
console.log(account.balance); 
