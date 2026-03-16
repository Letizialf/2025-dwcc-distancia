// Temos que importar a clase Vehiculo porque moto hereda dela

import { Vehiculo } from "./Vehiculo.js";

class Moto extends Vehiculo {
  chequearEstado() {
    console.log(
      `A moto con matrícula ${this.matricula} está lista para ser utilizada`
    );
  }
}

export { Moto };
