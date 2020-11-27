const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors  = require("cors");

// Importar routas de la api
const UsuarioApi = require("./api/usuario");

const app = express();

//Se usan en la aplicacion.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Definir los endpoints
app.use("/api/usuario", UsuarioApi);

mongoose.connect(
  "mongodb://localhost/hotel_acme",
  { useNewUrlParser: true },
  (err, res) => {
    if (err) console.log(`ERR: Connecting to DB ${err}`);
    else {
      app.listen(4000, () => {
        console.log("Servidor corriendo en http://localhost:4000");
      });
    }
  }
);
