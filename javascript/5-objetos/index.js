//Creación de un objeto de forma directa
let carro = {
  peso: '2000KG',
  maximaVelocidad: '200Km/h',
  color: 'Rojo',
  marca: 'Lamborgini',
  aerodinamico: true,
  arrancar: function () {
    alert('El carro ha arrancado');
  },
  retroceder: function () {
    alert('El carro retrocede');
  },
  frenar: function () {
    alert('El carro se ha detenido');
  },
  acelerar: function () {
    alert('El carro está acelerando');
  },
};

document.write('<b>Peso del vehículo:</b> ' + carro.peso + '<br>');
document.write(
  '<b>Máxima velodcidad del vehículo:</b> ' + carro.maximaVelocidad + '<br>'
);
document.write('<b>Color del vehículo:</b> ' + carro.color + '<br>');
document.write('<b>Marca del vehículo:</b> ' + carro.marca + '<br>');
document.write('<b>¿Es aerodinámico?:</b> ' + carro.aerodinamico + '<br>');

let accion = null;

setTimeout(function () {
  do {
    accion = prompt(
      '¿Qué acción desea hacer con su carro? (arrancar, retroceder, frenar, acelerar)'
    );
  } while (accion != 'arrancar' && accion != 'retroceder' && accion != 'frenar' && accion != 'acelerar');

  switch (accion) {
    case 'arrancar':
      carro.arrancar();
      break;
    case 'retroceder':
      carro.retroceder();
      break;
    case 'frenar':
      carro.frenar();
      break;
    case 'acelerar':
      carro.acelerar();
      break;
    default:
      break;
  }
}, 100);
