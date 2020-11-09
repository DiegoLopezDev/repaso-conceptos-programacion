//Ejercicio switch numero 2

/**
 * Diseñe un programa en el cual un usuario automotriz pueda ingresar el tipo de motor que aparece en la etiqueta
 * una ves ingesado el sistema le mostrara el tipo de motor donde:
 * Si el tipo de motor es 0, mostrar un mensaje indicando “No hay establecido un valor definido
 * para el tipo de bomba”.
 * Si el tipo de motor es 1, mostrar un mensaje indicando “La bomba es una bomba de agua”.
 * Si el tipo de motor es 2, mostrar un mensaje indicando “La bomba es una bomba de gasolina”.
 * Si el tipo de motor es 3, mostrar un mensaje indicando “La bomba es una bomba de hormigón”.
 * Si el tipo de motor es 4,mostrar un mensaje indicando “La bomba es una bomba de pasta alimenticia”.
 * Si no se cumple ninguno de los valores anteriores mostrar el mensaje “No existe un valor válido
 * para tipo de bomba”.
 */

let motor = prompt(
  '¿Ingrese el tipo de motor "la categoria existente es de 1-4"'
);

switch (motor) {
  case '0':
    alert('No hay establecido un valor definido para el tipo de bomba');
    break;
  case '1':
    alert('La bomba es una bomba de agua');
    break;
  case '2':
    alert('La bomba es una bomba de gasolina');
    break;
  case '3':
    alert('La bomba es una bomba de hormigón');
    break;
  case '4':
    alert('La bomba es una bomba de pasta alimenticia');
    break;
  default:
    alert('No existe un valor válido para tipo de bomba');
    break;
}
