import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  constructor(
    //private loginService: LoginService,
    private router: Router
  ) {}

  public navigateToTimer() {
    this.router.navigate(['timer']);
  }

  public doLogin(email:string, password:string) {
    alert(email)
  }
}
