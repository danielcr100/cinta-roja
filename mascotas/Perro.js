//Importamos la clase Mascota
const { Mascota } = require("./Mascota");

class Perro extends Mascota {
  constructor(raza, color, nombre) {
    super(4, nombre);
    this.raza = raza;
    this.color = color;
  }
  getRaza() {
    return this.raza;
  }
}
module.exports = {
  Perro
};
