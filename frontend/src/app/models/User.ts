export class User{
    id: number;
    name: string;
    username: string;
    email: string;
    password: string;
    fechaNacimiento: Date;
    sexo: string;
    ciudadResidencia: string;

    constructor(
        id:number, 
        name: string,
        email: string,
        password: string,
        fechaNacimiento: Date,
        sexo: string,
        ciudadResidencia: string){
         this.id = id;
         this.name = name;
         this.email = email;
         this.password = password;
         this.fechaNacimiento = fechaNacimiento;
         this.sexo = sexo;
         this.ciudadResidencia = ciudadResidencia;
     }
}