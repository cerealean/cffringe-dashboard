import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { User } from '../../models/user';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  public user:User = this.authenticationService.getCurrentlyLoggedInUser();
  public isMenuFixed:boolean = false;
  private document:Document;

  constructor(
    private authenticationService:AuthenticationService,
    @Inject(DOCUMENT) document:any
  ) { 
    this.document = <Document> document;
  }

  ngOnInit() {
  }

  doFocus(name:string){
    const element = this.document.getElementsByName(name)[0];
    element.scrollIntoView();
    element.focus();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const currentLocationOfTopInPx = this.getWindowTopPosition();
    const menuElement = <HTMLElement>this.document.body.getElementsByClassName('menu')[0];
    const heroElement = <HTMLElement>this.document.body.getElementsByClassName('hero')[0];
    const heroElementHeight = heroElement.offsetHeight;
    if (currentLocationOfTopInPx > heroElementHeight) {
      this.isMenuFixed = true;
    } else if (this.isMenuFixed && currentLocationOfTopInPx < heroElementHeight) {
      this.isMenuFixed = false;
    }
  }

  private getWindowTopPosition(): number{
    return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
  }

}
