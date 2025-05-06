const divJam = document.querySelector('#jam')
const divMenit = document.querySelector('#menit')
const divDetik = document.querySelector('#detik')
let jam = Number(divJam.textContent)
let menit = Number(divMenit.textContent);
let detik = Number(divDetik.textContent);

const clockCounter = () => {
  detik++
  if(detik == 60){
    menit++
    detik = 0
  }
  if (menit == 60) {
    jam++
    menit = 0
  }
  divDetik.textContent = detik < 10 ? `0${detik}`:detik
  divMenit.textContent = menit < 10 ? `0${menit}`:menit;
  divJam.textContent = jam < 10 ? `0${jam}`:jam;
}
setInterval(clockCounter, 1000)