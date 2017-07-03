import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { User } from '../../models/user';

@Component({
  templateUrl: './wod-admin.component.html',
  styleUrls: ['./wod-admin.component.css']
})
export class WodAdminComponent implements OnInit {
  public user: User = this.authenticationService.getCurrentlyLoggedInUser();
  public gym = {};

  constructor(
    private authenticationService:AuthenticationService,
  ) { }

  ngOnInit() {
  }

}
