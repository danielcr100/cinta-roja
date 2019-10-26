const { maestro } = require("./maestros")

class fisica extends maestro {
  constructor(materia, calificaciones, pelon, antiguedad) {
    super(materia, calificaciones, pelon)
    this.antiguedad = antiguedad
  }

  getantiguedad() {
    return this.antiguedad
  }
}
module.exports = {
  fisica
}
