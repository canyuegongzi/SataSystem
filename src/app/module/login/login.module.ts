import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginRoutes} from './login.routes';
import {LoginService} from '../../serve/login.service';
import {LoginComponent} from '../../login/login.component';
import {RegisterComponent} from '../../register/register.component';
import {ShareModule} from '../../share.module';

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(<any>LoginRoutes)
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  providers: [LoginService],
})
export class LoginModule { }
