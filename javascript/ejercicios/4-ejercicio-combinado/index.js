/**
 * primer paso
 * preguntarle al usuario si quiere ingresar datos del choche
 */
let primer = null;
let peso = '';
let color = '';
let marca = '';
let tipo = '';
let nuevamente = null;
do {
  primer = prompt('¿Desea ingresar detalles de su vehículo?');
} while (primer != 'si' && primer != 'no');

let conjunto = [peso, color, marca, tipo];
/**
 * Preguntarle las caracteristicas y guardarlas
 */

if (primer == 'si') {
  do {
    peso = prompt('Ingrese el peso del vehículo');
    color = prompt('Ingrese el color del vehículo');
    marca = prompt('Ingrese el marca del vehículo');
    tipo = prompt('Ingrese el Tipo de vehículo');
    nuevamente = prompt('¿Désea ingresar otro vehículo?');
  } while (nuevamente != 'no');
}
if (nuevamente == 'no') {
  document.write(conjunto);
}

if (primer == 'no') {
  alert('Vuelva Pronto');
}
