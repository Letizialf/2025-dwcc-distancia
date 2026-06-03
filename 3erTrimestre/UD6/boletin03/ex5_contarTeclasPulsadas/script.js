const input = document.getElementById("campoTexto");
const pContador = document.getElementById("contador");
let total = 0;

input.addEventListener("keypress", function () {
  total++;
  pContador.textContent = `Numero de teclas pulsadas: ${total}`;
});
