import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { UserService } from '../services/user.service';
import { User } from '../models/User';
import { ImageService } from '../services/image.service';
import { Image } from '../models/Image';
import config from '../../config';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: [ './user-profile.component.css' ]
})
export class UserProfileComponent implements OnInit {
	public user: User;
	public config = config;
	public fotoPerfil;
	public fotos: Image[];

	public modelo: Image;
	public formulario: FormGroup;

	public file: File;

	constructor(
		private modalService: NgbModal,
		private userService: UserService,
		private imageService: ImageService,
		private formBuilder: FormBuilder
	) {}

	private index: Number;

	ngOnInit(): void {
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));
		let userId = currentUser['user'].id;

		this.userService.getUser(userId).subscribe((data) => {
			this.user = data;
		});
		this.imageService.getImages().subscribe((data) => {
      this.fotos = data.reverse();
    });

		this.formulario = this.formBuilder.group({
			descripcion: [ '', Validators.required ],
			ubicacion: [ '', Validators.required ]
		});
	}

	createImage() {
		if (this.formulario.invalid) {
			return;
		}

    console.log("Form: "+this.formulario.value);
    this.modelo = this.formulario.value;
		this.modelo.image = this.file;
    console.log(this.modelo.image.name);
		this.imageService.createImage(this.modelo).subscribe(
			(data) => {
				alert('Se ha cargado la foto exitosamente');
				console.log(data);
				this.formulario.reset();
			},
			(error) => {
				alert(error.error);
			}
		);
	}

	//Modales.
	openXl(content) {
		this.modalService.open(content, { size: 'xl', centered: true });
	}
	openM(content) {
		this.modalService.open(content, { size: 'lg', centered: true });
	}
}
