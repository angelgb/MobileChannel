import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

describe('GroceryComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [BrowserModule, RouterTestingModule],
      providers: [LoginService, HttpClient, HttpHandler],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('navigateToTimer', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    expect(component.navigateToTimer).toBeDefined();
    component.navigateToTimer('a@b.c');
  });

  it('doLogin', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    expect(component.doLogin).toBeDefined();
    expect(component.doLogin('', '1234')).toBeFalsy();
    expect(component.doLogin('a@b.c', '')).toBeFalsy();
    expect(component.doLogin('a@b.c', '1234')).toBeTruthy();
  });
});
