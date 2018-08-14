import {HomeComponent} from '../../home/home.component';
import {ElModule} from 'element-angular';
import {LoginService} from '../../serve/login.service';
import {ShareModule} from '../../share.module';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {OurComponent} from '../../our/our.component';
const AboutRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: OurComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(<any>AboutRoutes),
    /*第三方的包*/
    ElModule.forRoot(),
  ],
  declarations: [
    OurComponent
  ],
  providers: [LoginService],
})

export class AboutModule { }


