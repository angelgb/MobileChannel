import { FormsModule } from '@angular/forms';
import { TimerService } from './timer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
})
export class TimerComponent implements OnInit {
  constructor(
    private timerService: TimerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  private timestamp: number = 0;
  private timer: any;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.loadData(params.id);
      this.timer = setInterval(() => {
        this.getDisplayTimer();
      }, 1000);
    });
  }

  private loadData(id: string) {
    this.timerService.patchUser(id).subscribe((data: any) => {
      this.timestamp = data.timestamp;
    });
  }

  private getCurrent(): number {
    return new Date().getTime() - this.timestamp;
  }

  public getDisplayTimer() {
    const time: number = this.getCurrent() / 1000;
    const days = `0${Math.floor(time / (3600 * 24))}`;
    const hours = `0${Math.floor(time / 3600) % 24}`;
    const minutes = `0${Math.floor((time % 3600) / 60)}`;
    const seconds = `0${Math.floor((time % 3600) % 60)}`;

    return {
      days: days,
      hours: hours.slice(-2),
      minutes: minutes.slice(-2),
      seconds: seconds.slice(-2),
    };
  }

  public logOut() {
    clearInterval(this.timer);
    this.router.navigate(['login']);
  }
}
