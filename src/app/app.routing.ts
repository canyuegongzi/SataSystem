import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {LoginService} from './serve/login.service';
import {ModuleWithProviders} from '@angular/compiler/src/core';
import {ContentComponent} from './home/content/content.component';
import {HeaderComponent} from './home/header/header.component';
import {RegisterComponent} from './register/register.component';
import {ToolsComponent} from './home/content/tools/tools.component';
import {MessageComponent} from './home/content/message/message.component';
import {DataComponent} from './data/data.component';
import {AssaydataComponent} from './data/assaydata/assaydata.component';
import {MapdataComponent} from './data/mapdata/mapdata.component';
import {ResdataComponent} from './data/resdata/resdata.component';
import {ControlComponent} from './home/content/control/control.component';
import {ShowadminComponent} from './admin/showadmin/showadmin.component';
import {AddadminComponent} from './admin/addadmin/addadmin.component';
import {EditComponent} from './admin/edit/edit.component';
import {DeladminComponent} from './admin/edit/deladmin/deladmin.component';
import {RegadminComponent} from './admin/edit/regadmin/regadmin.component';
import {FriengsComponent} from './nowstatus/friengs/friengs.component';
import {ShopComponent} from './nowstatus/shop/shop.component';
import {NowstatusComponent} from './nowstatus/nowstatus.component';
import {UserComponent} from './user/user.component';
import {OurComponent} from './our/our.component';
import {SettingComponent} from './setting/setting.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    /*canActivate: [LoginService],*/
    children: [
      {
        path: '',
        redirectTo: 'data',
        pathMatch: 'full'
      },
      {
        path: 'data',
        component: ControlComponent,
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
      },
      {
        path: 'admin',
        component: ControlComponent,
        children: [
          {
            path: '',
            component: ShowadminComponent,
          },
          {
            path: 'show',
            component : ShowadminComponent
          },
          {
            path: 'add',
            component: AddadminComponent,
          },
          {
            path: 'del',
            component: DeladminComponent
          },
          {
            path: 'reg',
            component: RegadminComponent
          }
        ]
      },
      {
        path: 'status',
        component: ControlComponent,
        children: [
          {
            path: '',
            component: NowstatusComponent
          },
          {
            path: 'fri',
            component: FriengsComponent
          },
          {
            path: 'shop',
            component: ShopComponent
          }
        ]
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'about',
        component: OurComponent
      },
      {
        path: 'setting',
        component: SettingComponent
      },
      {
        path: 'tools',
        component: ToolsComponent
      },
      {
        path: 'message',
        component: MessageComponent
      }
      ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
