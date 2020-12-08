export class User {
    _id: string;
    name: string;
    email: string;
    password: string;
    fechaNacimiento: Date;
    sexo: string;
    ciudadResidencia: string;
    filenameFoto: string;
    pathFoto: string;
    originalnameFoto: string;
    mimetypeFoto: string;
    sizeFoto: number;
    image: File;
    constructor(
      _id: string,
      name: string,
      email: string,
      password: string,
      fechaNacimiento: Date,
      sexo: string,
      ciudadResidencia: string,
      filenameFoto: string,
      pathFoto: string,
      originalnameFoto: string,
      mimetypeFoto: string,
      sizeFoto: number,
      image: File
    ) {
      this._id = _id;
      this.name = name;
      this.email = email;
      this.password = password;
      this.fechaNacimiento = fechaNacimiento;
      this.sexo = sexo;
      this.ciudadResidencia = ciudadResidencia;
      this.filenameFoto = filenameFoto;
      this.pathFoto = pathFoto;
      this.originalnameFoto = originalnameFoto;
      this.mimetypeFoto = mimetypeFoto;
      this.sizeFoto = sizeFoto;
      this.image = image;
    }
  }
  