class BankAccount {
  constructor() {
    this._balance = 0;
  }
  get balance() {
    return this._balance;
  }
  async deposit(amount) {
    if (amount <= 0) {
      throw new Error("Jumlah deposit tidak valid!");
    }
    console.log("Saldo anda sekarang : " + this._balance);
    console.log("Menambahkan saldo sebesar " + amount + " ke akun.");
    console.log("Tunggu 3 detik");
    await new Promise((resolve) =>
      setTimeout(() => {
        this._balance += amount;
        resolve();
      }, 3000)
    );
    console.log("saldo sekarang: " + this._balance);
  }
  async withdraw(amount) {
    if (amount > this._balance) {
      throw new Error("Saldo tidak cukup!");
    } else if (amount <= 0) {
      throw new Error("Jumlah penarikan tidak valid!");
    }
    console.log("Saldo anda sekarang : " + this._balance);
    console.log("Mengambil saldo sebesar " + amount + " dari akun.");
    console.log("Tunggu 3 detik");
    await new Promise((resolve) =>
      setTimeout(() => {
        this._balance -= amount;
        resolve();
      }, 3000)
    );
    console.log("saldo sekarang: " + this._balance);
  }
}

const user = new BankAccount();

(async () => {
  try {
    await user.deposit(10000);
    await user.withdraw(5000);
  } catch (error) {
    console.log(error.message);
  }
})();
