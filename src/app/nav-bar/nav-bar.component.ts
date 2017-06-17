import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public showNavigation:boolean = true;
  @Output() public showLoginModal = new EventEmitter<boolean>();
  public isLoggingOut:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  triggerLoginModal(){
    this.showLoginModal.emit(true);
  }

  toggleNavigationVisability(navIcon:HTMLElement, navigation:HTMLElement){
    this.showNavigation = !this.showNavigation;
    const navigationHeight = navigation.offsetHeight;
    navIcon.setAttribute("top", navigationHeight.toString());
  }

  logout(){
    this.isLoggingOut = true;
    setTimeout(() => this.isLoggingOut = false, 3000);
  }
}
