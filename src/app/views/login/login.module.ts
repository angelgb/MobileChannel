import { LoginService } from './login.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [LoginService],
  bootstrap: [LoginComponent],
})
export class LoginModule {}
