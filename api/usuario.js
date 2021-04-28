const UsuarioController = require("../controllers/usuario");
const express = require("express");
const router = express.Router();

// @route POST api/users/register
// @desc Registrar los usuarios en la base de datos
router.post("/register", UsuarioController.registerUser);

// @route POST api/users/login
// @desc Iniciar sesión y generar token
router.post("/login", UsuarioController.login);

// @route GET api/users/all
// @desc Consultar todos los usuarios
router.get("/all", UsuarioController.getUsers);

// @route GET api/users/all
// @desc Consultar un usuario por medio de su id
router.get("/:id", UsuarioController.getUserById);

module.exports = router;
