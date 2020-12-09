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
import { RoomsComponent } from '../rooms/rooms.component';
import { Router } from '@angular/router';

@Component({
	selector: 'app-fotos-usuarios',
	templateUrl: './fotos-usuarios.component.html',
	styleUrls: [ './fotos-usuarios.component.css' ]
})
export class FotosUsuariosComponent implements OnInit {
	public user: User;
	public config = config;
	public fotoPerfil;
	public fotos: Image[];

	public currentUser;
	public currentImage: Image;
	public album = [ { src: '', caption: '', thumb: '' } ];

	public modelo: Image;
	public formulario: FormGroup;

	public file: File;


	public userOwnerImage: User;


	public userLike: boolean;

	constructor(
		private modalService: NgbModal,
		private userService: UserService,
		private imageService: ImageService,
		private formBuilder: FormBuilder,
		private _lightbox: Lightbox,
		private router: Router
	) {}

	private index: Number;

	ngOnInit(): void {
		this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
		let userId = this.currentUser['user'].id;

		this.userService.getUser(userId).subscribe((data) => {
			this.user = data;
		});

		this.imageService.getImages().subscribe((data: any) => {
			this.fotos = data.reverse();
		});
	}



	//Modales.
	openXl(content, currentImage) {
		this.modalService.open(content, { size: 'xl', centered: true });
		this.currentImage = currentImage;
		this.album[0].src = config.RUTA_API + currentImage.path;

		this.userService.getUser(currentImage.usuario).subscribe((data) => {
			this.userOwnerImage = data;
		});
	}

	public open() {
		this._lightbox.open(this.album, 0);
	}

	
	findUserLike = () => {
		let usuarioId = this.getAuthUser();
		if (
		  this.currentImage.likes.filter((like: any) => like.user === usuarioId).length > 0
		) {
		  this.userLike = true;
		} else {
		  this.userLike = false;
		}
	  };
	
	  get f() {
		return this.formulario.controls;
	  }
	
	  addComment() {
		let usuarioId = this.getAuthUser();
	
		if (usuarioId) {
		  this.imageService
			.addComment(this.currentImage._id, usuarioId, this.f.comentario.value)
			.subscribe(
			  (data: Image) => {
				console.log(data);
				alert(
				  'El comentario se ha agregado exitosamente'
				);
				this.currentImage = data;
				this.formulario.reset();
			  },
			  (error) => {
				console.log(error);
			  }
			);
		} else {
		  this.router.navigate(['/login']);
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
			console.log("USewr "+usuarioId.name);
		  } else {
			this.removeLike(usuarioId);
		  }
		} else {
		  this.router.navigate(['/login']);
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
