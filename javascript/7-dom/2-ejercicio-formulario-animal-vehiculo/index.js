/**
 * Si la persona responde NO, deshabilitamos el botón SI e imprimimos un mensaje de adios.
 */
let radioRespuestaSi = document.getElementById('respuesta-si');
let radioRespuestaNo = document.getElementById('respuesta-no');

radioRespuestaNo.addEventListener('change', function () {
  if (radioRespuestaNo.checked == true) {
    radioRespuestaSi.disabled = true;
  }

  let mensajeAdios = document.getElementById('mensaje-adios');
  mensajeAdios.style = 'display: block';
  mensajeAdios.innerText =
    '¡Gracias por visitarnos. Nos gustaría verte en una próxima encuesta!';
});

/**
 * Si la persona responde SI, deshabilitamos el botón NO para continuar con la encuesta.
 */

radioRespuestaSi.addEventListener('change', function () {
  if (radioRespuestaSi.checked == true) {
    radioRespuestaNo.disabled = true;

    //Como la persona respondió SI, enseguida debe preguntarle si desea ingresar un animal o un vehículo.
    let encuesta = document.getElementById('encuesta');
    encuesta.innerHTML = /*html*/ `<p>¿Desea ingresar un animal o un vehículo?</p>`;

    //Construimos los radios para seleccionar el tipo de encuesta
    let contenedorRadioAnimal = document.createElement('div');
    contenedorRadioAnimal.classList =
      'form-check-inline custom-control custom-switch';
    contenedorRadioAnimal.innerHTML = /*html*/ `      
        <input
          type="radio"
          value="animal"
          name="respuestaTipoEncuesta"
          class="custom-control-input"
          id="respuesta-animal"
        />
        <label class="custom-control-label" for="respuesta-animal">Animal</label>      
    `;

    let contenedorRadioVehiculo = document.createElement('div');
    contenedorRadioVehiculo.classList =
      'form-check-inline custom-control custom-switch';
    contenedorRadioVehiculo.innerHTML = /*html*/ `      
        <input
          type="radio"
          value="vehiculo"
          name="respuestaTipoEncuesta"
          class="custom-control-input"
          id="respuesta-vehiculo"
        />
        <label class="custom-control-label" for="respuesta-vehiculo">Vehículo</label>      
    `;

    //Agregamos los radios en el contenedor pregunta para mostrar los tipos de encuesta en pantalla
    encuesta.appendChild(contenedorRadioAnimal);
    encuesta.appendChild(contenedorRadioVehiculo);

    //Si responde animal, deshabilita vehículo o viceversa
    let radioAnimal = document.getElementById('respuesta-animal');
    let radioVehiculo = document.getElementById('respuesta-vehiculo');

    radioAnimal.addEventListener('change', function () {
      if (radioAnimal.checked == true) {
        radioVehiculo.disabled = true;

        // Inicia la encuesta de animal
        let formularioAnimal = document.createElement('form');
        formularioAnimal.classList = 'mt-3';
        formularioAnimal.style = 'width: 100%; max-width: 400px;';

        formularioAnimal.innerHTML = /*html*/ `
          <div class="form-group">
            <label>Nombre</label>
            <input class="form-control" name="nombre">
          </div>
          <div class="form-group">
            <label>Especie</label>
            <input class="form-control" name="especie">
          </div>
          <div class="form-group">
            <label>Territorio</label>
            <input class="form-control" name="territorio">
          </div>
          <div class="form-group">
            <label>Color</label>
            <input class="form-control" name="color">
          </div>
          <button type="submit" class="btn btn-primary">Añadir</button>
        `;

        encuesta.appendChild(formularioAnimal);
      }
    });

    radioVehiculo.addEventListener('change', function () {
      if (radioVehiculo.checked == true) {
        radioAnimal.disabled = true;

        // Inicia la encuesta de vehículo

        let formularioVehiculo = document.createElement('form');
        formularioVehiculo.classList = 'mt-3';
        formularioVehiculo.style = 'width: 100%; max-width: 400px';
        formularioVehiculo.innerHTML = /*html*/ `
        <div class="form-group">
          <label>Peso</label>
          <input name="peso" class="form-control">
        </div>

        <div class="form-group">
        <label>Color</label>
        <input name="color" class="form-control">
        </div>

        <div class="form-group">
        <label>Marca</label>
        <input name="marca" class="form-control"> 
        </div>

        <div class="form-group">
        <label>Tipo</label>
        <input name="tipo" class="form-control">
        </div>
        `;

        encuesta.appendChild(formularioVehiculo);
      }
    });
  }
});
