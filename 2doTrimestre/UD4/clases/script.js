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

  get area() {
    return this._alto * this._ancho;
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
console.log(rect.area); // Ahora cambiou porque cambiamos o valor do alto

/** Usos combinados de getters e setters */

class Persoa {
  constructor(primeiroNome, apelido) {
    this.primeiroNome = primeiroNome;
    this.apelido = apelido;
  }

  get nomeCompleto() {
    return `${this.primeiroNome} ${this.apelido}`;
  }

  set nomeCompleto(nome) {
    const [primeiroNome, apelido] = nome.split(" ");
    this.primeiroNome = primeiroNome;
    this.apelido = apelido;
  }
}

// Creamos a instancia da clase
const persoa = new Persoa("Ana", "Lopez");

//Accedemos ao getter para que nos devolva o nome e máis o apelido
console.log(persoa.nomeCompleto); // Ana Lopez

persoa.nomeCompleto = "Maria Nuñez"; // Usamos o setter para modificar o nome
console.log(persoa.primeiroNome); //Accedemos ó valor da propiedade que almacena o nome -- Maria
console.log(persoa.apelido); // Accedemos ó valor da propiedade que almacena o apelido -- Nuñez

// Tamén podemos volver a usar o getter que nos devolve o nome completo
console.log(persoa.nomeCompleto); // Maria Nuñez

// Tamén podemos crear máis personas
const persoa2 = new Persoa("Lois", "García");
console.log(persoa2.nomeCompleto);

/** CAMPOS PRIVADOS NAS CLASES
 * Son campos que non poden ser accesibles dende fora da clase, é dicir, non podemos mostralos por consola.
 */

class Animal {
  #familia;

  constructor(familia, nome) {
    this.#familia = familia;
    this.nome = nome;
  }

  get obterFamiliAnimal() {
    return this.#familia;
  }
}

const can = new Animal("canino", "Bluey"); //Creamos a instancia da clase para comprobar
console.log(can.obterFamiliAnimal); //Amosará a familia animal do noso obxecto
console.log(can.nome); //Amosará o nome do noso obxecto
// console.log(can.#familia); //Se temos ErrorLens xa non nos deixa escribilo, pero se non danos un SyntaxError

/** MÉTODOS ESTÁTICOS
 * Sos métodos que pertenecen a la clase en sí, no a las instancias.
 * Es decir, para utilizarlos tenemos que llamarlos desde la propia clase, no desde el objeto creado.
 */

class Calculadora {
  static sumar(a, b) {
    return a + b;
  }
}

console.log(Calculadora.sumar(2, 3)); // 5

// Este exemplo nos apuntes estaba incompleto, faltaba o constructor e a utilidade do método estático
class Punto {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Cálculo da distancia entre dous puntos
  static dis(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

const p1 = new Punto(0, 0);
const p2 = new Punto(3, 4);

console.log(Punto.dis(p1, p2)); // 5
