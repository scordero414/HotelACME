const ReservaController = require("../controllers/reserva");
const express = require("express");
const router = express.Router();

// @route POST api/reservas/create
// @desc Crear una nueva reserva en la base de datos
router.post("/create", ReservaController.createReserva);

// @route GET api/reservas/all
// @desc Consultar todas las reservas
router.get("/all", ReservaController.getReservas);

module.exports = router;