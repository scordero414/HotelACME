const Reserva = require("../models/Reserva");

const createReserva = async (req, res) => {
  const newReserva = new Reserva({
    id:null,
    fechaInicio: req.body.fechaInicio,
    fechaFin: req.body.fechaFin,
    cantidadPersonas: req.body.cantidadPersonas,
    costoFinal: req.body.costoFinal,
    usuario: req.body.usuario,
    habitacion: req.body.habitacion,
  });
  let reservas = await Reserva.find({ habitacion: newReserva.habitacion });
  let isTaken = reservas.find(
    (reserva) =>
      (newReserva.fechaInicio.getTime() <= reserva.fechaFin.getTime() &&
        newReserva.fechaInicio.getTime() >= reserva.fechaInicio.getTime()) ||
      (newReserva.fechaFin.getTime() <= reserva.fechaFin.getTime() &&
        newReserva.fechaFin.getTime() >= reserva.fechaInicio.getTime()) ||
      (newReserva.fechaInicio.getTime() <= reserva.fechaInicio.getTime() &&
        newReserva.fechaFin.getTime() >= reserva.fechaFin.getTime())
  );

  if (isTaken) {
    console.log("Ocupadoo");
    res
      .status(400)
      .send("La habitación ya está reservada en este periodo de tiempo.");
  } else if (newReserva.fechaFin < newReserva.fechaInicio) {
    res.status(400).send("La fecha inicial no puede ser mayor a la final.");
  } else {
    console.log("Reservada");
    newReserva
      .save()
      .then((reserva) => {
        res.status(200).json(reserva);
      })
      .catch((err) => console.log(err));
  }
};
const getReservas = (req, res) => {
  Reserva.find((err, reservas) => {
    if (err) return res.status(500).send(err.message);
    else res.status(200).json(reservas);
  });
};

  

module.exports = {
  createReserva,
  getReservas
};
