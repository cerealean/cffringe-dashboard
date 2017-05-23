import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {KioskComponent} from './kiosk/kiosk.component';
import { WodAdminComponent } from './wod-admin/wod-admin.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/kiosk',
        pathMatch: 'full'
    },
    {
        path: 'kiosk',
        component: KioskComponent
    },
    {
        path: 'wod-admin',
        component: WodAdminComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}