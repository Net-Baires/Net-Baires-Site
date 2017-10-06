import { Component } from '@angular/core';

@Component({
  selector: 'secure-root',
  templateUrl: './secure.component.html'
})
export class SecureComponent {
  isAdminIn = false;   // store state
  toggleAdminState() { // click handler
      let bool = this.isAdminIn;
      this.isAdminIn = bool === false ? true : false; 
  }
}