import {ToolsComponent} from '../../tools/tools.component';
import {WeatherComponent} from '../../tools/weather/weather.component';
import {MapComponent} from '../../tools/map/map.component';
import {ExpressComponent} from '../../tools/express/express.component';
import {LoginService} from '../../serve/login.service';


export const ToolRoutes = [
  {
    path: '',
    component: ToolsComponent,
    canActivate: [LoginService],
    children: [
      {
        path: '',
        component: WeatherComponent
      },
      {
        path: 'weather',
        component: WeatherComponent
      },
      {
        path: 'map',
        component: MapComponent
      },
      {
        path: 'express',
        component: ExpressComponent
      },
    ]
  }
];
