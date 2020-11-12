let casados = null;
do {
  casados = prompt('¿Usted esta casado?');
} while (casados != 'si' && casados != 'no' && casados != 'tal vez');

if (casados == 'si') {
  document.write('Usted se encuentra comprometido');
}

if (casados == 'no') {
  document.write('Usted esta libre de compromiso');
}

if (casados == 'tal vez') {
  document.write('Usted esta en proceso');
}
