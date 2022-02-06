import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScanResult } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { SCANNER_OPTIONS, TOAST_MESSAGE } from '../shared/constants';
import { User } from '../shared/models';
import { NavigationService, ToastService } from '../shared/services';
import { ScannerService } from '../shared/services/scanner.service';

@Component({
  selector: 'app-tab-scan',
  templateUrl: 'tab-scan.page.html',
  styleUrls: ['tab-scan.page.scss']
})
export class TabScanPage {
  user: User;
  showAddUserPage: boolean;

  constructor(
    private barcodeScanner: BarcodeScanner,
    private navigationService: NavigationService,
    private scannerService: ScannerService,
    private toastService: ToastService
    ) { }

  ionViewWillEnter() {
    this.initializeScanner();
  }

  initializeScanner(): void {
    this.showAddUserPage = false;
    this.barcodeScanner.scan(SCANNER_OPTIONS.options).then((value: BarcodeScanResult) => {
      if (value.cancelled) {
        this.dismiss();
      } else {
        this.scannerService.getUserDetailsById(value.text).then((data) => {
          if(data) {
            this.user = data;
            this.showAddUserPage = true;
          } else{
            this.toastService.showErrorToast(TOAST_MESSAGE.scanUserNotFound);
            this.dismiss();
          }
        }).catch(() => {
          this.toastService.showErrorToast(TOAST_MESSAGE.scanUserFetching);
          this.dismiss();
        });
      }
    })
    .catch(() => {
      this.toastService.showErrorToast(TOAST_MESSAGE.scanDefaultError);
      this.dismiss();
    });

  }

  dismiss(): void {
    this.navigationService.goToPreviousPage();
  }

  addUserCancelled(): void {
    this.initializeScanner();
  }

}
