"use strict";

/**
 * Tarefa 1_DEfine varias funcións que reciban parámetros e realicen operacións simples.
 * Experimenta con diferentes modos de declarar una función (declarativa, aónima e flecha)
 */

// Función declarativa
function sumar(a, b) {
  return a + b;
}
console.log(sumar(6, 3));

// Funcion anonima
const multiplicacion = function (a, b) {
  return a * b;
};
console.log(multiplicacion(6, 3));

// Funcion flecha

const resta = (a, b) => a - b;
console.log(resta(6, 3));
