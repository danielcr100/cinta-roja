const { maestro } = require("./maestros")

class musica extends maestro {
  constructor(materia, calificaciones, pelon, edad) {
    super(materia, calificaciones, pelon)
    this.edad = edad
  }

  getedad() {
    return this.edad
  }
}
module.exports = {
  musica
}
