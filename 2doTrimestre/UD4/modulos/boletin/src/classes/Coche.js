// Tempos que importar a clase Vehiculo porque Cocj¡he hereda de Vehiculo

import { Vehiculo } from "./Vehiculo.js";

class Coche extends Vehiculo {
  ofrecerAsistencia() {
    console.log(
      `O coche con matrícula ${this.matricula} está dispoñible para asistencia en ruta`
    );
  }
}

export { Coche };
