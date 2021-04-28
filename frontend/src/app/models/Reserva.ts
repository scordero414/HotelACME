export class Reserva {
  _id: string;
  fechaInicio: Date;
  cantidadDias: number;
  fechaFin: Date;
  cantidadPersonas: number;
  costoFinal: number;
  usuario: string;
  habitacion: string;
  constructor(
      _id: string,
      fechaInicio: Date,
      fechaFin: Date,
      cantidadPersonas: number,
      costoFinal: number,
      usuario: string,
      habitacion: string,
  ) {
    this._id = _id;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin
    this.cantidadPersonas = cantidadPersonas
    this.costoFinal = costoFinal
    this.usuario = usuario
    this.habitacion = habitacion
  }
}