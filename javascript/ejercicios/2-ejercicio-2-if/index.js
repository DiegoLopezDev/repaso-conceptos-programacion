//Ejercicio if numero 2

/**
 * Escribe un programa que responda a un usuario que quiere comprar
 * un helado en una conocida marca de comida rápida cuanto le costará
 * en función del topping que elija.
 * El helado sin topping cuesta 1.90€.
 * El topping de oreo cuesta 1€.
 * El topping de KitKat cuesta 1.50€.
 * El topping de brownie cuesta 0.75€.
 * El topping de lacasitos cuesta 0.95€.
 * En caso de no disponer del topping solicitado por el usuario
 * el programa escribirá por pantalla «no tenemos este topping, lo sentimos. »
 * y a continuación informar del precio del helado sin ningún topping.
 * Finalmente, el programa escribe por pantalla el precio del helado con el
 * topping seleccionado (o ninguno).
 */

let helado = prompt('¿Qué topping eligio sumerced?');
if (helado == 'sin topping') {
  document.write('El helado sin topping cuesta 1.90€');
} else if (helado == 'oreo') {
  document.write('El topping de oreo cuesta 1€');
} else if (helado == 'KitKat') {
  document.write('El topping de KitKat cuesta 1.50€');
} else if (helado == 'brownie') {
  document.write('El topping de brownie cuesta 0.75€');
} else if (helado == 'lacasitos') {
  document.write('El topping de lacasitos cuesta 0.95€');
} else {
  document.write('no tenemos este topping, lo sentimos');
  //console.log('Disponemos de un helado sin topping cuesta 1.90€')
  //"Pregunta Como hago para que este mensaje tambien se presente en pantalla ?";
}
