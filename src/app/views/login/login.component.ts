import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  public msgError: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  public navigateToTimer(email: string) {
    this.router.navigate(['timer', {id: email}]);
  }

  public doLogin(email: string, pass: string) {
    if (!email || !pass) {
      return false;
    }
    this.msgError = '';
    this.loginService.getLogin({ id: email, password: pass }).subscribe(
      () => {
        this.navigateToTimer(email);
      },
      (error: any) => {
        this.msgError = error.statusText;
      }
    );
    return true;
  }
}
