import ProdutoConDesconto from '../src/classes/ProdutoConDesconto.js';

describe('ProdutoConDesconto (alumnado)', () => {
  test('calcularPrezoConDesconto aplica porcentaxe correctamente', () => {
    expect(ProdutoConDesconto.calcularPrezoConDesconto(100, 10)).toBe(90);
    expect(ProdutoConDesconto.calcularPrezoConDesconto(80, 25)).toBe(60);
  });

  test('manexa valores non numéricos convertendo a número', () => {
    expect(ProdutoConDesconto.calcularPrezoConDesconto('100', '10')).toBe(90);
  });
});
