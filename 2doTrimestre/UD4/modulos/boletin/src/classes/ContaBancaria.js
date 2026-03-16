class ContaBancaria {
  #saldo;
  #titular;

  constructor(saldo, titular) {
    this.#saldo = saldo;
    this.#titular = titular;
  }

  depositar(cantidad) {
    if (cantidad > 0) {
      this.#saldo += cantidad;
    } else {
      console.log("A cantidade a ingresar non é válida");
    }
  }

  retirar(cantidad) {
    if (cantidad <= this.#saldo) {
      this.#saldo -= cantidad;
    } else {
      console.log("Non hai saldo suficiente");
    }
  }

  obterSaldo() {
    return this.#saldo;
  }

  get titular() {
    return this.#titular;
  }

  set titular(novoTitular) {
    if (novoTitular && novoTitular.length > 0) {
      this.#titular = novoTitular;
    } else {
      console.log("O nome do novo titular non é válido");
    }
  }
}

export { ContaBancaria };
