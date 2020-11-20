const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Habitacion = require('./Habitacion');

const HabitacionSuperior = Habitacion.discriminator(
  "Superior",
  new Schema({}, { discriminatorKey: 'tipo' })
);

module.exports = HabitacionSuperior;
