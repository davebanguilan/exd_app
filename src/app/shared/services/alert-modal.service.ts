import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MODAL_BUTTON } from '../constants';
import { ModalAlert } from '../models';

@Injectable({ providedIn: 'root' })
export class AlertModalService {

  constructor(
    private alertController: AlertController
  ) {}


  async setOkayModalAlert(title: string, message: string): Promise<void> {
    const modalDetails: ModalAlert = {
      header: title,
      alertMessage: message,
      button: [{ text: MODAL_BUTTON.okay }]
    };

    await this.presentAlert(modalDetails);
  }

  async presentAlert(modalAlert: ModalAlert): Promise<void> {
    const alert = await this.alertController.create({
      header: modalAlert.header,
      message: modalAlert.alertMessage,
      buttons: modalAlert.button
    });

    alert.present();
  }

}
