window.onload = function () {
  // Clases

  class Carro {
    peso;
    maximaVelocidad;
    color;
    marca;
    aerodinamico;

    constructor(propiedades) {
      this.peso = propiedades.peso;
      this.maximaVelocidad = propiedades.maximaVelocidad;
      this.color = propiedades.color;
      this.marca = propiedades.marca;
      this.aerodinamico = propiedades.aerodinamico;
    }

    arrancar() {
      alert('El carro ha arrancado');
    }

    retroceder() {
      alert('El carro retrocede');
    }

    frenar() {
      alert('El carro se ha detenido');
    }

    acelerar() {
      alert('El carro está acelerando');
    }

    mostrarCaracteristicasEnPantalla(indice) {
      let listadoCarros = document.getElementById('listado-carros');
      let h5Node = document.createElement('h5');
      let ulNode = document.createElement('ul');

      let liString = `
        <li>${this.peso}</li>
        <li>${this.maximaVelocidad}</li>
        <li>${this.color}</li>
        <li>${this.marca}</li>
        <li>${this.aerodinamico}</li>
    `;

      h5Node.innerText = `Carró ${indice}`;
      ulNode.innerHTML = liString;

      listadoCarros.appendChild(h5Node);
      listadoCarros.appendChild(ulNode);
    }
  }

  // Herencias de clases

  class CarroVolador extends Carro {
    constructor(propiedades) {
      super(propiedades);
    }

    volar() {
      alert('El carro está volando');
    }
  }

  class CarroVoladorArmado extends CarroVolador {
    arma;

    constructor(propiedades) {
      super(propiedades);

      this.arma = propiedades.arma;
    }

    disparar() {
      console.log('Disparando ' + this.arma);
    }
  }

  let carro1 = new Carro({
    peso: '3000KG',
    maximaVelocidad: '200Km/h',
    color: 'Negro',
    marca: 'Volkswagen',
    aerodinamico: false,
  });

  let carro2 = new CarroVoladorArmado({
    arma: 'Rayos laser',
    peso: '6000KG',
    maximaVelocidad: '150Km/h',
    color: 'Azul',
    marca: 'Renault',
    aerodinamico: true,
  });

  let carros = [carro1, carro2];

  for (let i = 0; i < carros.length; i++) {
    carros[i].mostrarCaracteristicasEnPantalla(i);
  }
};
