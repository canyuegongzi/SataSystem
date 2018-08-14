import {MapdataComponent} from '../../data/mapdata/mapdata.component';
import {AssaydataComponent} from '../../data/assaydata/assaydata.component';
import {ResdataComponent} from '../../data/resdata/resdata.component';
import {HomeComponent} from '../../home/home.component';

export const DataRoutes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ResdataComponent
      },
      {
        path: 'assaydata',
        component: AssaydataComponent
      },
      {
        path: 'mapdata',
        component: MapdataComponent
      },
      {
        path: 'resdata',
        component: ResdataComponent
      }
    ]
  }
];
