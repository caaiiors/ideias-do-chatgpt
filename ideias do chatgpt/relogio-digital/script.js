function atualizarHorario(){

  var dataAtual = new Date()
  var horas = dataAtual.getHours()
  var minutos = dataAtual.getMinutes()
  var segundos = dataAtual.getSeconds()

  if (minutos < 10) {
  minutos = '0' + minutos;
  }
  
if (segundos < 10) {
  segundos = '0' + segundos;
}

var horarioAtual = horas + ':' + minutos + ':' + segundos;

document.getElementById('relogio').textContent = ' ' + horarioAtual;
}

atualizarHorario();

setInterval(atualizarHorario, 1);