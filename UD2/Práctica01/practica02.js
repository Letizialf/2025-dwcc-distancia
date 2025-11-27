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
/** SOLUCIÓN 1 */

// Para evitar erros imos a converter estas variables en constantes, para que non se poidan modificar os seus valores
const prezoProduto = 50;
const desconto = 10;
let prezoFinal = prezoProduto - desconto;
console.log("O prezo final é: " + prezoFinal);

// Se despois se quere calcular outro prezoFinal simplemente podemos declarar novas variables e listo.

var prezoProduto2 = 100;
var prezoFinal2 = prezoProduto2 - desconto; // Usar novas variables ou corrixir a lóxica
console.log(`O prezo final é: ${prezoFinal2}`);

/** SOLUCIÓN 2 */

// Tamén se podería converter o cálculo nunha función, que podemos chamar pasando como parámetros as variables que nós queiramos e así evitar calcular o mesmo 2 veces

function calculoPrezoFinal(prezo, desconto) {
  let prezoFin = prezo - desconto;
  return `O prezo final é: ${prezoFin}`;
}

console.log(calculoPrezoFinal(prezoProduto, desconto));
console.log(calculoPrezoFinal(prezoProduto2, desconto));

console.log("----------------------------------");

// EXERCICIO 6--------------------------------------
console.log("Exercicio 6: Refactorizar código");

// Declaramos as variables con let e convertemos en constante o nome, xa que non se lle pode reasignar outro valor
const usuario = "Manuel García";
let prezoProdutoInicial = 200;
let cantidade = 3;
// Esta variable declárase con valor 0 porque se reasignará un valor dependendo da cantidade de produtos que se leven, polo que ten que estar inicializada para logo poder reasignarlle outros valores.
let descontoAplicar = 0;

// Creamos un bucle para determinar o desconto que se aplicará ao produto en función da cantidade que se compre.
if (cantidade > 5) {
  descontoAplicar = 10;
} else if (cantidade > 10) {
  descontoAplicar = 20;
}

// Agora calculamos o prezo final directamente no valor da variable
let prezoProdutoFinal =
  prezoProdutoInicial * cantidade * (1 - descontoAplicar / 100);

// Por último temos que imprimir en consola os datos acadados e, para facilitar e axilizar a escritura, usamos ``
console.log(`O usuario ${usuario} debe pagar ${prezoProdutoFinal} euros.`);

console.log("-----------------------------------");

// EXERCICIO 7 -----------------------------------
console.log("Exercicio 7: Tipos de datos");

let nomeU = "Laura";
console.log(`1:Nome - ${nomeU} ---- ${typeof nomeU}`);

let apelidoU = "Lopez";
console.log(`2:Apelido - ${apelidoU} ---- ${typeof apelidoU}`);

let pais = "España";
console.log(`3:Pais - ${pais} ---- ${typeof pais}`);

let capital = "Madrid";
console.log(`4:Capital - ${capital} ---- ${typeof capital}`);

let idadeU = 20;
console.log(`5:Idade - ${idadeU} ---- ${typeof idadeU}`);

let casada = true;
console.log(`6:Casada? - ${casada} ---- ${typeof casada}`);

const g = 9.8;
console.log(`7:Gravedad Terra - ${g}m/s2 ---- ${typeof g}`);

const ebullicion = 100;
console.log(`8:Ebullicion - ${ebullicion}Cº ---- ${typeof ebullicion}`);

const PI = 3.14;
console.log(`9:Pi - ${PI} ---- ${typeof PI}`);

console.log("------------------------------------");

// EXERCICIO 8 ------------------------------------
console.log("Exercicio 8: Operadores en JS");
console.log("...........PARTE 1...............");

let a = 10,
  b = "10",
  c = 15,
  d = 20;

console.log(`1: a == b > ${a == b}`); // true porque teñen o mesmo valor (10)
console.log(`2: a != c > ${a != c}`); // true porque son diferentes en valor
console.log(`3: a === b > ${a === b}`); // false porque ainda que teñen o mesmo valor non son do mesmo tipo (a = number, b = String)
console.log(`4: a !== b > ${a !== b}`); // true porque non teñen o mesmo tipo
console.log(`5: d > c = ${d > c}`); // true porque 20 > 15
console.log(`6: d >= c = ${d >= c}`); // true porque sigue sendo maior
console.log(`7: a < c = ${a < c}`); // true porque 10 < 15
console.log(`8: a <= b = ${a <= b}`); // true porque a ten o mesmo valor que b.
// Sempre que se opera con variables, ainda que non sexan o mesmo tipo, JS fai unha conversión automática a Number sempre que pode ou a outro tipo de dato -----Revisar docs Cristina

console.log(".......PARTE 2...........");
let x = 10,
  y = 3;

console.log(`Resultado da suma entre x e y: ${x + y}`);
console.log(`Resultado da resta entre x e y: ${x - y}`);
console.log(`Resultado da multiplicación entre x e y: ${x * y}`);
console.log(`Resultado da división entre x e y: ${x / y}`);
console.log(`Resultado do resto da división de x entre y: ${x % y}`);

console.log(`Icremento de 1 en x: ${(x += 1)}`);
console.log(x);

console.log(`Decremento de 1 en x: ${(x -= 1)}`);
console.log(x);
// Tamén se pode incrementar ou decrementar con x++ ou x--

console.log(
  `Uso de operadores unarios para amosar o valor de x como número e o seu oposto: ${+x} / ${-x}`
);

console.log(".......PARTE 3...........");
let a3 = 10,
  b3 = 5;

// Asigna o valor de b a a:
a3 = b3;
console.log(`Asignación: ${a3}`); //5

// Suma b a a usando o operador +=
a3 += b3;
console.log(`Suma e asignación: ${a3}`); //10

// Resta b de a usando -=
a3 -= b3;
console.log(`Resta e asignación: ${a3}`); //5

// Multiplica a por b usando *=
a3 *= b3;
console.log(`Multiplicación e asignación: ${a3}`); //25

// Divide a por b usando /=
a3 /= b3;
console.log(`División e asignación: ${a3}`); //5

// Obten o módulo de a e b con %=
a3 %= b3;
console.log(`Módulo e asignación: ${a3}`);

// Desplaza a 1 bit á esquerda con <<=
a3 <<= 1;
console.log(`Desprazamento de 1 bit á esquerda: ${a3}`);

// Desplaza a 1 bit á dereita con >>=
a3 >>= 1;
console.log(`Desplazamento á dereita de 1 bit: ${a3}`);

// Desplaza a 1 bit á dereita sen signo con >>>=
a3 >>>= 1;
console.log(`Desplazamento á dereita de 1 bit sen signo: ${a3}`);

// Aplica o operador AND bit a bit con &=
a3 = 10; // Reseteamos a ó seu valor orixinal para poder obter os resultados adecuados nas operacións lóxicas

a3 &= b3;
console.log(`AND bit a bit: ${a3}`); //0

// OR bit a bit
a3 = 10;
a3 |= b3;
console.log(`OR bit a bit: ${a3}`); //15

// XOR bit a bit
a3 = 10;
a3 ^= b3;
console.log(`XOR bit a bit: ${a3}`); //15

// Crea un array e asigna a ao primeiro posto do array, cal é o valor do primeiro elemento do array?
let arr = [];
arr[0] = a3;
console.log(`Valor do primeiro elemento do array: ${arr[0]}`);
