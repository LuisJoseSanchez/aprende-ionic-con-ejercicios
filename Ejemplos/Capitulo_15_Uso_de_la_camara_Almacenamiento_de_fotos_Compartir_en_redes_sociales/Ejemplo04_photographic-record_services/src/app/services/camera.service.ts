import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  imageOptions = {
    quality: 60,
    allowEditing: false,
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera
  };

  constructor(private sanitizer: DomSanitizer) { }

  async takePicture(): Promise<SafeResourceUrl> {
    const image = await Plugins.Camera.getPhoto(this.imageOptions);
    return this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.webPath));
  }
}
