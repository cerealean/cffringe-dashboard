import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  @Input() public showLoginModal:boolean = false;
  @Output() public onClose = new EventEmitter<boolean>();
  @Output() public user = new EventEmitter<User>();
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

  closeModal(usernameElement:HTMLElement = null, passwordElement:HTMLElement = null){
    this.showLoginModal = false;
    this.onClose.emit(true);
    this.hasBlurredPassword = false;
    this.hasBlurredUsername = false;
    this.isValidUsername = false;
    this.isValidPassword = false;
    this.isValidLogin = false;
    this.hasClickedLogin = false;
    this.isLoggingIn = false;
    if(usernameElement){
      (<HTMLInputElement>usernameElement).value = "";
    }
    if(passwordElement){
      (<HTMLInputElement>passwordElement).value = "";
    }
  }

  login(username:string, password:string){
    try{
      this.validateUsername(username);
      this.validatePassword(password);
      if(this.isValidUsername && this.isValidPassword){
        this.isLoggingIn = true;
        setTimeout(() => {
          this.isLoggingIn = false;
          this.hasClickedLogin = true;
          const user = this.loginService.login(username, password);
          this.isValidLogin = user != null;
          this.user.emit(user);
          this.closeModal();
        }, 3000);
      }
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
