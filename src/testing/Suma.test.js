const suma = require('../components/Suma');

test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});

test('dos mas dos son cuatro', () => {
  expect(2 + 2).toBe(4);
});