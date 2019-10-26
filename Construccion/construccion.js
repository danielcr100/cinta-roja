class Construccion {
  constructor(
    numPuertas,
    numVentanas,
    numPisos,
    direccion,
    altura,
    largo,
    ancho
  ) {
    this.numPuertas = numPuertas
    this.numVentanas = numVentanas
    this.numPisos = numPisos
    this.direccion = direccion
    this.altura = altura
    this.largo = largo
    this.ancho = ancho
  }

  getMetrosCuadrados() {
    return this.largo * this.ancho
  }
  getDireccion() {
    return this.direccion
  }
  setDireccion(nuevaDireccion) {
    this.direccion = nuevaDireccion
  }
}
module.exports = {
  Construccion
}
