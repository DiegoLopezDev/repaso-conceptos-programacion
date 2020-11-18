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
class Tipo {
  velocidad;

  constructor(propiedadesTipo) {
    this.velocidad = propiedadesTipo.velocidad;
  }
}

class TipoVehiculo extends Tipo {
  peso;
  color;
  marca;
  tipo;

  constructor(propiedadesVehiculo) {
    this.peso = propiedadesVehiculo.peso;
    this.color = propiedadesVehiculo.color;
    this.marca = propiedadesVehiculo.marca;
    this.tipo = propiedadesVehiculo.tipo;
    super(this.propiedadesTipo.velocidad);
  }
}

class TipoAnimal extends Tipo {
  especie;
  territorio;
  nombre;
  color;

  constructor(propiedadesAnimal) {
    super(propiedadesTipo);

    this.especie = propiedadesAnimal.especie;
    this.territorio = propiedadesAnimal.territorio;
    this.nombre = propiedadesAnimal.nombre;
    this.color = propiedadesAnimal.color;
  }
}

//2. Preguntamos si desea responder una encuesta
let respuesta = null;
let contador = 0;
let vehiculos = [];
let animales = [];

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
    let propiedadesV = {
      peso: prompt('Ingrese el peso del vehículo'),
      color: prompt('Ingrese el color del vehículo'),
      marca: prompt('Ingrese el marca del vehículo'),
      tipo: prompt('Ingrese el tipo del vehículo'),
      velocidad: prompt('Ingrese el velocidad del vehículo'),
    };
    let vehiculo = new TipoVehiculo(propiedadesV);
    vehiculos.push(vehiculo);
  }

  if (respuesta == 'animal') {
    let propiedadesAnimal = {
      especie: prompt('Ingrese el especie del animal'),
      territorio: prompt('Ingrese la territorio del animal'),
      nombre: prompt('Ingrese el nombre del animal'),
      color: prompt('Ingrese el color del animal'),
      velocidad: prompt('Ingrese la velocidad del animal'),
    };
    let animal = new TipoAnimal(propiedadesAnimal);
    animales.push(animal);
  }

  contador++;
} while (respuesta != 'no');

console.log(vehiculos);
console.log(animales);

//1. Creamos el molde
// Metodo 2
/*class vehiculo {
  peso;
  color;
  marca;
  tipo;

  constructor(propiedadesVehiculo) {
    this.peso = propiedadesVehiculo.peso;
    this.color = propiedadesVehiculo.color;
    this.marcar = propiedadesVehiculo.marcar;
    this.tipo = porpiedadesVehiculo.tipo;
  }
}

class animal {
  habitad;
  clasificacion;
  nombre;
  tamaño;

  constructor(propiedadesAnimal){
    this.habitad = propiedadesAnimal.habitad;
    this.clasificacion = propiedadesAnimal.clasificacion;
    this.nombre = propiedadesAnimal.nombre;
    this.tamaño = propiedadesAnimal.tamaño;
  }
}*/
