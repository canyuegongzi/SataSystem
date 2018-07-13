import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomeRoutes} from './home.routes';
import {GetdataService} from '../../serve/getdata.service';
import {LoginService} from '../../serve/login.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(<any>HomeRoutes),
  ],
  declarations: [
  ],
  providers: [LoginService, GetdataService],
})
export class HomeModule { }
