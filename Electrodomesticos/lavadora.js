const { Electrodomestico } = require("./Electrodomestico")
class Lavadora extends Electrodomestico {
  constructor(precio, color, capacidad, carga) {
    super(precio, color, capacidad)
    this.carga = carga
  }
}

module.exports = {
  Lavadora
}
