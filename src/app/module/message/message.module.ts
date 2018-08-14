import {RouterModule, Routes} from '@angular/router';
import {MessageComponent} from '../../message/message.component';
import {ElModule} from 'element-angular';
import {LoginService} from '../../serve/login.service';
import {ShareModule} from '../../share.module';
import {NgModule} from '@angular/core';

const MessageRoutes: Routes = [
  {
    path: '',
    component: MessageComponent,
  }
];

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(<any>MessageRoutes),
    /*第三方的包*/
    ElModule.forRoot(),
  ],
  declarations: [
    MessageComponent
  ],
  providers: [LoginService],
})

export class MessageModule { }
