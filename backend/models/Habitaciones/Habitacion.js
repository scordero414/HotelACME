const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HabitacionSchema = new Schema({
  capacidad: { type: Number },
  costo: { type: Number },
  reservas: [{ type: Schema.Types.ObjectId, ref: "Reserva" }],
});

module.exports = Habitacion = mongoose.model("Habitacion", HabitacionSchema);
