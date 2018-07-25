import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../serve/login.service';
import {ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-usermessage',
  templateUrl: './usermessage.component.html',
  styleUrls: ['./usermessage.component.css']
})
export class UsermessageComponent implements OnInit {

  private name: string;
  private id: string;
  /*具体的操作的日志的消息*/
  private log: any;
  /*页数*/
  private page = 1;
  constructor(private  logilog: LoginService , private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    /*
    * 这儿为啥要用local Storage。
    * 路由传参莫名的不能用了
    * */
    this.id = JSON.parse(localStorage.getItem('user')).id;
    this.name = JSON.parse(localStorage.getItem('user')).name;
    // this.id = this.routeInfo.snapshot.queryParams['id'];
    // this.name = this.routeInfo.snapshot.queryParams['name'];
    this.logilog.getLoginLog(this.id, this.name, this.page).subscribe({
      next: (res) => {
        this.log = res;
    },
      error: err => {
        console.log(err);
        Swal('获取操作日志失败', '请重新获取', 'info');
      }
    });
  }
 private pagination(event): void {
    // this.page = event;
   this.logilog.getLoginLog(this.id, this.name, event).subscribe({
     next: (res) => {
       this.log = res;
     },
     error: err => {
       console.log(err);
       Swal('获取操作日志失败', '请重新获取', 'info');
     }
   });
 }

}
