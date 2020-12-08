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

module.exports = router;
