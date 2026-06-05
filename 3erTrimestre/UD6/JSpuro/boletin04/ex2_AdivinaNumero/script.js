// Primeiro temos que xerar un número random entre 1-100 e almacenalo nunha variable
let secretNumber;
let remainingGesses;

// Recollemos todos os elementos que imos modificar ou necesitar
const comprobar = document.getElementById("comprobar");
const userNumber = document.getElementById("entradaNumero");
const message = document.getElementById("mensaxe");
const intentos = document.getElementById("intentos");
const restart = document.getElementById("reiniciar");

// Función para iniciar o xogo, aqui poñemos todos os valores no seu estado inicial
function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  remainingGesses = 10;
  comprobar.disabled = false;
  userNumber.disabled = false;
  userNumber.value = "";
  message.classList.remove("erro", "correcto");
  intentos.textContent = remainingGesses;
  message.textContent = "";
}

comprobar.addEventListener("click", function () {
  // Agora aquí comparamos os numeros
  let guess = parseInt(userNumber.value);
  console.log(guess);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent =
      "Por favor, introduce un número válido para poder comezar a xogar";
    message.classList.add("erro");
    message.classList.remove("correcto");
    return;
  }

  // Aquí manexaremos os intentos restantes
  remainingGesses--;
  intentos.textContent = `Intentos restantes: ${remainingGesses}`;

  if (secretNumber === guess) {
    message.textContent = "Correcto!";
    message.classList.add("correcto");
    message.classList.remove("erro");
    endGame();
  } else if (remainingGesses <= 0) {
    message.textContent = `Perdeches! Quedaches sen intentos, o número era ${secretNumber}`;
    message.classList.add("erro");
    message.classList.remove("correcto");
    endGame();
  } else if (secretNumber < guess) {
    message.textContent = "Moi alto";
    message.classList.add("erro");
    message.classList.remove("correcto");
  } else if (secretNumber > guess) {
    message.textContent = "Moi baixo";
    message.classList.add("erro");
    message.classList.remove("correcto");
  }
});

// Esta funcion desactivará os campos especificados unha vez o xogo remate
function endGame() {
  comprobar.disabled = true;
  userNumber.disabled = true;
}

// Agora engadimoslle a funcionalidade ao botón para volver a comezar o xogo
restart.addEventListener("click", startGame);
startGame();
