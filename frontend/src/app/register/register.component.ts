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
	formulario2: FormGroup;
	modelo: User;
	lugarOrigen: string;

	public file: File;

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
		this.formulario2 = this.formBuilder.group({
			name: [ '', Validators.required ],
			email: [ '', Validators.required ],
			password: [ '', Validators.required ],
			fechaNacimiento: [ '', Validators.required ],
			sexo: [ '', Validators.required ],
			ciudadResidencia: [ '', Validators.required ]
		});
	}

	get form() {
		return this.formulario.controls;
	}
	get form2() {
		return this.formulario2.controls;
	}

	registrar() {
		if (this.form.sexoHombre.value == '1') {
			this.form.sexo.setValue('Hombre');
			
		} else {
			this.form.sexo.setValue('Mujer');
		}

		
		if (this.checkPasswords()) {
			this.form2.name.setValue(this.form.nombre.value + ' ' + this.form.apellido.value); //nombre
			this.form2.email.setValue(this.form.email.value); //email
			this.form2.password.setValue(this.form.password1.value); //pass
			this.form2.fechaNacimiento.setValue(this.form.fechaNacimiento.value); //fechaNacimiento
			this.form2.sexo.setValue(this.form.sexo.value); //sexo
			this.form2.ciudadResidencia.setValue(this.lugarOrigen); //lugarOrigen

			this.modelo = this.formulario2.value;
			this.modelo.image = this.file;
			console.log(this.modelo.image.name);
			this.authenticationService.registerUser(this.modelo).subscribe(
				(data) => {
					alert('Se ha registrado correctamente');
					console.log(data);
					this.formulario.reset();
				},
				(error) => {
					alert(error.error);
				}
			);
		} else {
			alert('Las contraseñas no coinciden.');
		}
	}

	checkPasswords() {
		if (this.form.password1.value === this.form.password2.value) {
			return true;
		}
		return false;
	}

	
}
