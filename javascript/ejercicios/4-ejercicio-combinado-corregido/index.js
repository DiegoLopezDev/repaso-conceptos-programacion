/**
 * ESTE EJERCICIO NO ES UN EJEMPLO A SEGUIR PARA PROGRAMAR OBJETOS
 *
 * SOLO SE HIZO CON LA INTENCIÓN PARA ENTENDER CÓMO FUNCIONAN LOS ARRAYS Y QUE
 * ESTA FORMA DE PROGRAMAR ES UNA MALA PRÁCTICA.
 */

/**
 * Diseñe un algoritmo que pregunte al usuario si desea ingresar información sobre un vehículo.
 * Si la persona responde SI, debera ingresar la siguiente información del vehículo
 * - Peso
 * - Color
 * - Marca
 * - Tipo
 * Una vez la persona haya diligenciado la información, nuevamente el software debe preguntarle al usuario
 * si desea ingresar otro vehículo.
 *
 * Si la persona nuevamente responde SI, deberá ingresar las mismas características solicitadas anteriormente.
 * Si la persona responde NO, ya no podrá ingresar más carros y se motrará en pantalla todos los vehículos
 * que ingresó anteriormente.
 */

/**
 * primer paso
 * preguntarle al usuario si quiere ingresar datos del choche
 */
let respuesta = null;

let peso = null; // Zumo de limon
let color = null; // Zumo de limon
let marca = null; // Zumo de limon
let tipo = null; // Zumo de limon

let carros = []; // Nevera
let carro = null; // Zumo de limon, Zumo de limon, Zumo de limon, Zumo de limon
/**
 * Preguntarle las caracteristicas y guardarlas
 */

let contador = 0;

do {
  if (contador == 0) {
    respuesta = prompt('¿Desea ingresar detalles de su vehículo?');
  } else if (contador > 0) {
    respuesta = prompt('¿Desea ingresar otro vehículo?');
  }

  if (respuesta == 'no') {
    alert('Vuelva Pronto');
  }

  if (respuesta == 'si') {
    peso = prompt('Ingrese el peso del vehículo'); // Zumo de fresa | Zumo de maracuya
    color = prompt('Ingrese el color del vehículo'); // Zumo de fresa | Zumo de maracuya
    marca = prompt('Ingrese el marca del vehículo'); // Zumo de fresa | Zumo de maracuya
    tipo = prompt('Ingrese el Tipo de vehículo'); // Zumo de fresa | Zumo de maracuya

    carro = [peso, color, marca, tipo];
    carros.push(carro);
  }

  contador++;
} while (respuesta != 'no');

console.log(carros);
console.log(carros[1]);
console.log(carros[4]);
