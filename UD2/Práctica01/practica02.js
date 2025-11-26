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

let prezoProd = 100;
let iva = 21;
// Chamando á función e amosando o prezo total
console.log(calcularPrezoConIva(prezoProd, iva));

console.log(calcularPrezoConIva(21, 21)); //O prezo son 21€ e o IVA que hai que aplicarlle a ese prezo é do 21%, polo que o resultado final será 21(prezo) + 21% de 21(IVA) = 25.41(prezo con IVA)
console.log("---------------------------------");

// EXERCICIO 3--------------------------------------
console.log(
  "Exercicio 3: Declara variables e constantes cos nomes correctos e asignalles un valor adecuado"
);

console.log("1. Constante chamada pi co valor 3,1416");

const pi = Math.PI.toFixed(4); //Comentada polo ex4
console.log(pi);

console.log("2. Variable edad co valor 30");

let edad = 30;
console.log(edad);

console.log("3. Variable chamada nomeCompleto co valor Luis Gomez");

let nomeCompleto = "Luis Gomez";
console.log(nomeCompleto);

console.log("---------------------------------");

// EXERCICIO 4--------------------------------------
console.log("Exercicio 4: Reasignación de variables e constantes ");
//Completa o seguinte código onde se debe calcular a área dun círculo e logo modificar a súa cor.

// Declaración de constantes e variables
const pi2 = 3.1416;
let radio = 5;
// Cálculo da área do círculo
let area = pi2 * (radio * radio);
// Declaración da cor do círculo
let corCírculo = "vermello";
// Cambiar a cor do círculo
corCírculo = "azul";
console.log("Área: " + area + ", Cor: " + corCírculo);

//Constante número aureo co valor 1.618033
const aureo = 1.618033;
console.log(aureo);
console.log("---------------------------------");

// EXERCICIO 5--------------------------------------
console.log(
  "Exercicio 5: Refactoriza o seguinte código para que non se reutilicen variables innecesariamente e non se cometan erros de reasignación."
);

// Para evitar erros imos a converter estas variables en constantes, para que non se poidan modificar os seus valores
const prezoProduto = 50;
const desconto = 10;
let prezoFinal = prezoProduto - desconto;
console.log("O prezo final é: " + prezoFinal);

// Se despois se quere calcular outro prezoFinal simplemente podemos declarar novas variables e listo.

var prezoProduto2 = 100;
var prezoFinal2 = prezoProduto2 - desconto; // Usar novas variables ou corrixir a lóxica
console.log(`O prezo final é: ${prezoFinal2}`);

// Tamén se podería converter o cálculo nunha función, que podemos chamar pasando como parámetros as variables que nós queiramos e así evitar calcular o mesmo 2 veces

function calculoPrezoFinal(prezo, desconto) {
  let prezoFin = prezo - desconto;
  return `O prezo final é: ${prezoFin}`;
}

console.log(calculoPrezoFinal(prezoProduto, desconto));
console.log(calculoPrezoFinal(prezoProduto2, desconto));
