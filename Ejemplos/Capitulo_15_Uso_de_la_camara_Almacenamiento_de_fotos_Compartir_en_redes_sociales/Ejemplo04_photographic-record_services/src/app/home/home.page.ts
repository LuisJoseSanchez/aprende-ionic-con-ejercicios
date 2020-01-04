import { Component } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { CameraService } from '../services/camera.service';
import { PhotoService } from '../services/photo.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  photoPaths: SafeResourceUrl[] = [];
  
  constructor(
    private cameraService: CameraService,
    private photoService: PhotoService
  ) {}

  async takePicture() {
    const photoPath = await this.cameraService.takePicture();
    this.photoService.insertPhoto(photoPath);
  }

  removePhoto(path: SafeResourceUrl) {
    this.photoService.removePhoto(path);
  }
}
