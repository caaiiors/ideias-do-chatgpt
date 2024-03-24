document.getElementById("converterBotao").addEventListener("click", function() {
  let amount = parseFloat(document.getElementById("amount").value);
  let fromCurrency = document.getElementById("from").value;
  let toCurrency = document.getElementById("to").value;

  fetch(`Coloque a API aqui.`)
  .then(response => response.json())
  .then(data => {
    if (data.conversion_rates) {
      let rate = data.conversion_rates[toCurrency];
      if (rate) {
          let result = amount * rate;
          document.getElementById("resultado").textContent = result.toFixed(2) + " " + toCurrency;
      } else {
          document.getElementById("resultado").textContent = "Erro na conversão de moeda.";
      }
  } else {
      document.getElementById("resultado").textContent = "Erro na conversão de moeda.";
  }
})
.catch(error => {
  console.error("Erro ao buscar dados da API:", error);
  document.getElementById("resultado").textContent = "Erro na conexão com a API.";
});
});
