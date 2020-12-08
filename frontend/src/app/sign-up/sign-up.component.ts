import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/User';
import jwt_decode from 'jwt-decode';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: [ './sign-up.component.css' ]
})
export class SignUpComponent implements OnInit {
	formulario: FormGroup;
	modelo: User;

	constructor(
		private router: Router,
		private formBuilder: FormBuilder,
		private authenticationService: AuthenticationService
	) {}

	ngOnInit(): void {
		this.formulario = this.formBuilder.group({
			email: [ '', Validators.required ],
			password: [ '', Validators.required ]
		});
	}

	public goUserProfile() {
		this.router.navigate([ '/user-profile' ]);
	}

	get form() {
		return this.formulario.controls;
	}

	login() {
		this.modelo = this.formulario.value;

		this.authenticationService.loginUser(this.modelo).subscribe(
			(data) => {
				alert('Ha iniciado correctamente.');
        console.log(data);
        this.goUserProfile()
        //this.formulario.reset();
			},
			(error) => {
				alert( error.error);
			}
		);
	}
}
