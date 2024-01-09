//This file has a redo of the original lightcoin project code in order to practice working with class based objects in JS.

//Can use NPM Start to run this file

//Features:

// Here's a list of features that our code needs to support:

// Allow multiple accounts to be created
// Each account can have many transactions
// Allow withdrawals and deposits into accounts
// Allow us to retrieve the transaction history of an account (all withdrawals and deposits)
// Allow us to retrieve the current balance of the account at any time
// Don't allow withdrawals that exceed the remaining balance of the account

// let balance = 500.0;

class Account {
  constructor(username) {
    this.username = username;
    this.balance = 0;
  }
}

class Transaction {
  //Super class to the Withdrawal and Deposit classes
  constructor(amount, account) {
    this.amount = amount; //Amount of the transaction
    this.account = account; //The account the transaction belongs to
  }

  commit() {
    this.account.balance += this.value; //Commit method is used to finalize and apply the transaction amount to balance
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
  // commit() {
  //   this.account.balance -= this.amount; //Commit method is used to finalize and apply the withdrawal amount in constructor to the balance
  // }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
  // commit() {
  //   this.account.balance += this.amount; //Commit metod is used to finalize and apply the deposit amount in constructor to the balance
  // }
}

let myAccount = new Account("Jordan Guerrero");

console.log("My Account: ", myAccount);

t1 = new Withdrawal(50, myAccount); //Passing the withdrawal object the account object it needs is known as dependency injection
t1.commit();
console.log("Transaction 1: Withdrawal", t1.value);

t2 = new Withdrawal(10.0, myAccount);
t2.commit();
console.log("Transaction 2: Withdrawal", t2.value);

t3 = new Deposit(160, myAccount);
t3.commit();
console.log("Transaction 3: Deposit", t3.value);

console.log("Overview of account and balance:", myAccount);

/////////////
////Original Work
////////////

// //Once we switched from simply having the balance at the top to an actual account,
// //We can designate a new account for every user of the app.

// class Account {

//   constructor(username) {
//     this.username = username;
//     // Have the account balance start at $0 since that makes more sense.
//     this.balance = 0;
//   }
// }

// class Transaction {

//   constructor(amount, account) {
//     this.amount = amount;
//     this.account = account;
//   }

//   commit() {
//     this.account.balance += this.value;
//   }

// }

// class Deposit extends Transaction {
//   get value() {
//     return this.amount
//   }
//   //Dried up the code by replacing the commit with the getter.
//   // commitDeposit() {
//   //   this.account.balance += this.amount //I am not fully sure here why need this infront of account.balance.
//   // }
// }

// class Withdrawal extends Transaction {
//   get value() {
//     return -this.amount
//   }
//   // commit() {
//   //   this.account.balance -= this.amount;
//   // }

// }

// const myAccount2 = new Account("Jordan Guerrero");
// console.log(myAccount2);
// w1 = new Withdrawal(130, myAccount2);

// w1.commit();

// console.log("Withdrawing: ", myAccount2.balance);

// d1 = new Deposit(150.00, myAccount2);

// d1.commit();

// console.log(`After deposit, Ending Balance: `, myAccount2.balance);

// // DRIVER CODE BELOW
// // We use the code below to "drive" the application logic above and make sure it's working as expected

// const myAccount = new Account("snow-patrol");

// t1 = new Withdrawal(50.25, myAccount);
// t1.commit();
// console.log(myAccount.balance);

//////////////This is old code and was refractored above due to incorporation of account class which contains balance and info.
// t1 = new Withdrawal(50.25);
// t1.commit();
// console.log('Transaction 1:', t1);

// t2 = new Withdrawal(9.99);
// t2.commit();
// console.log('Transaction 2:', t2);

// console.log('Balance:', balance);

// d1 = new Deposit(120.00)
// d1.commitDeposit();
// console.log('Transaction 3: ', d1);
// console.log('Balance: ', balance);
