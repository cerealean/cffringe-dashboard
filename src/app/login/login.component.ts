import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  @Input() public showLoginModal:boolean = false;
  @Output() public onClose = new EventEmitter<boolean>();
  public hasBlurredUsername:boolean = false;
  public hasBlurredPassword:boolean = false;
  public isValidUsername:boolean = false;
  public isValidPassword:boolean = false;
  public isLoggingIn:boolean = false;
  public hasClickedLogin:boolean = false;
  public isValidLogin:boolean = false;

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  closeModal(usernameElement:HTMLElement, passwordElement:HTMLElement){
    this.showLoginModal = false;
    this.onClose.emit(true);
    (<HTMLInputElement>usernameElement).value = "";
    (<HTMLInputElement>passwordElement).value = "";
    this.hasBlurredPassword = false;
    this.hasBlurredUsername = false;
    this.isValidUsername = false;
    this.isValidPassword = false;
    this.isValidLogin = false;
    this.hasClickedLogin = false;
    this.isLoggingIn = false;
  }

  login(username:string, password:string){
    try{
      this.isLoggingIn = true;
      setTimeout(() => {
        this.isLoggingIn = false;
        this.hasClickedLogin = true;
        this.isValidLogin = this.loginService.login(username, password);
      }, 3000);
    }
    catch(exception){
      this.isLoggingIn = false;
    }
  }

  validateUsername(username:string){
    this.hasBlurredUsername = true;
    this.isValidUsername = username.length > 6;
  }

  validatePassword(password:string){
    this.hasBlurredPassword = true;
    this.isValidPassword = password.length > 10;
  }

}
