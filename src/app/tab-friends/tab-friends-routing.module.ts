import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabFriendsPage } from './tab-friends.page';

const routes: Routes = [
  {
    path: '',
    component: TabFriendsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabFriendsPageRoutingModule {}
