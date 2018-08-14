import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {LoginService} from './serve/login.service';
import {RootModule} from './root.module';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './home/footer/footer.component';
import {HeaderComponent} from './home/header/header.component';
import {CommonModule} from '@angular/common';
import {BarcontrolComponent} from './home/sitebar/barcontrol/barcontrol.component';
import {ElModule} from 'element-angular';
import {CompanyPipe} from './pipe/company.pipe';
import {ToolsComponent} from './tools/tools.component';
import {AibarComponent} from './home/sitebar/aibar/aibar.component';


@NgModule({
  imports: [
    RootModule,
    CommonModule,
    ElModule.forRoot(),
  ],
  exports: [
    RootModule,
    CommonModule,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    BarcontrolComponent,
    ToolsComponent,
    AibarComponent,
    ElModule,
  ],
  declarations: [
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    BarcontrolComponent,
    ToolsComponent,
    AibarComponent,
  ],
  providers: [LoginService, CompanyPipe],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ShareModule { }
