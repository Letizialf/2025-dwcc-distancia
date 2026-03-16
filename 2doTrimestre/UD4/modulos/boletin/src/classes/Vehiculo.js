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

export { Vehiculo };
