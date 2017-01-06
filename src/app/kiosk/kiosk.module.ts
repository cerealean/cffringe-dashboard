import {NgModule} from '@angular/core';
import {KioskComponent} from './kiosk.component';
import {RouterModule, Routes} from '@angular/router';

const kioskRoutes: Routes = [
    {
        path: '',
        component: KioskComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(kioskRoutes)
    ],
    declarations: [KioskComponent],
    exports: [
        KioskComponent
    ]
})
export class KioskModule {}