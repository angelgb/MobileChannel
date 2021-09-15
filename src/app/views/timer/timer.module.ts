import { TimerService } from './timer.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TimerComponent } from './timer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TimerService],
  bootstrap: [TimerComponent]
})
export class GroceryModule { }
