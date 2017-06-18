import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { KioskComponent } from './components/kiosk/kiosk.component';
import { WodAdminComponent } from './components/wod-admin/wod-admin.component';
import { HomeComponent } from './components/home/home.component';
import { MemberGuard } from './guards/member.guard';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'kiosk',
        component: KioskComponent,
        canActivate: [MemberGuard]
    },
    {
        path: 'wod-admin',
        component: WodAdminComponent,
        canActivate: [MemberGuard]
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