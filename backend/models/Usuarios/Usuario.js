const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  name: { type: String },
  password: { type: String },
  email: { type: String },
  sexo: { type: String },
  fechaNacimiento: { type: Date },
  ciudadResidencia: { type: String },
  filenameFoto: { type: String },
  pathFoto: { type: String },
  originalnameFoto: { type: String },
  mimetypeFoto: { type: String },
  sizeFoto: { type: Number },
});

module.exports = Usuario = mongoose.model("Usuario", UsuarioSchema);
