/**
 * Nombres y apellidos de 5 personas con cedula
 * con estos datos mostrarle al usuario sus nombres y su documento.
 */

let nombre = ['Diego', 'Yeimi', 'Angie', 'Camilo', 'Paola'];
let apellido = ['Lopez', 'Rozo', 'Marcela', 'Meneses', 'Lopez'];
let documento = [
  '1021145557',
  '7458452115',
  '458562114',
  '4521546552',
  '212514856',
];

document.write(
  nombre[0] + ' ' + apellido[0] + ' C.C. ' + documento[0] + '<br><br>'
);
document.write(
  nombre[1] + ' ' + apellido[1] + ' C.C. ' + documento[1] + '<br><br>'
);
document.write(
  nombre[2] + ' ' + apellido[2] + ' C.C. ' + documento[2] + '<br><br>'
);
document.write(
  nombre[3] + ' ' + apellido[3] + ' C.C. ' + documento[3] + '<br><br>'
);
document.write(nombre[4] + ' ' + apellido[4] + ' C.C. ' + documento[4]);
