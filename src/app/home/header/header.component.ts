import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../serve/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public cure = true;
  public headohoto =  'http://qiniu.canyuegongzi.xyz/headphoto.jpg';
  constructor(private me: LoginService) { }

  ngOnInit() {
  }

  /*退出登录*/
  public  outLogin(): void {
    this.me.outlogin();
  }
}
