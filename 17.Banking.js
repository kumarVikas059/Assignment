const customer = {
    name: "John Doe",
    balance: 1000,
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposit of ${amount} successful. New balance is ${this.balance}.`);
    },
    withdraw(amount) {
      if (this.balance < amount) {
        console.log(`Withdrawal of ${amount} failed. Insufficient balance.`);
      } else {
        this.balance -= amount;
        console.log(`Withdrawal of ${amount} successful. New balance is ${this.balance}.`);
      }
    }
  };
  
  customer.deposit(500); 
  customer.withdraw(2000);
  customer.withdraw(500); 