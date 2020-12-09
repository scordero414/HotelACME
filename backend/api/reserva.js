const ReservaController = require("../controllers/reserva");
const express = require("express");
const router = express.Router();

// @route POST api/reservas/create
// @desc Crear una nueva reserva en la base de datos
router.post("/create", ReservaController.createReserva);

module.exports = router;