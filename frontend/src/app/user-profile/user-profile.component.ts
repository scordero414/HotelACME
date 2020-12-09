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
  
  public currentUser;
  public currentImage: Image;
  public album = [{src:'', caption: '', thumb: ''}];

	public modelo: Image;
	public formulario: FormGroup;

	public file: File;

	constructor(
		private modalService: NgbModal,
		private userService: UserService,
		private imageService: ImageService,
    private formBuilder: FormBuilder,
    private _lightbox: Lightbox
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

		this.formulario = this.formBuilder.group({
			descripcion: [ '', Validators.required ],
			ubicacion: [ '', Validators.required ]
    });
    console.log("Fotoscon: "+ this.fotos);
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
	openXl(content,currentImage) {
    this.modalService.open(content, { size: 'xl', centered: true });
    this.currentImage = currentImage;
    this.album[0].src = config.RUTA_API+currentImage.path;
	}
	openM(content) {
		this.modalService.open(content, { size: 'lg', centered: true });
  }
  
  public open() {
    this._lightbox.open(this.album, 0);
  }
}
