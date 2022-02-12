import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabConnectionsPage } from './tab-connections.page';

const routes: Routes = [
  {
    path: '',
    component: TabConnectionsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabConnectionsPageRoutingModule {}
