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
 * 1. Crear el molde de un vehículo
 */

//Molde de la torta
class Carro {
  peso; // peso = undefined;
  color; // color = undefined;
  marca; // marca = undefined;
  tipo; // tipo = undefined;

  constructor(propiedades) {
    this.peso = propiedades.peso;
    this.color = propiedades.color;
    this.marca = propiedades.marca;
    this.tipo = propiedades.tipo;
  }

  /*
  constructor(peso, color, marca, tipo) {
    this.peso = peso;
    this.color = color;
    this.marca = marca;
    this.tipo = tipo;
  }
  */
}

/**
 * 2. Preguntar a la persona si desea ingresar detalles de un vehículo
 */

let respuesta = null;
let contador = 0;
let carros = [];

do {
  if (contador == 0) {
    respuesta = prompt('¿Desea ingresar detalles de su vehículo?');
  } else {
    respuesta = prompt('¿Desea ingresar otro vehículo?');
  }

  if (respuesta == 'si') {
    /**
     * 3. Usamos el molde (Molde de la torta) Carro para crear una instancia de carro y almacenar en ella sus propiedades (ingredientes)
     */

    let propiedades = {
      peso: prompt('Ingrese el peso del vehículo'),
      color: prompt('Ingrese el color del vehículo'),
      marca: prompt('Ingrese la marca del vehículo'),
      tipo: prompt('Ingrese el tipo del vehículo'),
    };

    let carro = new Carro(propiedades);
    carros.push(carro);

    /**
     * 4. Almacenar nuestra instancia (torta horneada) en un array (vitrina nevera)
     */

    /*
      let peso = prompt('Ingrese el peso del vehículo');
      let color = prompt('Ingrese el color del vehículo');
      let marca = prompt('Ingrese la marca del vehículo');
      let tipo = prompt('Ingrese el tipo del vehículo');

      let carro = new Carro(peso, color, marca, tipo);
    */
  }

  contador++;
} while (respuesta != 'no');

console.log(carros);
