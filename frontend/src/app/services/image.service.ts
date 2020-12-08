import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ImageResponse } from '../models/ImageResponse';
import { Image } from '../models/Image';
import config from 'src/config';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  createImage(image: Image) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    image.usuario = currentUser.user.id;

    const fd = new FormData();
    fd.append('descripcion', image.descripcion);
    fd.append('ubicacion', image.ubicacion);
    fd.append('image', image.image);
    fd.append('usuario', image.usuario);

    return this.http
      .post<ImageResponse>(`${config.RUTA_API}/api/images/create`, fd)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  getImages() {
    return this.http.get<Image[]>(`${config.RUTA_API}/api/images/all`);
  }

  addLike(id: string, usuario: string) {
    return this.http
      .post(`${config.RUTA_API}/api/images/like/${id}`, { usuario })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  removeLike(id: string, usuario: string) {
    return this.http
      .post(`${config.RUTA_API}/api/images/unlike/${id}`, { usuario })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  addComment(id: string, usuario: string, comentario: string) {
    return this.http
      .post(`${config.RUTA_API}/api/images/comment/${id}`, {
        usuario,
        comentario,
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  getCommentsByPost(id: string) {
    return this.http.get(`${config.RUTA_API}/api/images/${id}/comments`);
  }
}
