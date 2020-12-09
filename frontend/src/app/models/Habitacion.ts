export class Habitacion {
  _id: string;
  __t: string;
  capacidad: number;
  costo: number;
  urlImage: string;
  descripcion: String;
  constructor(
    _id: string,
    __t: string,
    capacidad: number,
    costo: number,
    urlImage: string,
    descripcion: String
  ) {
    this._id = _id;
    this.__t = __t;
    this.capacidad = capacidad;
    this.costo = costo;
    this.urlImage = urlImage;
    this.descripcion = descripcion;
  }
}
