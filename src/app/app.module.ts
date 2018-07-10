import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { SitebarComponent } from './home/sitebar/sitebar.component';
import { FooterComponent } from './home/footer/footer.component';
import { ContentComponent } from './home/content/content.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';
import {LoginService} from './serve/login.service';
import { RegisterComponent } from './register/register.component';
import { ElModule } from 'element-angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToolsComponent } from './home/content/tools/tools.component';
import { MessageComponent } from './home/content/message/message.component';
import { DataComponent } from './data/data.component';
import { ResdataComponent } from './data/resdata/resdata.component';
import { AssaydataComponent } from './data/assaydata/assaydata.component';
import { MapdataComponent } from './data/mapdata/mapdata.component';
import { AdminComponent } from './admin/admin.component';
import { ShowadminComponent } from './admin/showadmin/showadmin.component';
import { AddadminComponent } from './admin/addadmin/addadmin.component';
import { EditComponent } from './admin/edit/edit.component';
import { DeladminComponent } from './admin/edit/deladmin/deladmin.component';
import { RegadminComponent } from './admin/edit/regadmin/regadmin.component';
import { NowstatusComponent } from './nowstatus/nowstatus.component';
import { FriengsComponent } from './nowstatus/friengs/friengs.component';
import { ShopComponent } from './nowstatus/shop/shop.component';
import { ControlComponent } from './home/content/control/control.component';
import { UserComponent } from './user/user.component';
import { SettingComponent } from './setting/setting.component';
import { OurComponent } from './our/our.component';
import { BarcontrolComponent } from './home/sitebar/barcontrol/barcontrol.component';
import {NgxEchartsModule} from 'ngx-echarts';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SitebarComponent,
    FooterComponent,
    ContentComponent,
    RegisterComponent,
    ToolsComponent,
    MessageComponent,
    DataComponent,
    ResdataComponent,
    AssaydataComponent,
    MapdataComponent,
    AdminComponent,
    ShowadminComponent,
    AddadminComponent,
    EditComponent,
    DeladminComponent,
    RegadminComponent,
    NowstatusComponent,
    FriengsComponent,
    ShopComponent,
    ControlComponent,
    UserComponent,
    SettingComponent,
    OurComponent,
    BarcontrolComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    /*响应式的模块*/
    ReactiveFormsModule,
    routing,
    /*第三方的包*/
    ElModule.forRoot(),
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    /*数据可视化库*/
    NgxEchartsModule,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }