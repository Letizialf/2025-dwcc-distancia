let numero = 3;
let texto = "texto";
let bool = true;
let nulo = null;
let indefinido = undefined;
let sim = Symbol("hola");
let data = new Date();

// Exercicio 6
console.log(typeof numero); // number
console.log(typeof texto); // string
console.log(typeof bool); // boolean
console.log(typeof nulo); // object
console.log(typeof indefinido); // undefined
console.log(typeof sim); // symbol
console.log(typeof data); // object

// Exercicio 7
console.log(numero instanceof Number); // false
console.log(texto instanceof String); // false
console.log(bool instanceof Boolean); // false
console.log(nulo instanceof Object); // false
console.log(indefinido instanceof Object); // false
console.log(sim instanceof Symbol); // A min dame false pero na solución é true
console.log(data instanceof Date); // true

// Exercicio 8:
/**
 * Por que o operador typeof devolve "object" para o valor null en JavaScript, e cal é a implicación deste comportamento en relación coa identificación de diferentes tipos de datos?
 * Porque null está asignado internamente como un obxecto dende que se iniciou JS
 *
 */

// Exercicio 9:
// 9.1: length
let cadea = "Ola, benvido á práctica de manipulación de Strings";
console.log(`A lonxitude da frase: ${cadea} é de ${cadea.length} caracteres`);

// 9.2: concat
let cad1 = "Ola";
let cad2 = " Mundo";

let cadConcatenada = cad1.concat(cad2);
console.log(cadConcatenada);

// 9.3: toUpperCase e toLowerCase
let upper = "ola mundo que tal";
let lower = "MARCHO QUE TEÑO QUE MARCHAR";

console.log(lower.toLowerCase());
console.log(upper.toUpperCase());

// 9.4: indexOf()
let paragrafo = "Aprender JavaScript pode ser divertido";

console.log(paragrafo.indexOf("pode")); //Devolve 20 porque é a posición na que empeza a palabra que estamos buscando

// 9.5: slice(), substring()
let cita = "O saber non ocupa lugar";

console.log(cita.slice(2, 7)); // saber
console.log(cita.substring(8, 17)); // non ocupa

// 9.6: replace()
let palabra = "Bonito";
let frase = "Hola mundo cruel";
console.log(frase);

frase = frase.replace("cruel", palabra);
console.log(frase);

// 9.7: split()
let lista = "mazá, laranxa, plátano, pera";
let arrayFrutas = lista.split(", ");
console.log(arrayFrutas);

// 9.8: trim()
let textoConEspazos = "            Ola mundo         ";
let textoSinEspazos = textoConEspazos.trim();
console.log(textoSinEspazos);
