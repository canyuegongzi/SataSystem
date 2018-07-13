import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ToolRoutes} from './tools.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(<any>ToolRoutes)
  ],
  declarations: []
})
export class ToolsModule { }
