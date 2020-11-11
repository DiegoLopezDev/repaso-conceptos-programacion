//Ejercicio Switch:

/**
 * En una membresía se tiene los siguientes rangos:
 * Bronce, Plata, Oro, Platino, Diamante.
 * Si el usuario es de rango Bronce obtiene un descuento del 5%.
 * Si el usuario es de rango Plata obtiene un descuento del 10%.
 * Si el usuario es de rango Oro obtiene un descuento del 20%.
 * Si el usuario es de rango Platino obtiene un descuento del 40%.
 * Si el usuario es de rango Diamante obtiene un descuento del 50%.
 *
 * Realiza un programa que pregunte al usuario qué rango posee
 * para mostrar su descuento y si el usuario no posee un rango de
 * membresia muéstrele un mensaje que no dispone de membresía.
 */

let membresia = prompt('Qué membresía posee usted sumerced');
switch (membresia.toLowerCase()) {
  case 'bronce':
    alert('Recibe un descuento del 5%');
    break;
  case 'plata':
    alert('Recibe un descuento del 10%');
    break;
  case 'oro':
    alert('Recibe un descuento del 20%');
    break;
  case 'platino':
    alert('Recibe un descuento del 40%');
    break;
  case 'diamante':
    alert('Recibe un descuento del 50%');
    break;
  default:
    alert('El usuario no dispone la membresía');
    break;
}
