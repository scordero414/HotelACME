export class User{
    id: number;
    name: string;
    username: string;
    email: string;
    password: string;
    fechaNacimiento: Date;
    sexo: string;
    ciudadResidencia: string;
    fotoPerfil: string;
    imagenes: [];
    reservas: [];

    constructor(
        id:number, 
        name: string,
        email: string,
        password: string,
        fechaNacimiento: Date,
        sexo: string,
        ciudadResidencia: string,
        fotoPerfil: string,
        imagenes: [],
        reservas: []){
         this.id = id;
         this.name = name;
         this.email = email;
         this.password = password;
         this.fechaNacimiento = fechaNacimiento;
         this.sexo = sexo;
         this.ciudadResidencia = ciudadResidencia;
         this.fotoPerfil = fotoPerfil;
         this.imagenes = imagenes;
         this.reservas = reservas;
     }
}