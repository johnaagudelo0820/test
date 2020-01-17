const ramdomStrings = require('../index');


describe('Probar funcionalidades de ramdomStrings', () => {
  test('probar la funcionalidad', () => {
    expect(typeof(ramdomStrings())).toBe('string');
  });
  test('comprobar que no existe una ciudad', () => {
    expect(ramdomStrings()).not.toMatch(/Manizale/);
  })
})