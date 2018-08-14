import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ElModule} from 'element-angular/release/element-angular.module';
import {LoginService} from '../../serve/login.service';
import {EditunsaveService} from '../../serve/editunsave.service';
import {AdminRoutes} from './admin.routes';
import {ShowadminComponent} from '../../admin/showadmin/showadmin.component';
import {AdminComponent} from '../../admin/admin.component';
import {AdminDetailComponent} from '../../admin/admin-detail/admin-detail.component';
import {EditComponent} from '../../admin/edit/edit.component';
import {AddadminComponent} from '../../admin/addadmin/addadmin.component';
import {DeladminComponent} from '../../admin/deladmin/deladmin.component';
import {RegadminComponent} from '../../admin/regadmin/regadmin.component';
import {ShareModule} from '../../share.module';
import {AdminService} from '../../serve/admin.service';
import {NavrootService} from '../../serve/navroot.service';

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(<any>AdminRoutes),
    /*第三方的包*/
    ElModule.forRoot(),
  ],
  declarations: [
    ShowadminComponent,
    AdminComponent,
    AdminDetailComponent,
    EditComponent,
    AddadminComponent,
    DeladminComponent,
    RegadminComponent
  ],
  providers: [LoginService, EditunsaveService, AdminService, NavrootService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})

export class AdminModule { }
