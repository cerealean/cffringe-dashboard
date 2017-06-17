import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import 'hammerjs';
import {KioskComponent} from './components/kiosk/kiosk.component';
import {AppComponent} from './app.component';
import { WodAdminComponent } from './components/wod-admin/wod-admin.component';
import { AppRoutingModule } from "app/app-routing.module";
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AuthenticationService } from './services/authentication/authentication.service'

@NgModule({
    declarations: [
        AppComponent,
        WodAdminComponent,
        KioskComponent,
        LoginComponent,
        NavBarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [AuthenticationService],
    bootstrap: [AppComponent]
})
export class AppModule {}
