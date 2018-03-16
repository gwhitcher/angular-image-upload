import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';

import {GalleryComponent} from '../gallery/gallery.component';

@Component({
  selector: 'app-fileuploader',
  templateUrl: './fileuploader.component.html',
  styleUrls: ['./fileuploader.component.css']
})
export class FileuploaderComponent {

  @Input()
  	gallery: GalleryComponent;	

  constructor(private http: Http) { }

  uploadFile(event) {
  	let elem = event.target;
  	if(elem.files.length > 0) {
  		let formData = new FormData();
  		formData.append('file', elem.files[0]);
  		this.http.post('script.php', formData)
  		.subscribe((data) => {
            let file = event.target.files[0].name;
  			this.gallery.gotSomeDataFromTheBackend(file);
  		}, (error) => {
  			console.log('Error! ', error);
  		});
  	}
  }

}
