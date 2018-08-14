import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ToolRoutes} from './tools.routes';
import {ExpressComponent} from '../../tools/express/express.component';
import {WeatherComponent} from '../../tools/weather/weather.component';
import {MapComponent} from '../../tools/map/map.component';
import {ElModule} from 'element-angular';
import {ShareModule} from '../../share.module';
@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(<any>ToolRoutes),
    /*第三方的包*/
    ElModule.forRoot(),
  ],
  declarations: [
    WeatherComponent,
    MapComponent,
    ExpressComponent,
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ToolsModule { }
