import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

import { Config } from '../config';

@Component({
  selector: 'nb-nav',
  templateUrl: './nav.component.html',
  styleUrls: [ './nav.component.css' ]
})
export class NavComponent {

  constructor(public auth: AuthService){
    auth.handleAuthentication();
  }

  isIn = false;   // store state
  toggleState() { // click handler
      let bool = this.isIn;
      this.isIn = bool === false ? true : false; 
  }
  
  isDropdownIn = false;   // store state
  toggleDropdownState() { // click handler
      let bool = this.isDropdownIn;
      this.isDropdownIn = bool === false ? true : false; 
  }
}