const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Habitacion = require('./Habitacion');

const HabitacionEstandar = Habitacion.discriminator(
  "Estandar",
  new Schema({}, { discriminatorKey: 'tipo' })
);

module.exports = HabitacionEstandar;
