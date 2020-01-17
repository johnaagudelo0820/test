const text = "Hola Mundo";
const fruits = ['manzana', 'melon', 'banana'];

test('Debe contener un texto', () => {
  expect(text).toMatch(/Mundo/);
});

test('Tenemos una banana?', () => {
  expect(fruits).toContain('banana');
});

test('Mayor que', () => {
  expect(10).toBeGreaterThan(6);
});

test('it should be true', () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

test('testing callback', () => {
  reverseString('hola', (str) => {
    expect(str).toBe('aloh');
  });
});

const reverseString2 = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(new Error('Error'));
    }
    resolve(str.split("").reverse().join(""));
  });
};

test('Probar una promesa', () => {
  return reverseString2('hola')
    .then(str => {
      expect(str).toBe('aloh');
    });
});

test('Probar async / await ', async () => {
  const string = await reverseString2('hola');
  expect(string).toBe('aloh');
});

/* afterEach(() => console.log('despues de cada prueba'))
afterAll(() => console.log('despues de todas las prueba'))
beforeEach(() => console.log('antes de cada prueba'))
beforeAll(() => console.log('antes de todas las prueba')) */