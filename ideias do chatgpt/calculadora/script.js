let timer;
let segundos = 0;
let minutos = 0;
let horas = 0;
let rodando = false;

function comecarTimer() {
  if (!rodando) {
    rodando = true;
    timer = setInterval(updateTimer, 1000);
  }
}

function pararTimer() {
  clearInterval(timer);
  rodando = false;
}

function resetarTimer() {
  clearInterval(timer);
  segundos = 0;
  minutos = 0;
  horas = 0;
  updateDisplay();
  rodando = false;
}

function updateTimer() {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
    if (minutos === 60) {
      minutos = 0;
      horas++;
    }
  }
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById("display");
  if (display) {
    display.textContent = (horas < 10 ? "0" + horas : horas) + ":" + (minutos < 10 ? "0" + minutos : minutos) + ":" + (segundos < 10 ? "0" + segundos : segundos);
  }
}

document.getElementById("start").addEventListener("click", comecarTimer);
document.getElementById("pause").addEventListener("click", pararTimer);
document.getElementById("reset").addEventListener("click", resetarTimer);