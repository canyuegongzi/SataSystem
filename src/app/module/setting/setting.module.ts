import {HomeComponent} from '../../home/home.component';
import {ElModule} from 'element-angular';
import {LoginService} from '../../serve/login.service';
import {ShareModule} from '../../share.module';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SettingComponent} from '../../setting/setting.component';
import {RootService} from '../../serve/root.service';
import {AdminService} from '../../serve/admin.service';
const SettingRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [RootService],
    children: [
      {
        path: '',
        component: SettingComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(<any>SettingRoutes),
    /*第三方的包*/
    ElModule.forRoot(),
  ],
  declarations: [
    SettingComponent
  ],
  providers: [LoginService, RootService],
})

export class SettingModule { }


