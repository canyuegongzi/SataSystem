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
  public name: string;
  /*当前登录的人员的id*/
  public id: string;
  /*保存当前的登录*/
  public currentUser: any;
  /*当前的ip地址*/
  public loginIp: string;
  /*当前的登录地址*/
  public loginAddress: string;
  /*sex*/
  public sex: string;
  /*root*/
  public root: string;
  /**/
  constructor(private user: UserService, private login: LoginService) { }

  ngOnInit() {
    /*模拟id 和name*/
    // console.log(JSON.parse(localStorage.getItem('user')));
    this.loginIp = JSON.parse(sessionStorage.getItem('user')).ip;
    this.name = JSON.parse(sessionStorage.getItem('user')).name;
    this.id = JSON.parse(sessionStorage.getItem('user')).id;
    this.user.getcurrentUser(this.id, this.name).subscribe({
      next: (res) => {
        // console.log(res[0]);
        this.currentUser = res;
        this.sex = res.sex === 1 ? '男' : '女';
        this.root = res.root === 1 ? '普通管理员' : '系统管理员';
    },
      error: err => {

      }
    });
  }
  public editUserMessage() {

  }
  public outLogin() {
    this.login.outlogin();
  }

}
