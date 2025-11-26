
function main(){
    let nota =document.getElementById("nota").value;
    let resultado = avaliarNota(nota);
    document.getElementById("resultado").innerText = resultado;

}
function avaliarNota(nota) {
   let resultado = "";
   nota = parseFloat(nota);

    //TODO realizar polo alumnado.

   return resultado;
}



//==================================
// Script para automatizar probas.
//==================================
function runNotaTests() {
    const tests = [
        { input: 10, expected: "¡¡Sobresaliente!! / 10.00", description: "Nota 10" },
        { input: 9.5, expected: "¡¡Sobresaliente!! / 9.50", description: "Nota 9.5" },
        { input: 9, expected: "¡¡Sobresaliente!! / 9.00", description: "Nota 9" },
        { input: 8, expected: "¡Notable! / 8.00", description: "Nota 8" },
        { input: 7, expected: "¡Notable! / 7.00", description: "Nota 7" },
        { input: 6, expected: "Ben / 6.00", description: "Nota 6" },
        { input: 5, expected: "Suficiente ¬¬ / 5.00", description: "Nota 5" },
        { input: 4, expected: "Insuficiente :( / 4.00", description: "Nota 4" },
        { input: 3, expected: "Insuficiente :( / 3.00", description: "Nota 3" },
        { input: 2, expected: "Insuficiente :( / 2.00", description: "Nota 2" },
        { input: 0, expected: "Insuficiente :( / 0.00", description: "Nota 0" },
        { input: -1, expected: "Error!! O valor está fora do rango de notas de 0 a 10 / -1", description: "Nota negativa" },
        { input: "Paco", expected: "Error!! O  valor non é un dato numérico / Paco", description: "Entrada non numérica" },
        { input: "1A", expected: "Error!! O  valor non é un dato numérico / 1A", description: "Entrada non numérica" },
        { input: -11, expected: "Error!! O valor está fora do rango de notas de 0 a 10 / -11", description: "Nota negativa" },
        { input: -.1, expected: "Error!! O valor está fora do rango de notas de 0 a 10 / -0.1", description: "Nota negativa" }
        
    ];

    let totalTests = tests.length;
    let passedTests = 0;
    let failedTests = 0;
    let output = '';

    tests.forEach((test, index) => {
        const result = avaliarNota(test.input);  // Simula a función avaliarNota

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