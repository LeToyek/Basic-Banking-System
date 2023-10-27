CREATE TABLE Nasabah (
    nasabah_id SERIAL PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    alamat TEXT,
    tanggal_lahir DATE,
    email VARCHAR(100),
    telepon VARCHAR(20)
);
CREATE TABLE Akun (
    akun_id SERIAL PRIMARY KEY,
    nasabah_id INT REFERENCES Nasabah(nasabah_id),
    jenis_akun VARCHAR(50) NOT NULL,
	pin VARCHAR(6),
    saldo DECIMAL(10, 2) NOT NULL,
    tanggal_dibuka DATE
);
CREATE TABLE Transaksi (
    transaksi_id SERIAL PRIMARY KEY,
    akun_asal_id INT REFERENCES Akun(akun_id),
    akun_tujuan_id INT REFERENCES Akun(akun_id),
    jumlah DECIMAL(10, 2) NOT NULL,
    tanggal_transaksi TIMESTAMP NOT NULL,
    keterangan TEXT
);

-- CREATE Action
-- Menambahkan nasabah "Maulana"
INSERT INTO Nasabah (nama, alamat, tanggal_lahir, email, telepon)
VALUES ('Maulana', 'Malang, Singosari', '2003-11-17', 'maulana@example.com', '1234567890');

-- Akun pertama
INSERT INTO Akun (nasabah_id, jenis_akun, pin, saldo, tanggal_dibuka)
VALUES (1, 'Tabungan', '123456', 1000.00, '2023-10-16');

-- Akun kedua
INSERT INTO Akun (nasabah_id, jenis_akun, pin, saldo, tanggal_dibuka)
VALUES (1, 'Deposito', '654321', 5000.00, '2023-10-16');

-- Akun ketiga
INSERT INTO Akun (nasabah_id, jenis_akun, pin, saldo, tanggal_dibuka)
VALUES (1, 'Giro', '987654', 200.00, '2023-10-16');


-- Membuat transaksi transfer uang dari Akun 1 ke Akun 2
INSERT INTO Transaksi (akun_asal_id, akun_tujuan_id, jumlah, tanggal_transaksi, keterangan)
VALUES (1, 2, 500.00, CURRENT_TIMESTAMP, 'Transfer dari akun 1 ke akun 2');


-- RETRIVE ACTION
-- Mengambil semua data nasabah
SELECT * FROM Nasabah;

-- Mengambil informasi akun berdasarkan ID nasabah
SELECT * FROM Akun WHERE nasabah_id = 1;

-- Mengambil riwayat transaksi untuk suatu akun
SELECT * FROM Transaksi WHERE akun_asal_id = 1 OR akun_tujuan_id = 1;

-- UPDATE ACTION
-- Mengubah alamat nasabah dengan ID 1
UPDATE Nasabah
SET alamat = 'Alamat Baru'
WHERE nasabah_id = 1;

-- Mengganti saldo akun dengan ID 2
UPDATE Akun
SET saldo = 1500.00
WHERE akun_id = 2;

-- Memperbarui keterangan transaksi
UPDATE Transaksi
SET keterangan = 'Transfer ke akun 2'
WHERE transaksi_id = 1;



