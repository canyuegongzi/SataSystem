import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoginRoutes} from './login.routes';
import {LoginService} from '../../serve/login.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(<any>LoginRoutes)
  ],
  declarations: [],
  providers: [LoginService],
})
export class LoginModule { }
