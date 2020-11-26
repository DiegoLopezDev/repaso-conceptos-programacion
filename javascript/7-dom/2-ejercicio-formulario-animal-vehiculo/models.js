class Vehiculo {
  peso;
  color;
  marca;
  tipo;

  constructor(propiedades) {
    this.peso = propiedades.peso;
    this.color = propiedades.color;
    this.marca = propiedades.marca;
    this.tipo = propiedades.tipo;
  }
}

class Animal {
  especie;
  territorio;
  nombre;
  color;

  constructor(propiedades) {
    this.especie = propiedades.especie;
    this.territorio = propiedades.territorio;
    this.nombre = propiedades.nombre;
    this.color = propiedades.color;
  }
}
