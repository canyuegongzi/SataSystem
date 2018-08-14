import {ShopComponent} from '../../nowstatus/shop/shop.component';
import {FriengsComponent} from '../../nowstatus/friengs/friengs.component';
import {HomeComponent} from '../../home/home.component';
import {ElModule} from 'element-angular';
import {LoginService} from '../../serve/login.service';
import {ShareModule} from '../../share.module';
import {RouterModule, Routes} from '@angular/router';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CompanyPipe} from '../../pipe/company.pipe';
import {HomeotherService} from '../../serve/homeother.service';
const StatusRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'fri',
        component: FriengsComponent
      },
      {
        path: 'shop',
        component: ShopComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(<any>StatusRoutes),
    /*第三方的包*/
    ElModule.forRoot(),
  ],
  declarations: [
    FriengsComponent,
    ShopComponent,
    CompanyPipe
  ],
  providers: [HomeotherService, CompanyPipe],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})

export class StatusModule { }


