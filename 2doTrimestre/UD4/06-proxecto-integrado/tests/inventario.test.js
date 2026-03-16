import Inventario from '../src/classes/Inventario.js';
import Produto from '../src/classes/Produto.js';

describe('Inventario (alumnado)', () => {
  test('engadirProduto e resumo', () => {
    const inv = new Inventario();
    inv.engadirProduto(new Produto('A', 10, 2));
    inv.engadirProduto(new Produto('B', 20, 3));
    const r = inv.resumo();
    expect(r.totalItems).toBe(5);
    expect(r.prezoMedio).toBe(15);
  });

  test('limpar borra produtos', () => {
    const inv = new Inventario();
    inv.engadirProduto(new Produto('A', 10, 2));
    inv.limpar();
    expect(inv.produtos.length).toBe(0);
  });

  test('consultarStock retorna stock ou null', () => {
    const inv = new Inventario();
    inv.engadirProduto(new Produto('A', 10, 2));
    expect(inv.consultarStock('A')).toBe(2);
    expect(inv.consultarStock('B')).toBeNull();
  });
});
