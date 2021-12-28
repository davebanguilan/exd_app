import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabScanPage } from './tab-scan.page';

import { TabScanPageRoutingModule } from './tab-scan-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabScanPageRoutingModule
  ],
  declarations: [TabScanPage]
})
export class TabScanPageModule {}
