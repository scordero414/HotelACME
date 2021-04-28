import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
	selector: 'app-file-upload',
	templateUrl: './file-upload.component.html',
	styleUrls: [ './file-upload.component.css' ]
})
export class FileUploadComponent implements OnInit {
	// fileData: File = null;
	// previewUrl:any = null;
	// fileUploadProgress: string = null;
	// uploadedFilePath: string = null;

	public imagePath;
	imgURL: any;
	public message: string;
	file: File;

  @Output() enviarInfo = new EventEmitter<File>();


	constructor(private http: HttpClient) {}

	ngOnInit() {}

	// fileProgress(fileInput: any) {
	//     this.fileData = <File>fileInput.target.files[0];
	//     this.preview();
	// }

	// preview() {
	//   // Show preview
	//   var mimeType = this.fileData.type;
	//   if (mimeType.match(/image\/*/) == null) {
	//     return;
	//   }

	//   var reader = new FileReader();
	//   reader.readAsDataURL(this.fileData);
	//   reader.onload = (_event) => {
	//     this.previewUrl = reader.result;
	//   }
	// }

	preview(files) {
		if (files.length === 0) return;

		var mimeType = files[0].type;
		if (mimeType.match(/image\/*/) == null) {
			this.message = 'Only images are supported.';
			return;
		}

		this.file = files[0] as File;

		var reader = new FileReader();
		this.imagePath = files;
		reader.readAsDataURL(files[0]);
		reader.onload = (_event) => {
			this.imgURL = reader.result;
		};
    this.enviarInfo.emit(this.file);
	}
}
