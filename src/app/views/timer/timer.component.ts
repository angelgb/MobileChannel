import { TimerService } from './timer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
})
export class TimerComponent implements OnInit {

  constructor(private timerService: TimerService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.loadData(params.id);
    })
  }

  private loadData(id: string) {
    this.timerService.patchUser(id).subscribe(data => {
      console.log(data)
    }, error => {
      console.log(error)
    })
  }

  public logOut() {
    this.router.navigate(['login']);
  }
}
