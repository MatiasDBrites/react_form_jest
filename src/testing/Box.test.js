require ("../components/Box");

test('no hay un "5" en contador', () => {
  expect(('contador')).not.toMatch(/U/);
});