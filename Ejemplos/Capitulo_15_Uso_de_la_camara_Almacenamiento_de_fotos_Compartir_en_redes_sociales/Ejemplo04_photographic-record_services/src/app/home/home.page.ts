import { Component } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { CameraService } from '../services/camera.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  photoPaths: SafeResourceUrl[] = [];
  
  constructor(private cameraService: CameraService) {}

  async takePicture() {
    const photoPath = await this.cameraService.takePicture();
    this.photoPaths.unshift(photoPath);
  }

  removePhoto(path: SafeResourceUrl) {
    const i = this.photoPaths.indexOf(path);
    this.photoPaths.splice(i, 1);
  }
}
