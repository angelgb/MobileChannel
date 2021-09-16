import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { TimerComponent } from './views/timer/timer.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'timer', component: TimerComponent},
  { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
