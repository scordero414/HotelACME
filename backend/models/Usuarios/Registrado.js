const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Usuario = require("./Usuario");

const UsuarioRegistrado = Usuario.discriminator(
  "Registrado",
  new Schema({}, { discriminatorKey: 'rol' })
);

module.exports = UsuarioRegistrado;
