//Ejercicio if numero 1

/**
 * Escribe un programa que pregunte al usuario si es culpable o no. Asumiremos que:
 * En caso afirmativo el usuario responderá si
 * En caso contrario responderá no.
 * Si el usuario responde si se escribirá por el documento «irás a la cárcel».
 * Si el usuario responde no se escribirá por el documento web «irás a casa».
 * En cualquier caso en el documento web se escribirá «la documentación por favor»
 */

let pregunta = prompt(
  '¿Usted es culpable? *Si para afirmativo y en caso contrario No'
);
if (pregunta == 'si') {
  alert('Se considera culpable, ira a la carcel');
} else if (pregunta == 'no') {
  alert('Se considera no culpable, iras a casa');
} else {
  alert('la documentación por favor');
}
