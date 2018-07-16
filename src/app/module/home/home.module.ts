import { NgModule } from '@angular/core';
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
    BrowserAnimationsModule,
    /*数据可视化库*/
    NgxEchartsModule,
  ],
  declarations: [
    ResdataComponent,
    AssaydataComponent,
    MapdataComponent,
    DataComponent,
    AsydataComponent
  ],
  providers: [LoginService, GetdataService],
})
export class HomeModule { }
