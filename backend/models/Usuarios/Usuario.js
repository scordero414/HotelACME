const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  name: { type: String },
  password: { type: String },
  email: { type: String },
  sexo: { type: String },
  fechaNacimiento: { type: Date },
  ciudadResidencia: { type: String },
  fotoPerfil: { data: Buffer, contentType: String },
  imagenes: [{ type: Schema.Types.ObjectId, ref: "Imagen" }],
  reservas: [{ type: Schema.Types.ObjectId, ref: "Reserva" }],
});

module.exports = Usuario = mongoose.model("Usuario", UsuarioSchema);
