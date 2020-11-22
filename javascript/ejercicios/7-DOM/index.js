let boton1 = document.getElementById('boton-1');
boton1.addEventListener('click', function () {
  alert('Vamos a iniciar');
});
boton1.style = 'margin-left: 4%';

let boton2 = document.getElementById('boton-2');
boton2.addEventListener('click', function () {
  alert('Igual vamos a iniciar');
});

let nombre1 = document.getElementById('nombre-1');
nombre1.style = 'font-weight: 700';

let boton3 = document.getElementById('boton-3');
boton3.addEventListener('click', function () {
  alert('Llevara 1 producto, no hay descuento');
});

let boton4 = document.getElementById('boton-4');
boton4.addEventListener('click', function () {
  alert('Lleva solo 2 Productos, no tiene descuento');
});

let boton5 = document.getElementById('boton-5');
boton5.addEventListener('click', function () {
  prompt('Seguro desea llevar 3 producto');
});

let boton6 = document.getElementById('boton-6');
boton6.addEventListener('click', function () {
  alert('Se agrego correctamente');
});

let apellido = document.getElementById('apellido-2');
apellido.addEventListener('keydown', function (event) {
  if (event.key == 'Enter') {
    alert(apellido.value);
  }
});

let primeraSeleccion = document.getElementById('inputGroupSelect03');
primeraSeleccion.style = 'font-weight: 700';
