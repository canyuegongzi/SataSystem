import {RouterModule, Routes} from '@angular/router';
import {ToolsComponent} from '../../tools/tools.component';
import {LoginService} from '../../serve/login.service';
import {NoteComponent} from '../../note/note.component';
import {ElModule} from 'element-angular';
import {ShareModule} from '../../share.module';
import {NgModule} from '@angular/core';

const NoteRoutes: Routes = [
  {
    path: '',
    component: ToolsComponent,
    canActivate: [LoginService],
    children: [
      {
        path: '',
        component: NoteComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(<any>NoteRoutes),
    /*第三方的包*/
    ElModule.forRoot(),
  ],
  declarations: [
    NoteComponent
  ],
  providers: [LoginService],
})

export class NoteModule { }
