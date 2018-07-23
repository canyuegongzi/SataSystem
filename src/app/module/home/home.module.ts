import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomeRoutes} from './home.routes';
import {GetdataService} from '../../serve/getdata.service';
import {LoginService} from '../../serve/login.service';
import {ResdataComponent} from '../../data/resdata/resdata.component';
import {AssaydataComponent} from '../../data/assaydata/assaydata.component';
import {MapdataComponent} from '../../data/mapdata/mapdata.component';
import {DataComponent} from '../../data/data.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxEchartsModule} from 'ngx-echarts';
import {ElModule} from 'element-angular';
import {AsydataComponent} from '../../common/asydata/asydata.component';
import {DeladminComponent} from '../../admin/edit/deladmin/deladmin.component';
import {EditComponent} from '../../admin/edit/edit.component';
import {AddadminComponent} from '../../admin/addadmin/addadmin.component';
import {RegadminComponent} from '../../admin/edit/regadmin/regadmin.component';
import {AdminComponent} from '../../admin/admin.component';
import {ShowadminComponent} from '../../admin/showadmin/showadmin.component';
import {AdminService} from '../../serve/admin.service';
import {AdminDetailComponent} from '../../admin/admin-detail/admin-detail.component';
import {EditunsaveService} from '../../serve/editunsave.service';
import {ShopComponent} from '../../nowstatus/shop/shop.component';
import {FriengsComponent} from '../../nowstatus/friengs/friengs.component';
import {NowstatusComponent} from '../../nowstatus/nowstatus.component';
import {CompanyPipe} from '../../pipe/company.pipe';
import {ReeorduserComponent} from '../../user/reeorduser/reeorduser.component';
import {UserindexComponent} from '../../user/userindex/userindex.component';
import {UserService} from '../../serve/user.service';
import {RepassComponent} from '../../user/repass/repass.component';
import {EdituserComponent} from '../../user/edituser/edituser.component';
import {UsermessageComponent} from '../../user/usermessage/usermessage.component';
/*这个模块主要是用于显示home的*/
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    /*响应式的模块*/
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(<any>HomeRoutes),
    /*第三方的包*/
    ElModule.forRoot(),
    BrowserAnimationsModule,
    /*数据可视化库*/
    NgxEchartsModule,
  ],
  declarations: [
    ResdataComponent,
    AssaydataComponent,
    MapdataComponent,
    DataComponent,
    AsydataComponent,
    AdminComponent,
    ShowadminComponent,
    AddadminComponent,
    EditComponent,
    DeladminComponent,
    RegadminComponent,
    AdminDetailComponent,
    NowstatusComponent,
    FriengsComponent,
    ShopComponent,
    CompanyPipe,
    ReeorduserComponent,
    UserindexComponent,
    RepassComponent,
    EdituserComponent,
    UsermessageComponent,
  ],
  providers: [LoginService, GetdataService, AdminService, EditunsaveService, UserService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class HomeModule { }
