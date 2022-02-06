let seconds = 0;
let minutes = 0;
let hours = 0;
let interval = null;

let display = document.getElementsByClassName("display")[0];
let start = document.getElementsByClassName("start")[0];
let stop = document.getElementsByClassName("stop")[0];
let reset = document.getElementsByClassName("reset")[0];

start.addEventListener("click", (e) => {
  startTimer();
});

stop.addEventListener("click", (e) => {
  stopTimer();
});

reset.addEventListener("click", (e) => {
  resetTimer();
});

function startTimer(e) {
  if (interval) return;
  interval = setInterval(() => {
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    seconds = ("0" + seconds).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    display.innerText = `${minutes}:${seconds}`;
    seconds++;
  }, 1000);
}

function stopTimer() {
  console.log("stop timer!");
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  console.log("reset timer!");
  clearInterval(interval);
  interval = null;
  seconds = 0;
  minutes = 0;
  display.innerText = "00:00";
}
