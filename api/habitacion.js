const HabitacionController = require("../controllers/habitacion");
const express = require("express");
const router = express.Router();

// @route POST api/rooms/create
// @desc Crear una nueva habitacion en la base de datos
router.post("/create", HabitacionController.createRoom);

// @route GET api/rooms/all
// @desc Consultar todas las habitaciones
router.get("/all", HabitacionController.getRooms);

// @route GET api/rooms/:id
// @desc Consultar una habitacion por medio de su id
router.get("/:id", HabitacionController.getRoomById);

module.exports = router;
