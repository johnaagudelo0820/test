const cities = ['Ciudad de México', 'Bogotá', 'Lima', 'Buenos Aires', 'Guadalajara'];

const ramdomStrings = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
};

const reverseString2 = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(new Error('Error'));
    }
    resolve(str.split("").reverse().join(""));
  });
};

module.exports = ramdomStrings;