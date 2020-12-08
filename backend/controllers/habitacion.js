const Habitacion = require("../models/Habitaciones/Habitacion");
const HabitacionEstandar = require("../models/Habitaciones/Estandar");
const HabitacionLujo = require("../models/Habitaciones/Lujo");
const HabitacionSuperior = require("../models/Habitaciones/Superior");

const createRoom = (req, res) => {
  const newRoom = {
    capacidad: req.body.capacidad,
    costo: req.body.costo,
    urlImage: req.body.urlImage
  };

  if (req.body.tipo === "estandar") {
    let newEstandar = new HabitacionEstandar(newRoom);
    saveRoom(newEstandar, res);
  } else if (req.body.tipo === "lujo") {
    let newLujo = new HabitacionLujo(newRoom);
    saveRoom(newLujo, res);
  } else if (req.body.tipo === "superior") {
    let newSuperior = new HabitacionSuperior(newRoom);
    saveRoom(newSuperior, res);
  }
};

const saveRoom = (newRoom, res) => {
  newRoom
    .save()
    .then((room) => {
      res.status(200).json(room);
    })
    .catch((err) => console.log("No se pudo crear la habitacion"));
};

const getRooms = (req, res) => {
  Habitacion.find((err, rooms) => {
    if (err) return res.status(500).send(err.message);
    else res.status(200).json(rooms);
  });
};

const getRoomById = (req, res) => {
  Habitacion.findById(req.params.id, (err, room) => {
    if (err) return res.status(500).send(err.message);
    else res.status(200).json(room);
  });
};

module.exports = { createRoom, getRooms, getRoomById };
