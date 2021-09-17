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
  private TIME_UNITS = {
    MILISECONDS: 1000,
    SECONDS_HOUR: 3600,
    HORS_DAY: 24,
    SECONDS_MINUTE: 60,
  };
  public timerData = {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  };

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.loadData(params.id);
      this.timer = setInterval(() => {
        this.getDisplayTimer();
      }, 1000);
    });
  }

  private loadData(id: string) {
    this.timerService.patchTimestampByUser(id).subscribe((data: any) => {
      this.timestamp = data.timestamp;
    });
  }

  private getCurrentTime(): number {
    return new Date().getTime() - this.timestamp;
  }

  public getDisplayTimer() {
    const time: number = this.getCurrentTime() / this.TIME_UNITS.MILISECONDS;
    const days = `0${Math.floor(
      time / (this.TIME_UNITS.SECONDS_HOUR * this.TIME_UNITS.HORS_DAY)
    )}`;
    const hours = `0${
      Math.floor(time / this.TIME_UNITS.SECONDS_HOUR) % this.TIME_UNITS.HORS_DAY
    }`;
    const minutes = `0${Math.floor(
      (time % this.TIME_UNITS.SECONDS_HOUR) / this.TIME_UNITS.SECONDS_MINUTE
    )}`;
    const seconds = `0${Math.floor(
      (time % this.TIME_UNITS.SECONDS_HOUR) % this.TIME_UNITS.SECONDS_MINUTE
    )}`;

    this.timerData = {
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
