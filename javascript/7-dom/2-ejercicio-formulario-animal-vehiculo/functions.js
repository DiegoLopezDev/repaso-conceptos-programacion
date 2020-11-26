function obtenerDatosFormulario(formulario) {
  let camposFormulario = formulario.querySelectorAll('input');
  let propiedades = {};

  for (let i = 0; i < camposFormulario.length; i++) {
    let name = camposFormulario[i].name;
    let value = camposFormulario[i].value;
    propiedades[name] = value;
  }

  return propiedades;
}
