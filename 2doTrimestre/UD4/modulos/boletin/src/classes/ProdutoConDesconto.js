// Aquí temos que importar a clase Producto porque ProductoConDesconto hereda de Producto

import { Producto } from "./Produto.js";

class ProductoConDesconto extends Producto {
  static calcularPrezoConDesconto(prezo, desc) {
    const desconto = (prezo * desc) / 100;
    return prezo - desconto;
  }
}

export { ProductoConDesconto };
