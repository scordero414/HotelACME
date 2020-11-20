const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Usuario = require("./Usuario");

const UsuarioAdmin = Usuario.discriminator(
  "Administrador",
  new Schema({}, { discriminatorKey: "rol" })
);

module.exports = UsuarioAdmin;
