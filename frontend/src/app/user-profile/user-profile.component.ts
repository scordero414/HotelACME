import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { UserService } from '../services/user.service';
import { User } from '../models/User';
import { ImageService } from '../services/image.service';
import { Image } from '../models/Image';
import config from '../../config';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Lightbox } from 'ngx-lightbox';
import { Router } from '@angular/router';
import { Reserva } from '../models/Reserva';
import { ReservasService } from '../services/reservas.service';
import Swal from 'sweetalert2';

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
	public reservas: Reserva[];
	public currentUser;
	public currentImage: Image;
	public album = [ { src: '', caption: '', thumb: '' } ];

	public modelo: Image;
	public formulario: FormGroup;
	public formulario2: FormGroup;

	public file: File;

	public userOwnerImage: User;
	public userCurrentComment: User;

	public userLike: boolean;

	constructor(
		private modalService: NgbModal,
		private userService: UserService,
		private imageService: ImageService,
		private formBuilder: FormBuilder,
		private _lightbox: Lightbox,
		private router: Router,
		private reservasService: ReservasService
	) {}

	private index: Number;

	ngOnInit(): void {
		this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
		let userId = this.currentUser['user'].id;

		this.userService.getUser(userId).subscribe((data) => {
			this.user = data;
		});
		this.imageService.getImages().subscribe((data: any) => {
			this.fotos = data?.filter((img) => img.usuario === userId).reverse();
		});

		this.reservasService.getReservas().subscribe((data: any) => {
			this.reservas = data.filter(reserva => reserva.usuario === userId);
			console.log(this.reservas);
		});
		
		
		this.formulario = this.formBuilder.group({
			descripcion: [ '', Validators.required ],
			ubicacion: [ '', Validators.required ]
		});
		this.formulario2 = this.formBuilder.group({
			comentario: [ '', Validators.required ]
		});
	}

	createImage() {
		if (this.formulario.invalid) {
			return;
		}

		console.log('Form: ' + this.formulario.value);
		this.modelo = this.formulario.value;
		this.modelo.image = this.file;
		console.log(this.modelo.image.name);
		this.imageService.createImage(this.modelo).subscribe(
			(data: Image) => {
				Swal.fire(
					'Imagen creada',
					'Se ha cargado la foto exitosamente',
					'success'
				  );
				this.fotos.unshift(data);
				this.formulario.reset();
				
			},
			(error) => {
				Swal.fire(
					'Error',
					"Hay algo mal :c ("+error.error+").",
					'error'
				);
			}
		);
	}

	//Modales.
	openXl(content, currentImage) {
		this.modalService.open(content, { size: 'xl', centered: true });
		this.currentImage = currentImage;
		this.album[0].src = config.RUTA_API + currentImage.path;

		this.userService.getUser(currentImage.usuario).subscribe((data) => {
			this.userOwnerImage = data;
		});

		// this.userLike = this.userOwnerImage.likes
		this.findUserLike();
	}
	openM(content) {
		this.modalService.open(content, { size: 'lg', centered: true });
	}

	public open() {
		this._lightbox.open(this.album, 0);
	}
	findUserLike = () => {
		let usuarioId = this.getAuthUser();
		if (this.currentImage.likes.filter((like: any) => like.user === usuarioId).length > 0) {
			this.userLike = true;
		} else {
			this.userLike = false;
		}
	};
	get f2() {
		return this.formulario2.controls;
	}
	addComment() {
		let usuarioId = this.getAuthUser();

		if (usuarioId) {
			this.imageService.addComment(this.currentImage._id, usuarioId, this.f2.comentario.value).subscribe(
				(data: Image) => {
					console.log(data);
					this.currentImage = data;
					this.formulario.reset();
				},
				(error) => {
					console.log(error);
				}
			);
		} else {
			this.router.navigate([ '/login' ]);
		}
	}
	getAuthUser = () => {
		let usuario = JSON.parse(localStorage.getItem('currentUser'));
		if (usuario) return usuario['user'].id;
	};
	like() {
		let usuarioId = this.getAuthUser();
		if (usuarioId) {
			if (!this.userLike) {
				this.addLike(usuarioId);
			} else {
				this.removeLike(usuarioId);
			}
		} else {
			this.router.navigate([ '/login' ]);
		}
	}
	addLike(usuarioId: string) {
		this.imageService.addLike(this.currentImage._id, usuarioId).subscribe(
			(data: Image) => {
				console.log(data);
				this.userLike = true;
				this.currentImage = data;
			},
			(error) => console.log(error)
		);
	}
	removeLike(usuarioId: string) {
		this.imageService.removeLike(this.currentImage._id, usuarioId).subscribe(
			(data: Image) => {
				console.log(data);
				this.userLike = false;
				this.currentImage = data;
			},
			(error) => console.log(error)
		);
	}
}
