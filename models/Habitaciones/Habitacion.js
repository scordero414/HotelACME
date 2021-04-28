const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HabitacionSchema = new Schema({
  capacidad: { type: Number },
  costo: { type: Number },
  urlImage: { type: String },
  descripcion: {type: String}
});

module.exports = Habitacion = mongoose.model("Habitacion", HabitacionSchema);
