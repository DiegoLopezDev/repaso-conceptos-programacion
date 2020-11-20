// Agregando un estilo
let tituloPrincipal = document.getElementById('titulo-principal'); //Se guarda un objeto de tipo HTMLElement
tituloPrincipal.style = 'color: red';

// Agregando una clase
let parrafo2 = document.getElementById('parrafo-2');
parrafo2.style = 'font-family: arial black';
parrafo2.classList = 'bg-info';

let parrafo4 = document.getElementById('parrafo-4');
parrafo4.style = 'color: blue; font-size: 22px; font-style: italic';
parrafo4.classList = 'bg-light border';

// Añadir un evento de click a un parrafo
let parrafo5 = document.getElementById('parrafo-5');
parrafo5.style = 'cursor: pointer';
parrafo5.addEventListener('click', function () {
  alert(`Me has dado click ${parrafo5.innerText}`);
});

let parrafo6 = document.getElementById('parrafo-6');
parrafo6.style = 'cursor: pointer';
parrafo6.addEventListener('click', function () {
  window.location = 'https://www.google.com';
});

let boton1 = document.getElementById('boton-1');
boton1.addEventListener('click', function () {
  parrafo5.click();
});
