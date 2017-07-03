import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {KioskComponent} from './components/kiosk/kiosk.component';
import {AppComponent} from './app.component';
import { WodAdminComponent } from './components/wod-admin/wod-admin.component';
import { AppRoutingModule } from "app/app-routing.module";
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AuthenticationService } from './services/authentication/authentication.service';
import { HomeComponent } from './components/home/home.component'
import { MemberGuard } from './guards/member.guard';
import { UserSettingsDeactivateGuard } from "./guards/user-settings-deactivate.guard";
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { GymAdminComponent } from './components/gym-admin/gym-admin.component';

@NgModule({
    declarations: [
        AppComponent,
        WodAdminComponent,
        KioskComponent,
        LoginComponent,
        NavBarComponent,
        HomeComponent,
        UserSettingsComponent,
        AppFooterComponent,
        GymAdminComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [AuthenticationService, MemberGuard, UserSettingsDeactivateGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
