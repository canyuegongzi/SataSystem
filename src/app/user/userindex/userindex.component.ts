import { Component, OnInit } from '@angular/core';
import {UserService} from '../../serve/user.service';
import {LoginService} from '../../serve/login.service';

@Component({
  selector: 'app-userindex',
  templateUrl: './userindex.component.html',
  styleUrls: ['./userindex.component.css']
})
export class UserindexComponent implements OnInit {

  /*当前的登录的姓名*/
  private name: string;
  /*当前登录的人员的id*/
  private id: string;
  /*保存当前的登录*/
  private currentUser: any;
  /*当前的ip地址*/
  private loginIp: string;
  /*当前的登录地址*/
  private loginAddress: string;
  /*sex*/
  private sex: string;
  /*root*/
  private root: string;
  /**/
  constructor(private user: UserService, private login: LoginService) { }

  ngOnInit() {
    /*模拟id 和name*/
    // console.log(JSON.parse(localStorage.getItem('user')));
    this.loginIp = JSON.parse(localStorage.getItem('user')).ip;
    this.name = JSON.parse(localStorage.getItem('user')).name;
    this.id = JSON.parse(localStorage.getItem('user')).id;
    this.user.getcurrentUser(this.id, this.name).subscribe({
      next: (res) => {
        // console.log(res[0]);
        this.currentUser = res[0];
        this.sex = res[0].sex === 1 ? '男' : '女';
        this.root = res[0].root === 1 ? '普通管理员' : '系统管理员';
    },
      error: err => {

      }
    });
  }
  private editUserMessage() {

  }
  private outLogin() {
    this.login.outlogin();
  }

}
