class Inventario {
  constructor() {
    this.productos = [];
  }

  engadirProducto(producto) {
    this.productos.push(producto);
  }

  consultarStock(nomeProd) {
    const prodBuscado = this.productos.find((prod) => {
      return prod.nome === nomeProd;
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

export { Inventario };
