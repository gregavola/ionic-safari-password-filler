import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string;
  password: string;
  passwordHasFocus = false;
  usernameHasFocus = false;

  constructor(public navCtrl: NavController) {}

  isFormValid() {
    return !!this.username && !!this.password;
  }

  login($event) {
    if ($event) {
      $event.preventDefault();
    }

    alert('login!');
  }

  inputFocus(type: string) {
    if (type == 'user') {
      this.usernameHasFocus = true;
    } else {
      this.passwordHasFocus = true;
    }
  }

  inputBlur(type: string) {
    if (type == 'user') {
      this.usernameHasFocus = false;
    } else {
      this.passwordHasFocus = false;
    }
  }
}
