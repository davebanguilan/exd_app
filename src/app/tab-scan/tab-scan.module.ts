
import { NgModule } from '@angular/core';
import { TabScanPage } from './tab-scan.page';

import { TabScanPageRoutingModule } from './tab-scan-routing.module';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    SharedModule,
    TabScanPageRoutingModule
  ],
  declarations: [TabScanPage]
})
export class TabScanPageModule {}
