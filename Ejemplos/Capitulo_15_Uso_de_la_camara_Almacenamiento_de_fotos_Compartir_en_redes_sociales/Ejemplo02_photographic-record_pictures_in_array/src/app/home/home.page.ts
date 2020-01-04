import { Component } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  photoPath: SafeResourceUrl;
  
  constructor(private sanitizer: DomSanitizer) {}

  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 60,
      allowEditing: false,
      //resultType: CameraResultType.DataUrl,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

    // this.photoPath = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    this.photoPath = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.webPath));
  }
}
