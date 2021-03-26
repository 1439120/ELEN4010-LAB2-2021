const Account = {
  balance: 0,
  deposits: 0,
  withdrawals: 0,
  // methods
  Deposit: function (amount) {
    this.deposits += amount
    this.balance += amount
  },
  //   Account: function () {
  //     this.balance = 0
  //     this.deposits = 0
  //     this.withdrawals = 0
  //   },
  Withdraw: function (amount) {
    if (this.balance < amount) {
      console.log(`Not enough balance for a withdrwal of ${amount}`)
      return
    }
    this.withdrawals += amount
    this.balance -= amount
  },
  SummaryStatement: function () {
    console.log(`This account has a balance of ${this.balance}. 
There have been deposits totalling ${this.deposits} and withdrawals totalling ${this.withdrawals}.`)
  }
}

const myAccount = Account
// myAccount.Account = new Account.Account()
myAccount.Deposit(80)
myAccount.Deposit(50)
myAccount.Deposit(50)
myAccount.Withdraw(200)
myAccount.Withdraw(20)

// const newAccount = Account
// newAccount.Account = new Account.Account()

myAccount.SummaryStatement()
