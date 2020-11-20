/**
 * Diseñe un algoritmo que pregunte al usuario si desea responder una encuesta.
 * Si la persona responde SI, enseguida debe preguntarle si desea ingresar un animal o un vehículo.
 *
 * Si la persona decide ingresar un animal debe preguntarle los siguientes datos:
 *
 * - Nombre
 * - Especie
 * - Territorio
 * - Color
 *
 * Si la persona decide ingresar un vehículo debe preguntarle los siguientes datos:
 *
 * - Peso
 * - Color
 * - Marca
 * - Tipo
 *
 * Una vez la persona haya diligenciado la información, nuevamente el software debe preguntarle al usuario
 * si desea continuar con la encuesta.
 *
 * Si la persona nuevamente responde SI, enseguida debe preguntarle si desea ingresar un animal o un vehículo para repetir el ciclo.
 * Si la persona responde NO, finalizará la encuesta.
 */

//1. Creamos el molde

//Metodo 1

class Vehiculo {
  peso;
  color;
  marca;
  tipo;

  constructor(propiedades) {
    this.peso = propiedades.peso; //propiedades.peso
    this.color = propiedades.color; //propiedades.color
    this.marca = propiedades.marca; //etc...
    this.tipo = propiedades.tipo;
  }
}

class Animal {
  especie;
  territorio;
  nombre;
  color;

  constructor(propiedades) {
    this.especie = propiedades.especie; //propiedades.especie
    this.territorio = propiedades.territorio; //propiedades.territorio
    this.nombre = propiedades.nombre; //etc...
    this.color = propiedades.color;
  }
}

//2. Preguntamos si desea responder una encuesta
let respuesta = null;
let contador = 0;
let vehiculos = [];
let animales = [];
let propiedades = null;

do {
  if (contador == 0) {
    respuesta = prompt('¿Desea responder una breve encuesta?');
  } else {
    respuesta = prompt('¿Desea continuar?');
  }

  //Apartir de su afirmación, preguntamos si es vehiculo o animal
  if (respuesta == 'si') {
    respuesta = prompt('¿Desea ingresar un Vehículo o un Animal?');
  }

  if (respuesta == 'vehiculo') {
    propiedades = {
      peso: prompt('Ingrese el peso del vehículo'),
      color: prompt('Ingrese el color del vehículo'),
      marca: prompt('Ingrese el marca del vehículo'),
      tipo: prompt('Ingrese el tipo del vehículo'),
    };

    let vehiculo = new Vehiculo(propiedades);
    vehiculos.push(vehiculo);
  }

  if (respuesta == 'animal') {
    propiedades = {
      especie: prompt('Ingrese la especie del animal'),
      territorio: prompt('Ingrese la territorio del animal'),
      nombre: prompt('Ingrese el nombre del animal'),
      color: prompt('Ingrese el color del animal'),
    };

    let animal = new Animal(propiedades);
    animales.push(animal);
  }

  contador++;
} while (respuesta != 'no');

console.log(vehiculos);
console.log(animales);
console.log(contador);
