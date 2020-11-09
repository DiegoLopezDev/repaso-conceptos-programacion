//Ejercicio switch numero 1

/**
 * Programa que el alumno pueda escribir los dias de la semana y que le diga
 * que materias tiene el dia correspondiente
 */

let dia = prompt('¿Qué día desea ingresar?');

switch (dia.toLowerCase()) {
  case 'lunes':
    alert('Sus materias para este dia son: Ingles y Matemáticas');
    break;
  case 'martes':
    alert('Sus materias para este dia son: Física y Química');
    break;
  case 'miercoles':
    alert('Sus materias para este dia son: Hístoria y Contaduría');
    break;
  case 'jueves':
    alert('Sus materias para este dia son: Contabilidad y Filosofía');
    break;
  case 'viernes':
    alert('Sus materias para este dia son: Arte y Etíca');
    break;
  default:
    alert('No ingreso un dia entre lunes y viernes');
    break;
}
