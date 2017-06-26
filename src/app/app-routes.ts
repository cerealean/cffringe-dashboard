import { Routes }  from '@angular/router';
import { KioskComponent } from './components/kiosk/kiosk.component';
import { WodAdminComponent } from './components/wod-admin/wod-admin.component';
import { HomeComponent } from './components/home/home.component';
import { MemberGuard } from './guards/member.guard';
import { UserSettingsDeactivateGuard } from './guards/user-settings-deactivate.guard';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';

export const appRoutes: Routes = [
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
    },
    {
        path: 'user-settings',
        component: UserSettingsComponent,
        canActivate: [MemberGuard],
        canDeactivate: [UserSettingsDeactivateGuard]
    }
];