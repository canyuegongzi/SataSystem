import {RouterModule, Routes} from '@angular/router';
import {ToolsComponent} from '../../tools/tools.component';
import {LoginService} from '../../serve/login.service';
import {SongComponent} from '../../song/song.component';
import {NgModule} from '@angular/core';
import {ElModule} from 'element-angular';
import {ShareModule} from '../../share.module';
import {SongBaseComponent} from '../../song/song-base/song-base.component';

const SongRoutes: Routes = [
  {
    path: '',
    component: ToolsComponent,
    canActivate: [LoginService],
    children: [
      {
        path: '',
        component: SongComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(<any>SongRoutes),
    /*第三方的包*/
    ElModule.forRoot(),
  ],
  declarations: [
    SongComponent,
    SongBaseComponent,
  ],
  providers: [LoginService],
})
export class SongModule { }
