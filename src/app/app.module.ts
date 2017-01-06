import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import 'hammerjs';

import {AppComponent} from './app.component';
// import {KioskModule} from './kiosk/kiosk.module';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/kiosk',
        pathMatch: 'full'
    },
    {
        path: 'kiosk',
        loadChildren: './kiosk/kiosk.module#KioskModule'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        MaterialModule.forRoot(),
        // KioskModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
