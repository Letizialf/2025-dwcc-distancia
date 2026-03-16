const Calculadora = require("./Calculadora.js");
// const calculadora= require("./Calculadora.js");

describe("Probas da clase Calculadora", () => {
  let calculadora;

  beforeEach(() => {
    calculadora = new Calculadora();
  });

  test("Sumar 2 + 4 é 6", () => {
    expect(calculadora.sumar(2, 4)).toBe(6);
  });

  test("Restar 3 menos 2 é 1", () => {
    expect(calculadora.restar(3, 2)).toBe(1);
  });

  test("Multiplicar 5 por 5 é 25", () => {
    expect(calculadora.multiplicar(5, 5)).toBe(25);
  });

  test("Dividir 60 entre 10 é 6", () => {
    expect(calculadora.dividir(60, 10)).toBe(6);
  });

  test("Dividir 5 entre 0 debería lanzar un erro", () => {
    expect(calculadora.dividir(5, 0)).toThrow("Non se pode dividir por 0");
  });
});
