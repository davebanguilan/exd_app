import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabScanPage } from './tab-scan.page';

const routes: Routes = [
  {
    path: '',
    component: TabScanPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabScanPageRoutingModule {}
