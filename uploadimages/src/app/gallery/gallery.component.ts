import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  shouldIbeVisible: boolean = false;
  file = "blank.jpg";

  constructor() {

  }
  
  gotSomeDataFromTheBackend(file) {
  		this.shouldIbeVisible = true;
        this.file = file;
  }

}
