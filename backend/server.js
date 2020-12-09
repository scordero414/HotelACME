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

const app = express();

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
