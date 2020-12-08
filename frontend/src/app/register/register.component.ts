import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/User';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {
	formulario: FormGroup;
  modelo: User;
  lugarOrigen: string;

	constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService) {}

	ngOnInit(): void {
		this.formulario = this.formBuilder.group({
      nombre: [ '', Validators.required ],
      apellido: [ '', Validators.required ],
			email: [ '', Validators.required ],
      password1: [ '', Validators.required ],
      password2: [ '', Validators.required ],
			fechaNacimiento: [ '', Validators.required ],
      sexo: [ '', Validators.required ],
      sexoHombre: [ '', Validators.required ],
      sexoMujer: [ '', Validators.required ],
			ciudadResidencia: [ '', Validators.required ]
		});
	}

	get form() {
		return this.formulario.controls;
	}

	registrar() {
		if (this.form.sexoHombre.value == 1) {
			this.form.sexo.setValue('Hombre');
		} else if (this.form.sexoMujer.value == 1) {
			this.form.sexo.setValue('Mujer');
    }
    
    if(this.checkPasswords()){
      this.modelo = new User(
        0,
        this.form.nombre.value + ' ' + this.form.apellido.value,
        this.form.email.value,
        this.form.password1.value,
        this.form.fechaNacimiento.value,
        this.form.sexo.value,
        this.lugarOrigen,
        null,
        null,
        null
      );
      this.authenticationService.registerUser(this.modelo).subscribe(
        (data) => {
          alert("Se ha registrado correctamente");
          console.log(data);
          this.formulario.reset()
        },(error)=>{
          alert(error.error);
          
        }
      )
    }else{
      alert("Las contraseñas no coinciden.")
    }
		
  }
  

  checkPasswords(){
    if(this.form.password1.value === this.form.password2.value){
      return true;
    }
    return false;
  }
}
