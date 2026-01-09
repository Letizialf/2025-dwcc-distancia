// Función para validar un número de tarxeta de crédito segundo o Algoritmo de Luhn
function validarTarxetaCredito(numeroTarxeta) {
  //TODO: Resolver o exercicio

  // Manexo de erros
  if (!/^\d{13,19}$/.test(numeroTarxeta)) {
    return false; // Número inválido
  }

  let suma = 0;
  // Lóxica

  // Iteramos sobre o String para operar con cada díxito
  for (let i = 0; i < numeroTarxeta.length; i++) {
    let digito = parseInt(numeroTarxeta[numeroTarxeta.length - 1 - i], 10);

    //   Nas posicións impares, multiplicamos por 2
    if (i % 2 == 0) {
      digito *= 2;
      //   console.log(digito);

      // Se o resultado desta multiplicación é maior que 9, restamos 9 ao resultado
      if (digito > 9) {
        digito -= 9;
      }
    }

    suma += digito;
  }

  return suma % 10 === 0;
}

// Manexo do evento do formulario
document
  .getElementById("creditCardForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar o envío do formulario por defecto

    const numeroTarxeta = document
      .getElementById("creditCardNumber")
      .value.trim();
    const resultadoElemento = document.getElementById("result");

    if (validarTarxetaCredito(numeroTarxeta)) {
      resultadoElemento.textContent = "O número da tarxeta é válido.";
      resultadoElemento.style.color = "green";
    } else {
      resultadoElemento.textContent = "O número da tarxeta NON é válido.";
      resultadoElemento.style.color = "red";
    }
  });
