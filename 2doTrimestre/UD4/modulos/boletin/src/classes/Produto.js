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

export { Producto };
