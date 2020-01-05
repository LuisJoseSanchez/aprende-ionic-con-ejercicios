import { Injectable } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  photoPaths: SafeResourceUrl[] = [];

  constructor() { }

  insertPhoto(path: SafeResourceUrl) {
    this.photoPaths.unshift(path);
  }

  removePhoto(path: SafeResourceUrl) {
    const i = this.photoPaths.indexOf(path);
    this.photoPaths.splice(i, 1);
  }

  getPhotos() {
    return this.photoPaths;
  }
}
