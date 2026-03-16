import { ordenarPorPrezoAsc, filtrarPorStockMin } from '../src/utils/arrays.js';

describe('utils arrays (alumnado)', () => {
  const data = [
    { nome: 'A', prezo: 20, stock: 1 },
    { nome: 'B', prezo: 10, stock: 5 },
    { nome: 'C', prezo: 15, stock: 3 },
  ];

  test('ordenarPorPrezoAsc ordena correctamente', () => {
    const res = ordenarPorPrezoAsc(data);
    expect(res.map((x) => x.nome)).toEqual(['B', 'C', 'A']);
  });

  test('filtrarPorStockMin filtra por mínimo', () => {
    const res = filtrarPorStockMin(data, 3);
    expect(res.map((x) => x.nome)).toEqual(['B', 'C']);
  });
});
