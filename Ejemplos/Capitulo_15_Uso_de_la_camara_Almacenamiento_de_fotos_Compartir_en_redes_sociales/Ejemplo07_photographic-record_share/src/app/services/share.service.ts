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
    this.socialSharing.share(
      'Photorecord es guay',
      null,
      path,
      null
    );
  }
}
