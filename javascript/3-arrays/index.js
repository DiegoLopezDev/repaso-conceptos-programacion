/**
 * Arrays
 */

let fruta1 = 'Manzana';
let fruta2 = 'Pera';
let fruta3 = 'Mango';
let fruta4 = 'Guanábana';

console.log(fruta1, fruta2, fruta3, fruta4);

// ['string 1', 'string 2', ...]

// Array de strings
let frutas = [
  'Manzana',
  'Pera',
  'Mango',
  'Guanábana',
  'Banano',
  'Sandía',
  'Coco',
];

console.log(frutas);

// Acceder a Mango
console.log(frutas[2]);

// Iterar un array es recorrer índice x índice para obtener cada uno de sus valores

// Iteración con un ciclo for

console.log('Cantidad de frutas:', frutas.length);

for (let i = 0; i < frutas.length; i++) {
  console.log('Iteración: ' + i, frutas[i]);
}

// Iteración con while
// Mientras que la condición se cumpla, repita un fragmento de código. Cuando la condición no se cumple, se detiene el ciclo.
console.log('EJEMPLO CON WHILE: ----------');

let contador = 0;

while (contador < frutas.length) {
  console.log('Iteración con while: ' + contador, frutas[contador]);
  contador++;
}

// Iteración con do while
// La primera iteración se realiza antes de preguntar por la condición, luego
// mientras que la condición se cumpla, repita un fragmento de código. Cuando la condición no se cumple, se detiene el ciclo.

console.log('EJEMPLO CON DO WHILE: ----------');

contador = 0;

do {
  console.log('Iteración con do while: ' + contador, frutas[contador]);
  contador++;
} while (contador < frutas.length);
