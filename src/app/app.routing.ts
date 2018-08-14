import {LoginService} from './serve/login.service';

export const appRoutes = [
  {
    path: '',
    /*redirectTo: 'login',
    pathMatch: 'full'*/
    loadChildren: './module/login/login.module#LoginModule',
  },
  {
    path: 'login',
    loadChildren: './module/login/login.module#LoginModule',
  },
  {
    path: 'data',
    loadChildren: './module/data/data.module#DataModule',
    canActivate: [LoginService],
  },
  {
    path: 'admin',
    loadChildren: './module/admin/admin.module#AdminModule',
  },
  {
    path: 'user',
    loadChildren: './module/user/user.module#UserModule',
  },
  {
    path: 'status',
    loadChildren: './module/status/status.module#StatusModule',
  },
  {
    path: 'about',
    loadChildren: './module/about/about.module#AboutModule',
  },
  {
    path: 'setting',
    loadChildren: './module/setting/setting.module#SettingModule',
  },
  {
    path: 'tools',
    loadChildren: './module/tools/tools.module#ToolsModule',
    canActivate: [LoginService],
  },
  {
    path: 'ai',
    loadChildren: './module/ai/ai.module#AiModule',
    canActivate: [LoginService],
  },
  {
    path: 'note',
    loadChildren: './module/note/note.module#NoteModule',
    canActivate: [LoginService],
  },
  {
    path: 'song',
    loadChildren: './module/song/song.module#SongModule',
    canActivate: [LoginService],
  },
  {
    path: 'edit',
    loadChildren: './module/edit/edit.module#EditModule',
    canActivate: [LoginService],
  },
  {
    path: 'message',
    loadChildren: './module/message/message.module#MessageModule'
  }
];
