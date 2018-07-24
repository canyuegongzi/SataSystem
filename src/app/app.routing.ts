import {LoginService} from './serve/login.service';

export const appRoutes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './module/login/login.module#LoginModule',
  },
  {
    path: 'home',
    loadChildren: './module/home/home.module#HomeModule',
    canActivate: [LoginService],
  },
  {
    path: 'tools',
    loadChildren: './module/tools/tools.module#ToolsModule',
    canActivate: [LoginService],
  }
];
