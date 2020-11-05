//Comando para imprimir en consola
console.log('Hola mundo');

//Declaración de Variables
let num1 = 1;
let num2 = 5;
let suma = num1 + num2;
console.log(suma);

let nombre = 'Diego';
let apellido = 'López';
let nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

// Comillas simples ', comillas dobles ", acento grave `

nombreCompleto = `Nombre completo actualizado: ${nombre} ${apellido}`;
console.log(nombreCompleto);

//Operadores lógicos
let edad1 = 10;
let edad2 = 20;

if (edad1 > edad2) {
  console.log('la edad' + edad1 + ' es mayor que la edad ' + edad2);
} else {
  console.log('La edad ' + edad2 + ' es menor que la edad ' + edad1);
}

console.log('Este es un mensaje para subir a la nube');

//Ejemplo de temperatura
let temperatura = prompt('Escribe una temperatura', 0);

// La temperatura es hiper caliente cuando es mayor a 40
if (temperatura > 40) {
  console.log('Me derrito del calor');
}

// Temperatura caliente es cuando estamos > a 20 hasta 40
if (temperatura >= 20 && temperatura <= 40) {
  console.log('Hace mucho calor');
}

// El número x está entre 2 y 8: 2 >= x <= 8
// El número x es igual y mayor que 2 y menor e igual que 8: 2 >= x <= 8

// Temperatura ni caliente ni frio es cuando estamos entre 19 y 12
if (temperatura >= 12 && temperatura <= 19) {
  console.log('La temperatura es estable');
}

// Temperatura fria es cuando estamos < 11
if (temperatura <= 11) {
  console.log('Hace mucho frío');
}
