import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './views/login/login.module';
import { TimerModule } from './views/timer/timer.module';

const routes: Routes = [
  { path: 'login', component: LoginModule},
  { path: 'timer', component: TimerModule},
  { path: '**', component: LoginModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
