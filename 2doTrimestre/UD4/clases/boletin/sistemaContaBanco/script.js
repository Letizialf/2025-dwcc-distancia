/**
 * SISTEMA DE XESTIÓN DE CONTAS BANCARIAS
 *
 * Debes de crear un sistema de xestión de contas bancarias que permita realizar depósitos, retiradas e consultas ao saldo.
 *
 * A clase ContaBancaria debe contar con:
 *  - Campos privados para saldo e titular
 *  - Métodos:
 *      - depositar(cantidad)
 *      - retirar(cantidad)
 *      - consultarSaldo()
 *      - Getters & Setters para o titular, de xeito que non se poidan modificar directamente os      valores, pero que se faga mediante validación
 *
 * clase ContaXestionada extends ContaBancaria:
 *  - cobrarComision() --> retira un 2% do saldo
 */

class ContaBancaria {
  #saldo;
  #titular;
  constructor(titular, saldo) {
    this.#titular = titular;
    this.#saldo = saldo;
  }

  // Métodos
  depositar(cantidad) {
    if (cantidad > 0) {
      this.#saldo += cantidad;
    } else {
      console.log("A cantidade indicada debe ser maior que 0");
    }
  }

  retirar(cantidad) {
    if (cantidad <= this.#saldo) {
      this.#saldo -= cantidad;
    } else {
      console.log("Saldo insuficiente");
    }
  }

  obterSaldo() {
    return this.#saldo;
  }

  // Getters & Setters
  get titular() {
    return this.#titular;
  }

  set titular(novoTitular) {
    if (novoTitular && novoTitular.lenght > 0) {
      this.#titular = novoTitular;
    } else {
      console.log("Nome do novo titular non é válido");
    }
  }
}

// Subclase que extende de ContaBancaria
class ContaXestionada extends ContaBancaria {
  cobrarComision() {
    const comision = this.obterSaldo() * 0.02;
    this.retirar(comision);
    // console.log(this.obterSaldo()); //Imprimimos o saldo logo de cobrar a comisión
    console.log(`A comisión do 2% foi cobrada: comisión = ${comision}`);
  }
}

// COMPROBACIÓN DAS CLASES E FUNCIONAMENTO
const conta = new ContaXestionada("Maria Valero", 10000); //Creamos unha instancia de ContaXestionada, xa que é a clase que hereda de ContaBancaria e onde temos o método para cobrar a comisión
conta.depositar(400); // O saldo cambia a 10400
conta.retirar(300); //O saldo volve a cambiar a 10100
conta.cobrarComision(); //Retira o 2% de 10100 do saldo (10100 - 202 = 9898)
console.log(conta.obterSaldo()); //Debería amosar 9898
