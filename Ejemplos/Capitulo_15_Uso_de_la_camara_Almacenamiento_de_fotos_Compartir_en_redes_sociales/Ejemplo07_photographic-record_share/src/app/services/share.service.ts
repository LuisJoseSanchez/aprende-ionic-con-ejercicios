import { Injectable } from '@angular/core';
import { SocialSharing } from "@ionic-native/social-sharing/ngx";

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(
    private socialSharing: SocialSharing
  ) { }

  sharePhoto(path: string) {
    const pathToFile = path.replace('http://localhost/_capacitor_file', 'file://');

    this.socialSharing.share(
      'Photorecord está genial',
      null,
      pathToFile,
      null
    );
  }
}
