class Electrodomestico {
  constructor(precio, color, capacidad) {
    this.precio = precio
    this.color = color
    this.capacidad = capacidad
    this.consumoEnergetico = 100
  }

  getPrecioFinal() {
    return this.consumoEnergetico * this.carga
  }
}
module.exports = {
  Electrodomestico
}
