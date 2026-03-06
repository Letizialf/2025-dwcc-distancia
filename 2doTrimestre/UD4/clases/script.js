// No caso das clases, estas non se aloxan (hoisting) polo queteremos que declarar as clases antes de usalas.

/** EXPRESIÓNS DE CLASES
 * Permiten definir clases de xeito anónimo ou nomeándoas
 */

// Clase anónima
let Rectangulo = class {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
};
console.log(Rectangulo.name); //O nome da propia clase

// Clase nomeada
let Triangulo = class Triangulo1 {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }
};
console.log(Triangulo.name); //Triangulo1 porque a nomeamos

/** CORPO E DEFINICIÓN DE MÉTODOS
 * O corpo dunha clase contense entre {}
 * Dentro do corpo definimos os membros da clase, como os métodos e o constructor.
 *
 * O CONSTRUCTOR: é un método especial que nos permite crear instancias duha clase. Só pode haber 1 por clase.
 *
 * GETTERS & SETTERS: son métodos especiais usados para acceder e modificar as propiedades dunha clase de forma controlada.
 * ~ Os getters permítennos acceder ó valor dunha pripiedade.
 * ~ Os setters permítennos modificar o valor dunha propiedade.
 */

class Rectangulo2 {
  constructor(alto, ancho) {
    this._alto = alto;
    this._ancho = ancho;
  }
  set alto(valor) {
    if (valor < 0) {
      console.log("O valor do alto non pode ser negativo.");
    } else {
      this._alto = valor;
    }
  }
  get alto() {
    return this._alto;
  }
}

const rect = new Rectangulo2(10, 5); //Creamos unha instancia de REctangulo2 e asignamoslle os valores das propiedades no constructor
console.log(rect.area); //Aquí accedemos ó get() de area

rect.alto = -5; // O valor do alto non pode ser negativo.
rect.alto = 7;
console.log(rect.alto); // 7
