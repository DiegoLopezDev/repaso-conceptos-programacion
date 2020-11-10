//Ejemplo de do while

let respuesta = null;

do {
  respuesta = prompt('¿Le gusta ir a cine?');
} while (
  respuesta != 'si' &&
  respuesta != 'no' &&
  respuesta != 'exit' &&
  respuesta != 'logout'
);

/*
if (respuesta != 'exit') {
  document.write('Su respuesta ha sido ' + respuesta);
} else if (respuesta == 'logout') {
  document.write('Usted ha finalizado sesión');
} else {
  document.write('Se ha salido del programa');
}
*/

if (respuesta == 'si' || respuesta == 'no') {
  document.write('Su respuesta ha sido ' + respuesta);
}

if (respuesta == 'exit') {
  document.write('Se ha salido del programa');
}

if (respuesta == 'logout') {
  document.write('Usted ha finalizado sesión');
}
