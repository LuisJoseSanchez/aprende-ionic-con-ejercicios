import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Share } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }

  async sharePhoto(path: string) {
    const shareOptions = {
      title: 'Photorecord es guay',
      text: 'Foto que no te puedes perder',
      url: path,
      dialogTitle: 'Comparte con tus amigos'
    }

    await Share.share(shareOptions);
  }
}
