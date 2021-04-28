const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors  = require("cors");
const path = require("path");
const uploadMiddleware = require("./middlewares/uploadPhoto");

// Importar routas de la api
const UsuarioApi = require("./api/usuario");
const ImagenApi = require("./api/imagen");
const HabitacionApi = require("./api/habitacion");
const ReservaApi = require("./api/reserva");

const app = express();

require('dotenv').config ({path: 'variables.env'});
console.log(process.env.DB_URL);

//Se define el puerto que se utilizará.
// app.set('port', process.env.PORT || 4000);

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4000;

//Se usan en la aplicacion.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));
app.use(uploadMiddleware);
 
// Definir los endpoints
app.use("/api/usuario", UsuarioApi);
app.use("/api/images", ImagenApi);
app.use("/api/rooms", HabitacionApi);
app.use("/api/reservas", ReservaApi);

mongoose.connect(
  process.env.DB_URL,
  // "mongodb://localhost//hotel_acme"
  //"mongodb+srv://scordero414:sebas414@hotel-acme.s8rqf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  (err, res) => {
    if (err) console.log(`ERR: Connecting to DB ${err}`);
    else {
      app.listen(port, host, () => {
        console.log(`Servidor corriendo en ${port}`);
      });
    }
  }
);
