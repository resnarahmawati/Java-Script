const max = 30
let age = 20

console.log(`Nilai maksimal adalah ${max} untuk usia ${age}`);

let sisi = 10
console.log(`
  sisi : ${sisi} \n
  Luas : ${sisi * sisi} \n
  Keliling : ${sisi * 4}
  `)

const divAngka = document.querySelector('#angka')
const divNama = document.querySelector('#nama')
const divAlamat = document.querySelector('#alamat');

let angka = 5
let nama = 'slebew'
let alamat = 'cianjur'

divAngka.textContent = angka
divNama.innerHTML = nama
divAlamat.textContent = alamat

const divAngka1 = document.querySelector('#angka1')
console.log(divAngka1.textContent)

function perkalian(angka, pengali){
  return angka * pengali
}
function kalimat(nama,jk,kelas='x'){
  return `Nama kamu adalah ${nama} berjenis kelamin ${jk} di kelas ${kelas}`
}
function pangkat(angka,pangkat){
  return angka ** pangkat
}

const pangkatV2 = (angka,pangkat) => angka ** pangkat
const tampil = () => console.log('test')
console.log(pangkat(3,100))
console.log(perkalian(10, 70))
console.log(perkalian(8, 9))
console.log(kalimat('budi','laki-laki','X PPLG 5'))
tampil()

for (a = 1; a > 5; a++){
  console.log(a)
}
//pengulangan set interval
const divCounter = document.querySelector('#counter')
let counter = Number(divCounter.textContent)
const changeNumber = () => {
  counter++
  divCounter.textContent = counter
}
setInterval(changeNumber, 1000)