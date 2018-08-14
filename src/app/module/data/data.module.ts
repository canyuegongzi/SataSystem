import {RouterModule} from '@angular/router';
import {NgxEchartsModule} from 'ngx-echarts';
import {LoginService} from '../../serve/login.service';
import {GetdataService} from '../../serve/getdata.service';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {DataRoutes} from './data.routes';
import {MapdataComponent} from '../../data/mapdata/mapdata.component';
import {AssaydataComponent} from '../../data/assaydata/assaydata.component';
import {ResdataComponent} from '../../data/resdata/resdata.component';
import {ShareModule} from '../../share.module';
import {ElModule} from 'element-angular';

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(<any>DataRoutes),
    /*第三方的包*/
    ElModule.forRoot(),
    /*数据可视化库*/
    NgxEchartsModule,
  ],
  declarations: [
    ResdataComponent,
    AssaydataComponent,
    MapdataComponent
  ],
  providers: [LoginService, GetdataService],
})

export class DataModule { }
