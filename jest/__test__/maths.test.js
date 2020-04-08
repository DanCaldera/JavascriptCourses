const { sumar, multiplicar, restar, dividir } = require('../maths.js');

describe('Calculos matematicos', () => {
  test('Prueba de sumas', () => {
    expect(sumar(1, 1)).toBe(2);
  });

  test('Prueba de sumas (false)', () => {
    expect(sumar(1, 2)).not.toBe(2);
  });

  test('Prueba de restas', () => {
    expect(restar(100, 99)).toBe(1);
  });

  test('Prueba de multiplicaciones', () => {
    expect(multiplicar(2, 2)).toBe(4);
  });

  test('Prueba de diviciones', () => {
    expect(dividir(10, 2)).toBe(5);
  });
});
