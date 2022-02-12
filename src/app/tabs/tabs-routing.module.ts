import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTEURL } from '../shared/constants';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'account',
        loadChildren: () => import('../tab-account/tab-account.module').then(m => m.TabAccountPageModule)
      },
      {
        path: 'scan',
        loadChildren: () => import('../tab-scan/tab-scan.module').then(m => m.TabScanPageModule)
      },
      {
        path: 'connections',
        loadChildren: () => import('../tab-connections/tab-connections.module').then(m => m.TabConnectionsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/account',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: `${ROUTEURL.account}`,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
