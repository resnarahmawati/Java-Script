const readline = require('readline');

// Membuat antarmuka untuk input dan output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Menanyakan input dari pengguna
rl.question('Masukkan nama Anda: ', (nama) => {
  console.log(`Halo, ${nama}!`);

  // Menanyakan input kedua
  rl.question('Masukkan umur Anda: ', (umur) => {
    console.log(`Umur Anda adalah ${umur}`);
    rl.close(); // Menutup antarmuka setelah selesai
  });
});
