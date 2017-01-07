import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {KioskComponent} from './kiosk.component';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '@angular/material';
import {MomentModule} from 'angular2-moment';

const kioskRoutes: Routes = [
    {
        path: '',
        component: KioskComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(kioskRoutes),
        MaterialModule,
        CommonModule,
        MomentModule,
        FormsModule
    ],
    declarations: [KioskComponent],
    exports: [
        KioskComponent
    ]
})
export class KioskModule {}