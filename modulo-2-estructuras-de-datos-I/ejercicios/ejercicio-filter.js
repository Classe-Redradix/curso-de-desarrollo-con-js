// Crea una función que devuelva solo los valores impares de esta lista
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// ❗ Opcional: Obten solo los objetos con el valor "important" a true
const list = [
  { name: 'lorem', important: false },
  { name: 'ipsum', important: true },
];

const oddList = numbers.filter(number => number % 2 !== 0);
console.log(oddList);

const importantList = list.filter(object => object.important);
console.log(importantList);
