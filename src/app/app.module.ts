import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';

import { ContentComponent } from './home/content/content.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {appRoutes} from './app.routing';
import { ElModule } from 'element-angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ControlComponent } from './home/content/control/control.component';
import {RouterModule, Routes} from '@angular/router';
import { SlidetoolsComponent } from './tools/slidetools/slidetools.component';
import { ShowlistComponent } from './admin/showlist/showlist.component';
import {LoginService} from './serve/login.service';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ControlComponent,
    SlidetoolsComponent,
    ShowlistComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    /*响应式的模块*/
    ReactiveFormsModule,
    // routing,
    // appRoutes,
    /*第三方的包*/
    ElModule.forRoot(),
    BrowserAnimationsModule,
    // BaiduMapModule.forRoot({ ak: 'm7Q5C64s8uKmUgnCw3THgmUKcOcepQQn' }),
    // CalendarModule.forRoot(),
    // EditorModule,
    /*数据可视化库*/
    // NgxEchartsModule,
    /*自己的模块*/
    // LoginModule,
    // DataModule,
    RouterModule.forRoot(<Routes>appRoutes),
  ],
  providers: [LoginService,
    {
      provide: LocationStrategy, useClass: HashLocationStrategy
    }],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
