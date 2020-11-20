const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImagenSchema = new Schema({
  ubicacion: { type: String },
  titulo: { type: String },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
      },
    },
  ],
  imagen: { data: Buffer, contentType: String },
  usuario: { type: Schema.Types.ObjectId, ref: "Usuario" },
});

module.exports = Imagen = mongoose.model("Imagen", ImagenSchema);
