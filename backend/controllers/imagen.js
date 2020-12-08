const Imagen = require("../models/Imagen");

const createImage = (req, res) => {
  const newImage = new Imagen({
    descripcion: req.body.descripcion,
    ubicacion: req.body.ubicacion,
    likes: [],
    filename: req.file.filename,
    path: "/uploads/" + req.file.filename,
    originalname: req.file.originalname,
    mimetype: req.file.mimetype,
    size: req.file.size,
    usuario: req.body.usuario,
  });

  newImage
    .save()
    .then((img) => {
      res.status(200).json(img);
    })
    .catch((err) => console.log("No se pudo crear la iamgen"));
};

/* const getImageByUser = (req, res) => {
  Imagen.findOne({ usuario: req.params.idUsuario })
}; */

const getImages = (req, res) => {
  Imagen.find((err, images) => {
    if (err) return res.status(500).send(err.message);
    else res.status(200).json(images);
  });
};

const getImageById = (req, res) => {
  Imagen.findById(req.params.id, (err, img) => {
    if (err) return res.status(500).send(err.message);
    else res.status(200).json(img);
  });
};

module.exports = { createImage, getImages, getImageById };