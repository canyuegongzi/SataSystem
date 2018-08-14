
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {LoginService} from './serve/login.service';


@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [LoginService],
})
export class RootModule { }
