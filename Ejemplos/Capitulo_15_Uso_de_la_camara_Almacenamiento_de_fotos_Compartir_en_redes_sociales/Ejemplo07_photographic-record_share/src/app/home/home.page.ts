import { Component } from '@angular/core';
import { CameraService } from '../services/camera.service';
import { PhotoService } from '../services/photo.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private cameraService: CameraService,
    private photoService: PhotoService
  ) {}

  async takePicture() {
    const photoPath = await this.cameraService.takePicture();
    this.photoService.insertPhoto(photoPath);
  }

  removePhoto(path: string) {
    this.photoService.removePhoto(path);
  }

  sharePhoto(path: string) {
  }
}
