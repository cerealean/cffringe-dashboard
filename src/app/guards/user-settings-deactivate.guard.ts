import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserSettingsComponent } from '../components/user-settings/user-settings.component';

@Injectable()
export class UserSettingsDeactivateGuard implements CanDeactivate<UserSettingsComponent> {
    canDeactivate(
      component: UserSettingsComponent, 
      currentRoute: ActivatedRouteSnapshot, 
      currentState: RouterStateSnapshot, 
      nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return component.onPageNavigation();
    }
}
