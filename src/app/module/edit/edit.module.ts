import {RouterModule, Routes} from '@angular/router';
import {ToolsComponent} from '../../tools/tools.component';
import {WordEditComponent} from '../../word-edit/word-edit.component';
import {ElModule} from 'element-angular';
import {ShareModule} from '../../share.module';
import {LoginService} from '../../serve/login.service';
import {NgModule} from '@angular/core';
import {EditorModule} from '@tinymce/tinymce-angular';

const EditRoutes: Routes = [
  {
    path: '',
    component: ToolsComponent,
    children: [
      {
        path: '',
        component: WordEditComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(<any>EditRoutes),
    /*第三方的包*/
    ElModule.forRoot(),
    /*编辑器*/
    EditorModule,
  ],
  declarations: [
    WordEditComponent
  ],
  providers: [LoginService],
})

export class EditModule { }
