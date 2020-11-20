const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Habitacion = require('./Habitacion');

const HabitacionLujo = Habitacion.discriminator(
  "Lujo",
  new Schema({}, { discriminatorKey: 'tipo' })
);

module.exports = HabitacionLujo;
