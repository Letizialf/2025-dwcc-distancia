// Nesta clase teño que importar a clase ContaBancaria porque esta é unha subclase que hereda

import { ContaBancaria } from "./ContaBancaria.js";
class ContaXestionada extends ContaBancaria {
  cobrarComision() {
    const comision = this.obterSaldo() * 0.02;
    this.retirar(comision);
    // console.log(this.obterSaldo()); //Imprimimos o saldo logo de cobrar a comisión
    console.log(`A comisión do 2% foi cobrada: comisión = ${comision}`);
  }
}

export { ContaXestionada };
