let genero = prompt('Escribe tu género', '');
genero = genero.toLowerCase();

switch (genero) {
  case 'masculino':
    console.log('La entrada para hombres es a la derecha ' + genero);
    break;
  case 'femenino':
    console.log('La entrada para mujeres es a la izquierda ' + genero);
    break;
  case 'otro':
    console.log('La entrada es en el centro ' + genero);
    break;
  default:
    console.log(
      'Debes especificar un género válido (masculino, femenino u otro) ' +
        genero
    );
    break;
}
