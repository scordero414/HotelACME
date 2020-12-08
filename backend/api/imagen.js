const ImagenController = require("../controllers/imagen");
const express = require("express");
const router = express.Router();

// @route POST api/images/create
// @desc Crear una nueva imagen en la base de datos
router.post("/create", ImagenController.createImage);

// @route GET api/images/all
// @desc Consultar todas las imagenes
router.get("/all", ImagenController.getImages);

// @route GET api/users/:id
// @desc Consultar una imagen por medio de su id
router.get("/:id", ImagenController.getImageById);

// @route POST api/images/like/:id
// @desc Agregar un like a una imagen
router.post("/like/:id", ImagenController.addLike);

// @route POST api/images/unlike/:id
// @desc Eliminar un like de una imagen
router.post("/unlike/:id", ImagenController.removeLike);

// @route POST api/images/comment/:id
// @desc Agregar un comentario a la imagen
router.post("/comment/:id", ImagenController.addComment);

// @route POST api/images/:id/comments
// @desc Consultar los comentarios de una imagen
router.get("/:id/comments", ImagenController.getComments);

module.exports = router;
