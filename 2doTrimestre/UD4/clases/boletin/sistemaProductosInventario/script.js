/**
 * SISTEMA DE XESTIÓN DE PRODUCTOS E INVENTARIO
 * Crear un sistema de productos nun inventario, onde cada producto ten un nome, prezo e stock.
 *
 * class Producto:
 *  - constructor(nome, prezo, stock)
 *  - metodo modificarStock(cantidad)--> Aumentar ou reducir en función da cantidade
 *
 * class Inventario:
 *  - varios Productos
 *  MÉTODOS:
 *  - engadirProducto(prod)
 *  - consultarStock(nome) --> stock dun produto polo seu nome
 *  - mostrarInventario() --> lista prods e o seu stock
 *
 * class ProdutoConDesconto:
 *  - static method calcularPrezoConDesconto(prezo, desconto) --> devolve o prezo despois de aplicar o desconto porcentual
 */

class Producto {
  constructor(nome, prezo, stock) {
    this.nome = nome;
    this.prezo = prezo;
    this.stock = stock;
  }

  modificarStock(cantidad) {
    this.stock += Number(cantidad);
  }
}

class Inventario {
  constructor() {
    this.productos = [];
  }

  engadirProducto(producto) {
    this.productos.push(producto);
  }

  consultarStock(nomeProd) {
    const prodBuscado = this.productos.find((prod) => {
      prod.nome === nomeProd;
    });

    if (prodBuscado) {
      return prodBuscado.stock;
    } else {
      console.log("O produto que buscas non se atopa no inventario");
    }
  }

  mostrarInventario() {
    return this.productos.forEach((prod) => {
      console.log(
        `${prod.nome}; prezo: ${prod.prezo}; cantidade en stock: ${prod.stock}`
      );
    });
  }
}

class ProductoConDesconto extends Producto {
  static calcularPrezoConDesconto(prezo, desc) {
    const desconto = (prezo * desc) / 100;
    return prezo - desconto;
  }
}

// COMPROBACIÓNS

const inventario = new Inventario();
const produto1 = new Producto("Uvas", 2.33, 50);
const produto2 = new Producto("Leite", 2.0, 75);

const prodDescontado = new ProductoConDesconto("Auga", 1.0, 10);

// Engadimos os produtos ao inventario
inventario.engadirProducto(produto1);
inventario.engadirProducto(produto2);
inventario.engadirProducto(prodDescontado);

// Facemos as CONSULTAS
console.log(
  `Consulta do stock do Leite: ${inventario.consultarStock("Leite")}`
);

// Modificamos o stock de un producto
produto1.modificarStock(9); //Restamos 9 unidades ao stock
inventario.consultarStock("Uvas");

// Comprobamos o prezo con desconto da auga
console.log(
  "Prezo con desconto do 10% da auga: " +
    ProductoConDesconto.calcularPrezoConDesconto(3, 10)
);

// Amosamos o inventario completo
inventario.mostrarInventario();
