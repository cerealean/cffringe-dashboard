import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private document:Document;
  public showLoginModal:boolean = false;

  constructor(@Inject(DOCUMENT) document:any){
    this.document = <Document> document;
  }

}
