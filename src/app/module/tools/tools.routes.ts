import {ToolsComponent} from '../../tools/tools.component';
import {WeatherComponent} from '../../tools/weather/weather.component';
import {MapComponent} from '../../tools/map/map.component';
import {ExpressComponent} from '../../tools/express/express.component';
import {SoundComponent} from '../../ai/sound/sound.component';
import {PhotoComponent} from '../../ai/photo/photo.component';
import {NoteComponent} from '../../note/note.component';
import {SongComponent} from '../../song/song.component';

export const ToolRoutes = [
  {
    path: 'tools',
    component: ToolsComponent,
    /*canActivate: [LoginService],*/
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
  },
  {
    path: 'ai',
    component: ToolsComponent,
    children: [
      {
        path: '',
        component: SoundComponent
      },
      {
        path: 'sound',
        component: SoundComponent
      },
      {
        path: 'photo',
        component: PhotoComponent
      }
    ]
  },
  {
    path: 'note',
    component: ToolsComponent,
    children: [
      {
        path: '',
        component: NoteComponent
      }
    ]
  },
  {
    path: 'song',
    component: ToolsComponent,
    children: [
      {
        path: '',
        component: SongComponent
      }
    ]
  }
];
