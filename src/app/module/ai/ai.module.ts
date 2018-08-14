import {RouterModule, Routes} from '@angular/router';
import {PhotoComponent} from '../../ai/photo/photo.component';
import {SoundComponent} from '../../ai/sound/sound.component';
import {ToolsComponent} from '../../tools/tools.component';
import {LoginService} from '../../serve/login.service';
import {ElModule} from 'element-angular';
import {ShareModule} from '../../share.module';
import {NgModule} from '@angular/core';

const AiRoutes: Routes = [
  {
    path: '',
    component: ToolsComponent,
    canActivate: [LoginService],
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
];

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(<any>AiRoutes),
    /*第三方的包*/
    ElModule.forRoot(),
  ],
  declarations: [
    SoundComponent,
    PhotoComponent
  ],
  providers: [LoginService],
})

export class AiModule { }
