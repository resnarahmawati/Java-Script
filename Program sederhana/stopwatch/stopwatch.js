const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const millisecondsEl = document.getElementById('milliseconds');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isRunning = false;

startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
resetBtn.addEventListener('click', reset);

function start() {
  if (!isRunning) {
    isRunning = true;
    interval = setInterval(updateTime, 10);
  }
}

function pause() {
  isRunning = false;
  clearInterval(interval);
}

function reset() {
  isRunning = false;
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
}

function updateTime() {
  milliseconds += 10;
  if (milliseconds === 1000) {
    seconds++;
    milliseconds = 0;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
}
  updateDisplay();
}

function updateDisplay() {
  minutesEl.textContent = padTime(minutes);
  secondsEl.textContent = padTime(seconds);
  millisecondsEl.textContent = padTime(Math.floor(milliseconds / 10)); // 2-digit display
}

function padTime(time) {
  return String(time).padStart(2, '0');
}