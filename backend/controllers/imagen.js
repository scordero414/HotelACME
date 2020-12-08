const Imagen = require("../models/Imagen");
const Usuario = require("../models/Usuarios/Usuario");

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

const addLike = (req, res) => {
  Usuario.findById(req.body.usuario).then((user) => {
    Imagen.findById(req.params.id)
      .then((img) => {
        // Añadir el id del usuario al array de likes
        img.likes.unshift({ user: req.body.usuario });

        img.save().then((post) => res.json(post));
      })
      .catch((err) => res.status(404).send("Publicación no encontrada"));
  });
};

const removeLike = (req, res) => {
  Usuario.findById(req.body.usuario).then((user) => {
    Imagen.findById(req.params.id)
      .then((img) => {
        let likes = img.likes.filter(
          (like) => like.user.toString() !== req.body.usuario
        );

        // Cambiar el array de likes
        img.likes = likes;

        img.save().then((post) => res.json(post));
      })
      .catch((err) => res.status(404).send("Publicación no encontrada"));
  });
};

const getComments = (req, res) => {
  Imagen.findById(req.params.id, (err, img) => {
    if (err) return res.status(500).send(err.message);
    else res.status(200).json(img.comments);
  });
};

const addComment = (req, res) => {
  Usuario.findById(req.body.usuario).then((user) => {
    Imagen.findById(req.params.id)
      .then((img) => {
        // Añadir el id del usuario al array de likes
        img.comments.unshift({
          user: req.body.usuario,
          comentario: req.body.comentario,
        });

        img.save().then((post) => {
          console.log(post);
          res.json(post);
        });
      })
      .catch((err) => res.status(404).send("Publicación no encontrada"));
  });
};

module.exports = {
  createImage,
  getImages,
  getImageById,
  addLike,
  removeLike,
  addComment,
  getComments,
};
