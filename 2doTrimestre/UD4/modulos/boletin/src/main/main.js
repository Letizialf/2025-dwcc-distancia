/**Arquivo no que importaremos todos os módulos que conteñen ás clases.
 *
 * OBXECTIVO: instanciar e probar as funcionalidades
 */

// XESTIÓN CONTAS BANCARIAS

// import { ContaBancaria } from "../classes/ContaBancaria.js";

import { ContaXestionada } from "../classes/ContaXestionada.js";

const contaXestionada = new ContaXestionada(9000, "Juan Martinez");

console.log("1. Conta Bancaria ---------------------");

contaXestionada.depositar(500);
console.log("saldo: " + contaXestionada.obterSaldo());

contaXestionada.cobrarComision();
console.log("O saldo da conta é: " + contaXestionada.obterSaldo());

// XEXTIÓN DE PRODUTOS
console.log("2. Produtos ----------------------");

import { Producto } from "../classes/Produto.js";
import { ProductoConDesconto } from "../classes/ProdutoConDesconto.js";

const prod1 = new Producto("Agua", 1.5, 100);
prod1.modificarStock(50);
console.log(`Stock dispoñible de ${prod1.nome}: ${prod1.stock}`);

const prodDesconto = new ProductoConDesconto("Leite", 2.0, 50);
console.log(
  `O prezo de ${
    prodDesconto.nome
  } logo de aplicarlle o desconto do 10% é de: ${ProductoConDesconto.calcularPrezoConDesconto(
    2.0,
    10
  )}`
);

// XESTIÓN DE VEHÍCULOS
console.log("3. Vehículos ----------------------");

import { Moto } from "../classes/Moto.js";
import { Coche } from "../classes/Coche.js";

const coche = new Coche("Coche", "1234ABC", 40);
const moto = new Moto("Moto", "2345DEF", 20);

console.log(
  `O prezo final para o coche unha vez aplicado o desconto é de: ${coche.calcularDesconto(
    10
  )}€ por día`
);

console.log(
  `O prezo para a moto unha vez aplicado o desconto é de: ${moto.calcularDesconto(
    6
  )}€ por día`
);

coche.ofrecerAsistencia();
moto.chequearEstado();
