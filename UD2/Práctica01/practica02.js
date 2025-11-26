"use strict";

// EXERCICIO 1:
/**Engadir comentarios
Engade os comentarios necesarios para que alguén sen coñecemento previo poida entender o código

*/

// Declaramos 2 variables, unha co nome do usuario e outra ca idade.

// Creamos unha función chamada 'presentarUsuario' que recibe como parámetros as variables previamente declaradas, ás que lle asignamos os valores pertinentes.
// Esta función devolve unha cadea de texto na que se presentan os datos do usuario dunha forma máis clara

// Logo da función, facemos un console.log no que chamaremos á función para que se execute e se imprima na consola o resultado de dita función.

// Como se pode observar, ao chamar a función temos que indicar as variables como parámetros, se cambiamos os valores de ditas variables ou pasamos outras diferentes, o resultado que devolverá a función tamén cambiará

console.log("Exercicio 1: Engadir comentarios");

let nome = "María";
let idade = 25;

let nome2 = "Lola";
let idade2 = 20;

function presentarUsuario(nome, idade) {
  return nome + " ten " + idade + " anos.";
}
console.log(presentarUsuario(nome, idade)); //María ten 25 anos

console.log(presentarUsuario("Nuria", 78)); //Nuria ten 78 anos

console.log(presentarUsuario(nome2, idade2)); //Lola ten 20 anos

console.log("---------------------------------");

// EXERCICIO 2--------------------------------------
console.log("Exercicio 2: Engadir comentarios dentro dunha función");
/**
 * Declaramos unha función que nos permita calcular o prezo de calquera cousa con un IVA en da nosa elección
 *
 * Esta función recibe 2 parámetros:
 * @param {*} prezo
 * @param {*} iva 21, 10 ...
 * @returns
 */
function calcularPrezoConIva(prezo, iva) {
  // Calcula o imposto a aplicar

  /**
   * Declaramos unha variable que almacenará o porcentaje de IVA que se aplicará ó prezo.
   * Esta taxa calcuraráse da seguinte forma:
   *
   * Multiplicaremos o valor da variable 'prezo' polo valor da variable 'iva'
   * Logo, o resultado desa multiplicación será dividido entre 100 para conseguir o valor do IVA que se sumará ao prezo
   */
  let taxaIva = (prezo * iva) / 100;
  // Devolve o prezo total co imposto incluído

  /**
   * Logo, facemos que a función devolva o resultado do prezo + IVA para acadar o prezo final.
   */
  return prezo + taxaIva;
}

let prezoProduto = 100;
let iva = 21;
// Chamando á función e amosando o prezo total
console.log(calcularPrezoConIva(prezoProduto, iva));

console.log(calcularPrezoConIva(21, 21)); //O prezo son 21€ e o IVA que hai que aplicarlle a ese prezo é do 21%, polo que o resultado final será 21(prezo) + 21% de 21(IVA) = 25.41(prezo con IVA)
