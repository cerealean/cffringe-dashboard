import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import 'hammerjs';
import {KioskComponent} from './kiosk/kiosk.component';
import {AppComponent} from './app.component';
import { WodAdminComponent } from './wod-admin/wod-admin.component';
import { AppRoutingModule } from "app/app-routing.module";

@NgModule({
    declarations: [
        AppComponent,
        WodAdminComponent,
        KioskComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
