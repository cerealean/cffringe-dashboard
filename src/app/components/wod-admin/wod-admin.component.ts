import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-wod-admin',
  templateUrl: './wod-admin.component.html',
  styleUrls: ['./wod-admin.component.css']
})
export class WodAdminComponent implements OnInit {
  public user:User = this.authenticationService.getCurrentlyLoggedInUser();

  constructor(
    private authenticationService:AuthenticationService,
  ) { }

  ngOnInit() {
  }

}
