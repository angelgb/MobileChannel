import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { TimerComponent } from './timer.component';
import { TimerService } from './timer.service';

describe('GroceryComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimerComponent],
      imports: [BrowserModule, RouterTestingModule],
      providers: [TimerService, HttpClient, HttpHandler],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(TimerComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
