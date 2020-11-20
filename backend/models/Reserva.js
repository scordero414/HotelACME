const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservaSchema = new Schema({
  fechaInicio: { type: Date },
  cantidadDias: { type: Number },
  fechaFin: { type: Number },
  cantidadPersonas: { type: Number },
  costoFinal: { type: Number },
  usuario: { type: Schema.Types.ObjectId, ref: "Usuario" },
  habitacion: { type: Schema.Types.ObjectId, ref: "Habitacion" },
});

module.exports = Reserva = mongoose.model("Reserva", ReservaSchema);
