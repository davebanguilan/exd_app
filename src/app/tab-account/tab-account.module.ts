import { NgModule } from '@angular/core';
import { TabAccountPage } from './tab-account.page';

import { TabAccountPageRoutingModule } from './tab-account-routing.module';
import { SharedModule } from '../shared';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  imports: [
    SharedModule,
    NgxQRCodeModule,
    TabAccountPageRoutingModule
  ],
  declarations: [TabAccountPage]
})
export class TabAccountPageModule {}
