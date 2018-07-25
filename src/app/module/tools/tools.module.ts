import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ToolRoutes} from './tools.routes';
import {ExpressComponent} from '../../tools/express/express.component';
import {SongComponent} from '../../song/song.component';
import {PhotoComponent} from '../../ai/photo/photo.component';
import {SoundComponent} from '../../ai/sound/sound.component';
import {NoteComponent} from '../../note/note.component';
import {WeatherComponent} from '../../tools/weather/weather.component';
import {MapComponent} from '../../tools/map/map.component';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ElModule} from 'element-angular';
import {NgxEchartsModule} from 'ngx-echarts';
import { BaiduMapModule } from 'angular2-baidu-map';
import {CalendarModule} from 'angular-calendar';
import {WordEditComponent} from '../../word-edit/word-edit.component';
import {CKEditorModule} from 'ng2-ckeditor';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    /*响应式的模块*/
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(<any>ToolRoutes),
    /*第三方的包*/
    ElModule.forRoot(),
    BaiduMapModule.forRoot({ ak: 'm7Q5C64s8uKmUgnCw3THgmUKcOcepQQn' }),
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    CKEditorModule,
    /*数据可视化库*/
    NgxEchartsModule,
  ],
  declarations: [
    WeatherComponent,
    MapComponent,
    ExpressComponent,
    SoundComponent,
    PhotoComponent,
    NoteComponent,
    SongComponent,
    WordEditComponent,
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ToolsModule { }
