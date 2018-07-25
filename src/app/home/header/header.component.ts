import { Component, OnInit } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {LoginService} from '../../serve/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private cure = true;
  public headohoto =  'http://oykcnjwn9.bkt.clouddn.com/907e733831ad4d17%21400x400_big.jpg';
  constructor(private me: LoginService) { }

  ngOnInit() {
  }

  /*退出登录*/
  private  outLogin(): void {
    this.me.outlogin();
  }
}
