const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../util/keys");
const UsuarioRegistrado = require("../models/Usuarios/Registrado");
const Usuario = require("../models/Usuarios/Usuario");

// Registrar usuarios en el servidor
const registerUser = (req, res) => {
  UsuarioRegistrado.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).send("Ya existe un usuario con este email");
    } else {
      console.log(req.file); //Undefined.
      const newUser = new UsuarioRegistrado({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        sexo: req.body.sexo,
        fechaNacimiento: req.body.fechaNacimiento,
        ciudadResidencia: req.body.ciudadResidencia,
        filenameFoto: req.file.filename,
        pathFoto: "/uploads/" + req.file.filename,
        originalnameFoto: req.file.originalname,
        mimetypeFoto: req.file.mimetype,
        sizeFoto: req.file.size,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              res.status(200).json(user);
            })
            .catch((err) => console.log("No se pudo crear el usuario"));
        });
      });
    }
  });
};

const login = (req, res) => {
  const { email, password } = req.body;

  Usuario.findOne({ email }).then((user) => {
    if (!user) return res.status(404).send("Usuario no encontrado");

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = { id: user.id, name: user.name, ciudadResidencia: user.ciudadResidencia };

        jwt.sign(
          payload,
          keys.SECRET_KEY,
          { expiresIn: 3600 },
          (err, token) => {
            res.status(200).json({ token: "Bearer " + token });
          }
        );
      } else return res.status(400).send("Contraseña incorrecta");
    });
  });
};

const getUsers = (req, res) => {
  Usuario.find((err, users) => {
    if (err) return res.status(500).send(err.message);
    else res.status(200).json(users);
  });
};

const getUserById = (req, res) => {
  Usuario.findById(req.params.id, (err, user) => {
    if (err) return res.status(500).send(err.message);
    else res.status(200).json(user);
  });
};

module.exports = { registerUser, login, getUsers, getUserById };
