import { Component } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  photoPaths: SafeResourceUrl[] = [];
  
  constructor(private sanitizer: DomSanitizer) {}

  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 60,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

    const photoPath = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.webPath));
    this.photoPaths.unshift(photoPath);
  }
}
