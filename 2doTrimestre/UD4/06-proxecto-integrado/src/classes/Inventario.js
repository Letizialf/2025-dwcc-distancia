export default class Inventario {
  constructor() {
    // TODO: inicializa array de produtos
    this.produtos = [];
  }
  engadirProduto(produto) {
    // TODO: engadir ao array
    throw new Error('Implementar Inventario.engadirProduto');
  }
  limpar() {
    // TODO: baleirar o inventario
    throw new Error('Implementar Inventario.limpar');
  }
  consultarStock(nome) {
    // TODO: devolver stock do produto polo seu nome ou null
    throw new Error('Implementar Inventario.consultarStock');
  }
  resumo() {
    // TODO: devolver { totalItems, prezoMedio }
    throw new Error('Implementar Inventario.resumo');
  }
}
