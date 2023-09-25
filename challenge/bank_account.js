var saldo = 0;

const tambahSaldo = () => {
    const jumlah = window.prompt("Masukkan jumlah saldo yang ingin ditambahkan");
    saldo += parseInt(jumlah);
}

const ambilSaldo = () => {
    const jumlah = window.prompt("Masukkan jumlah saldo yang ingin diambil");
    saldo -= jumlah;
}

console.log("Menjalankan fungsi tambahSaldo()");
tambahSaldo()
console.log("saldo sekarang: " + saldo);

console.log("Menjalankan fungsi ambilSaldo()");
ambilSaldo()
console.log("saldo sekarang: " + saldo);

