import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-fileviewer',
    templateUrl: './fileviewer.component.html',
    styleUrls: ['./fileviewer.component.css']
})
export class FileviewerComponent {

    constructor(private http: Http) { }

    shouldIbeVisible: boolean = false;
    file = "blank.jpg";

    viewFiles(event) {
        let elem = event.target;
        let formData = new FormData();
        formData.append('file', elem);

        this.http.get('view.php', formData)
            .subscribe((data) => {
                let result = data.json().files;
                this.listFiles(result);
            }, (error) => {
                console.log('Error! ', error);
            });
    }

    listFiles(file) {
        this.shouldIbeVisible = true;
        this.file = file;
        console.log(file);
    }
}
