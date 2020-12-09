export class Image {
  _id: string;
  descripcion: string;
  ubicacion: string;
  likes: [];
  filename: string;
  path: string;
  originalname: string;
  mimetype: string;
  size: number;
  usuario: string;
  image: File;
  constructor(
    _id: string,
    descripcion: string,
    ubicacion: string,
    likes: [],
    filename: string,
    path: string,
    originalname: string,
    mimetype: string,
    size: number,
    usuario: string,
    image: File
  ) {
    this._id = _id;
    this.descripcion = descripcion;
    this.ubicacion = ubicacion;
    this.likes = likes;
    this.filename = filename;
    this.path = path;
    this.originalname = originalname;
    this.mimetype = mimetype;
    this.size = size;
    this.usuario = usuario;
    this.image = image;
  }
}
