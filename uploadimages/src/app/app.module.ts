import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FileuploaderComponent } from './fileuploader/fileuploader.component';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';

import { HttpModule } from '@angular/http';
import { FileviewerComponent } from './fileviewer/fileviewer.component';

@NgModule({
  declarations: [
    AppComponent,
    FileuploaderComponent,
    HeaderComponent,
    GalleryComponent,
    FileviewerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
