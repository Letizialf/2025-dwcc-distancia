class Calculadora {
  sumar(a, b) {
    return a + b;
  }

  restar(a, b) {
    return a - b;
  }

  multiplicar(a, b) {
    return a * b;
  }
  dividir(a, b) {
    if (b === 0) {
      throw new Error("Non se pode dividir por 0");
    }
    return a / b;
  }
}

module.exports = Calculadora;
