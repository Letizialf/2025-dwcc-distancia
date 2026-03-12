/**
 * SISTEMA DE XESTIÓN DE VEHÍCULOS
 * Crear un sistema para xestionar vehículos, onde cada vehículo debe ter un tipo (coche, moto), número de matrícula e prezo de alquiler
 *
 * class Vehiculo:
 *  - constructor(tipo, matricula, prezoAlquiler)
 *  - métodos:
 *      calcularDesconto(dias) --> 10% por cada 5 días de alquiler
 *
 * class Coche extends Vehiculo:
 *  - ofrecerAsistencia() --> mostra unha mensaxe indicando que o coche está dispoñible para asistencia en ruta.
 *
 * class Moto extends Vehiculo:
 *  - chequearEstado() --> amosa unha mensaxe indicando que a moto está lista para ser utilizada
 */

class Vehiculo {
  constructor(tipo, matricula, prezoAlquiler) {
    this.tipo = tipo;
    this.matricula = matricula;
    this.prezoAlquiler = prezoAlquiler;
  }

  calcularDesconto(dias) {
    if (dias < 5) {
      console.log("Non hai desconto");
    } else {
      const desconto = Math.floor(dias / 5) * 0.1;
      return this.prezoAlquiler - this.prezoAlquiler * desconto;
    }
  }
}

class Coche extends Vehiculo {
  ofrecerAsistencia() {
    console.log(
      `O coche con matrícula ${this.matricula} está dispoñible para asistencia en ruta`
    );
  }
}

class Moto extends Vehiculo {
  chequearEstado() {
    console.log(
      `A moto con matrícula ${this.matricula} está lista para ser utilizada`
    );
  }
}

// COMPROBACIÓNS

let ferrari = new Coche("Coche", "1234ABC", 800);
let lambo = new Coche("Coche", "2345DEF", 750);

let kawasaki = new Moto("Moto", "1203JEJ", 400);
let ducati = new Moto("Moto", "5001LRD", 500);

// Comprobamos o prezo con desconto
console.log(
  `O prezo pola moto DUCATI para 10 días será de: ${ducati.calcularDesconto(
    10
  )}`
);
console.log(
  `O prezo polo coche LAMBO para 8 días será de: ${lambo.calcularDesconto(8)}`
);

ferrari.ofrecerAsistencia();
kawasaki.chequearEstado();
