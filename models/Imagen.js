const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImagenSchema = new Schema({
	descripcion: { type: String },
	ubicacion: { type: String },
	likes: [
		{
			user: {
				type: Schema.Types.ObjectId,
				ref: 'Usuario'
			}
		}
	],
	comments: [
		{
			user: {
				type: Schema.Types.ObjectId,
				ref: 'Usuario'
			},
			comentario: { type: String }
		}
	],
	filename: { type: String },
	path: { type: String },
	originalname: { type: String },
	mimetype: { type: String },
	size: { type: Number },
	usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' }
});

module.exports = Imagen = mongoose.model('Imagen', ImagenSchema);
