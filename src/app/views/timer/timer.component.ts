import { TimerService } from './timer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html'
})
export class TimerComponent {
  public showFavorite: boolean = false
  public groceries: any[] = [];
  
  constructor(
    private timerService: TimerService,
    private router: Router
  ) {}

  public logOut() {
    this.router.navigate(['login'])
  }
}
