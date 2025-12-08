// Función bisesto (a mesma de antes)
function bisesto(ano) {
  //TODO: a realizar polo alumno
  return ano % 100 === 0 ? ano % 400 === 0 : ano % 4 === 0;
}

// Nova función para obter anos bisestos entre dous anos dados
function obterAnosBisestos(anoInicio, anoFin) {
  let anosBisestos = [];

  //TODO: a realizar polo alumno que retorne unha lista con anos bisiestos
  for (let i = anoInicio; i <= anoFin; i++) {
    // console.log(i);
    if (bisesto(i) === true) {
      //   console.log(i);
      anosBisestos.push(i);
    }
  }

  return anosBisestos;
}

//Non edites esta función que será a encargada de mostrar o resultado na interface.
function comprobarAnosEntre() {
  const anoInicio = document.getElementById("anoInicio").value;
  const anoFin = document.getElementById("anoFin").value;
  const resultado = document.getElementById("resultado");

  if (anoInicio === "" || anoFin === "") {
    resultado.textContent = "Por favor, introduce ambos anos.";
    return;
  }

  const anosBisestos = obterAnosBisestos(Number(anoInicio), Number(anoFin));

  if (anosBisestos.length > 0) {
    resultado.textContent = `Anos bisestos entre ${anoInicio} e ${anoFin}: ${anosBisestos.join(
      ", "
    )}`;
    resultado.style.color = "green";
  } else {
    resultado.textContent = `Non hai anos bisestos entre ${anoInicio} e ${anoFin}.`;
    resultado.style.color = "red";
  }
}

//==================================
// Script para automatizar probas.
//==================================
function executarProbasIntervalos() {
  const probas = [
    { anoInicio: 1990, anoFin: 2010, esperado: [1992, 1996, 2000, 2004, 2008] },
    { anoInicio: 1900, anoFin: 1903, esperado: [] },
    {
      anoInicio: 1600,
      anoFin: 1700,
      esperado: [
        1600, 1604, 1608, 1612, 1616, 1620, 1624, 1628, 1632, 1636, 1640, 1644,
        1648, 1652, 1656, 1660, 1664, 1668, 1672, 1676, 1680, 1684, 1688, 1692,
        1696,
      ],
    },
    {
      anoInicio: 2000,
      anoFin: 2024,
      esperado: [2000, 2004, 2008, 2012, 2016, 2020, 2024],
    },
    { anoInicio: 2021, anoFin: 2023, esperado: [] },
    { anoInicio: 1980, anoFin: 1985, esperado: [1980, 1984] },
  ];

  let exitos = 0;

  probas.forEach((proba) => {
    const resultado = obterAnosBisestos(proba.anoInicio, proba.anoFin);
    const resultadoEsperado = proba.esperado;
    const testCorrecto = arraysSonIguais(resultado, resultadoEsperado);

    if (testCorrecto) {
      console.log(
        `✔️ Proba correcta para o intervalo ${proba.anoInicio}-${proba.anoFin}`
      );
      exitos++;
    } else {
      console.error(
        `❌ Proba fallada para o intervalo ${proba.anoInicio}-${proba.anoFin}. ` +
          `Esperado: [${resultadoEsperado.join(", ")}], ` +
          `obtido: [${resultado.join(", ")}]`
      );
    }
  });

  console.log(`Probas superadas: ${exitos}/${probas.length}`);
}

// Función auxiliar para comparar arrays (verifica que ambos arrays teñan os mesmos elementos na mesma orde)
function arraysSonIguais(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
