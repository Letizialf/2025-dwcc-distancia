function bisesto(ano) {
  //TODO: a realizar polo alumno

  /**
   * SOLUCIÓN 1
   * Primeiro intenteino con if-else
   */
  //   if (ano % 100 == 0) {
  //     console.log(
  //       "O ano é divisible por 100, agora comprobamos que sexa tamén por 400"
  //     );

  //     if (ano % 400 == 0) {
  //       console.log(
  //         "O ano é divisible por 100 e tamén por 400, polo que podemos determinar que é bisesto"
  //       );
  //       return true;
  //     }
  //     return false;
  //   } else if (ano % 4 == 0) {
  //     //   Se o ano é divisible entre 4, é bisiesto
  //     return true;
  //   }

  /**
   * SOLUCIÓN 2
   * Pero tamén se pode facer con operador ternario
   *
   */
  return ano % 100 === 0 ? ano % 400 === 0 : ano % 4 === 0;
}

function comprobarAno() {
  const ano = document.getElementById("anoInput").value;
  const resultado = document.getElementById("resultado");

  if (ano === "") {
    resultado.textContent = "Por favor, introduce un ano válido.";
    return;
  }

  const eBisesto = bisesto(Number(ano));

  if (eBisesto) {
    resultado.textContent = `O ano ${ano} é bisesto.`;
    resultado.style.color = "green";
  } else {
    resultado.textContent = `O ano ${ano} non é bisesto.`;
    resultado.style.color = "red";
  }
}

//==================================
// Script para automatizar probas.
//==================================
function executarProbas() {
  const probas = [
    { ano: 2020, esperado: true },
    { ano: 1900, esperado: false },
    { ano: 2000, esperado: true },
    { ano: 2021, esperado: false },
    { ano: 1600, esperado: true },
    { ano: 1700, esperado: false },
    { ano: 2024, esperado: true },
    { ano: 1804, esperado: true },
    { ano: 1804, esperado: true },
    { ano: 1808, esperado: true },
    { ano: 1812, esperado: true },
    { ano: 2000, esperado: true },
    { ano: 1996, esperado: true },
    { ano: 1992, esperado: true },
    { ano: 2096, esperado: true },
    { ano: 2056, esperado: true },
  ];

  let exitos = 0;

  probas.forEach((proba) => {
    const resultado = bisesto(proba.ano);
    if (resultado === proba.esperado) {
      console.log(`✔️ Proba correcta para o ano ${proba.ano}`);
      exitos++;
    } else {
      console.error(
        `❌ Proba fallada para o ano ${proba.ano}. Esperado: ${proba.esperado}, obtido: ${resultado}`
      );
    }
  });

  console.log(`Probas superadas: ${exitos}/${probas.length}`);
}
