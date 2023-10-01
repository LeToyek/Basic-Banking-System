
const {BankAccount} = require("./bank_account");

const user = new BankAccount();

(async () => {
  try {
    await user.deposit(10000);
    await user.withdraw(5000);
  } catch (error) {
    console.log(error.message);
  }
})();
