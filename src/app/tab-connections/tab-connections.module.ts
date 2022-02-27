import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TabConnectionsPage } from './tab-connections.page';

import { TabConnectionsPageRoutingModule } from './tab-connections-routing.module';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: TabConnectionsPage }]),
    TabConnectionsPageRoutingModule,
  ],
  declarations: [TabConnectionsPage]
})
export class TabConnectionsPageModule {}
