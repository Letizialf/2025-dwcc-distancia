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

/**
 * TAREFA_2: Crea un array con diferentes tipos de datos e utiliza métodos como push(), pop(), shift() e unshift() para engadir ou eliminar elementos
 */

let arrayProba = [1, "mazá", true, 5.9];

// Manipulación de arrays

// push() --> Engadir un novo elemento na última posición do array, se eliminamos a sentenza co push os elementos engadidos tamén se perden
arrayProba.push("pera");
console.log(arrayProba);

// pop() --> Eliminar elementos, elimina o último elemento do array, se eliminamos a sentenza co pop os elementos 'eliminados' reaparecen
arrayProba.pop();
console.log(arrayProba);

// shift() --> Elimina o primeiro elemento do array, se eliminamos a sentenza 'reaparece' o elemento eliminado
arrayProba.shift();
console.log(arrayProba);

// unshift() --> Engade elementos na primeira posición do array, se eliminamos a sentenza desaparece o elemeto engadido.
arrayProba.unshift("banana");
console.log(arrayProba);

/** Agora utiliza métodos de arrays (map, filter, reduce) para modificar arrays */

let arrayNumbers = [1, 2, 3, 4, 5, 6];

// map() --> crea un novo array aplicando unha función a cada un dos elementos do array base

let dobles = arrayNumbers.map((nume) => nume * 2);
console.log(dobles); //Devolve un novo array no que cada elemento do array base se multiplicou por 2

// filter() --> crea un novo array cos elementos do array base que pasen o test establecido
let pares = arrayNumbers.filter((num) => num % 2 == 0);
console.log(pares); //Devolve un novo array cos elementos do array base que son pares

// reduce() --> reduce un array a un único valor.
// Executa unha función reductora sobre cada elemento do array base, pasando ao seguinte paso o valor devolto pola iteración anterior.

// A primeira vez que se executa a función de callback non hai un valor previo, polo que se suele asignar un valor inicial (0 maioritariamente). No caso de non proporcionar este valor tomarase como referencia previa o primeiro elemento do array.

// REVISAR DOCS DE CRISTINA PORQUE VÉN MELLOR EXPLICADO
let sumatorio = arrayNumbers.reduce((acc, num) => acc + num, 0);
console.log(sumatorio);

/** TAREFA_3: Utiliza funcións anónimas en casos onde non sexa necesario nomear unha función, como por exemplo, en eventos asincrónicos ou en iteracións sobre arrays.
 * Experimenta co uso de setTimeout() ou setInterval() pasando unha función anónima como argumento e observa como se executa tras un período de tempo.
 */
