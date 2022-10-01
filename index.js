//Once we switched from simply having the balance at the top to an actual account,
//We can designate a new account for every user of the app.

class Account {

  constructor(username) {
    this.username = username;
    // Have the account balance start at $0 since that makes more sense.
    this.balance = 0;
  }
}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }



}

class Deposit extends Transaction {
  get value() {
    return this.amount
  }
  //Dried up the code by replacing the commit with the getter.
  // commitDeposit() {
  //   this.account.balance += this.amount //I am not fully sure here why need this infront of account.balance.
  // }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount
  }
  // commit() {
  //   this.account.balance -= this.amount;
  // }

}

const myAccount2 = new Account("Jordan Guerrero");
console.log(myAccount2);
w1 = new Withdrawal(130, myAccount2);

w1.commit();

console.log("Withdrawing: ", myAccount2.balance);

d1 = new Deposit(150.00, myAccount2);

d1.commit();

console.log(`After deposit, Ending Balance: `, myAccount2.balance);





// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("snow-patrol");

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log(myAccount.balance);


//This is old code and was refractored above due to incorporation of account class which contains balance and info.
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
