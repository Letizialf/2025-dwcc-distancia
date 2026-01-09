function main() {
  let nota = document.getElementById("nota").value;
  let resultado = avaliarNota(nota);
  document.getElementById("resultado").innerText = resultado;
}
function avaliarNota(nota) {
  let resultado = "";
  nota = parseFloat(nota);

  //TODO realizar polo alumnado.

  // Primeiro valido que poida traballar coa nota introducida
  if (isNaN(nota)) {
    return console.log("ERROR, a nota ten que ser numérica");
  } else if (nota < 0 || nota > 10) {
    return alert(
      "A nota ten que ser válida, non se leerán números menores que 0 ou maiores que 10"
    );
  }

  // Agora, para poder facer o exercicio con un Switch temos que traballar con números enteiros, sen decimais.
  // Para iso parseamos a nota a Int

  let notaEnteira = parseInt(nota);

  // Agora podemos facer o Switch

  switch (notaEnteira) {
    case 10:
    case 9:
      resultado = `¡¡Sobresaliente!! --> ${nota.toFixed2}`;
      break;

    case 8:
    case 7:
      resultado = `¡Notable! --> ${nota.toFixed(2)}`;
      break;
    case 6:
      resultado = `Ben --> ${nota.toFixed(2)}`;
      break;
    case 5:
      resultado = `Suficiente ¬¬ --> ${nota.toFixed(2)}`;
      break;
    // case 4:
    // case 3:
    // case 2:
    // case 1:
    // case 0:
    // Para evitar estas liñas de código podemos establecer un 'por defecto' para que, se non se da ningún dos casos previamente previstos, o resultado sexa o mesmo para os casos restantes
    default:
      resultado = `Insuficiente :( --> ${nota.toFixed(2)}`;
      break;
  }

  return resultado;
}

//==================================
// Script para automatizar probas.
//==================================
function runNotaTests() {
  const tests = [
    {
      input: 10,
      expected: "¡¡Sobresaliente!! / 10.00",
      description: "Nota 10",
    },
    {
      input: 9.5,
      expected: "¡¡Sobresaliente!! / 9.50",
      description: "Nota 9.5",
    },
    { input: 9, expected: "¡¡Sobresaliente!! / 9.00", description: "Nota 9" },
    { input: 8, expected: "¡Notable! / 8.00", description: "Nota 8" },
    { input: 7, expected: "¡Notable! / 7.00", description: "Nota 7" },
    { input: 6, expected: "Ben / 6.00", description: "Nota 6" },
    { input: 5, expected: "Suficiente ¬¬ / 5.00", description: "Nota 5" },
    { input: 4, expected: "Insuficiente :( / 4.00", description: "Nota 4" },
    { input: 3, expected: "Insuficiente :( / 3.00", description: "Nota 3" },
    { input: 2, expected: "Insuficiente :( / 2.00", description: "Nota 2" },
    { input: 0, expected: "Insuficiente :( / 0.00", description: "Nota 0" },
    {
      input: -1,
      expected: "Error!! O valor está fora do rango de notas de 0 a 10 / -1",
      description: "Nota negativa",
    },
    {
      input: "Paco",
      expected: "Error!! O  valor non é un dato numérico / Paco",
      description: "Entrada non numérica",
    },
    {
      input: "1A",
      expected: "Error!! O  valor non é un dato numérico / 1A",
      description: "Entrada non numérica",
    },
    {
      input: -11,
      expected: "Error!! O valor está fora do rango de notas de 0 a 10 / -11",
      description: "Nota negativa",
    },
    {
      input: -0.1,
      expected: "Error!! O valor está fora do rango de notas de 0 a 10 / -0.1",
      description: "Nota negativa",
    },
  ];

  let totalTests = tests.length;
  let passedTests = 0;
  let failedTests = 0;
  let output = "";

  tests.forEach((test, index) => {
    const result = avaliarNota(test.input); // Simula a función avaliarNota

    let passed = result === test.expected;

    output += `Test ${index + 1}: ${test.description}\n`;
    output += `  Expected: ${test.expected}\n`;
    output += `  Result: ${result} - ${passed ? "✓" : "✗"}\n\n`;

    if (passed) {
      passedTests++;
    } else {
      failedTests++;
    }
  });

  let successRate = (passedTests / totalTests) * 100;
  output += `Total de Probas: ${totalTests}\n`;
  output += `Probas Aprobadas: ${passedTests}\n`;
  output += `Probas Fallidas: ${failedTests}\n`;
  output += `Porcentaxe de Acertos: ${successRate.toFixed(2)}%\n`;

  console.log(output);
}
