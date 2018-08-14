import {ElModule} from 'element-angular/release/element-angular.module';
import {ShareModule} from '../../share.module';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {EditunsaveService} from '../../serve/editunsave.service';
import {LoginService} from '../../serve/login.service';
import {UserRoutes} from './user.routes';
import {UserindexComponent} from '../../user/userindex/userindex.component';
import {ReeorduserComponent} from '../../user/reeorduser/reeorduser.component';
import {RepassComponent} from '../../user/repass/repass.component';
import {EdituserComponent} from '../../user/edituser/edituser.component';
import {UsermessageComponent} from '../../user/usermessage/usermessage.component';
import {UserService} from '../../serve/user.service';

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(<any>UserRoutes),
    /*第三方的包*/
    ElModule.forRoot(),
  ],
  declarations: [
    UserindexComponent,
    ReeorduserComponent,
    RepassComponent,
    EdituserComponent,
    UsermessageComponent
  ],
  providers: [LoginService, UserService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})

export class UserModule { }
