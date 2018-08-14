import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {AdminService} from '../../serve/admin.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-regadmin',
  templateUrl: './regadmin.component.html',
  styleUrls: ['./regadmin.component.css']
})
export class RegadminComponent implements OnInit {
  /*存储查询到的具体的信息*/
  public rootAdminDetail: any;
  public formModel: FormGroup;
  /*是否查到信息的标志位*/
  public detailFlag = false;
  public adminid: number;
  constructor(private router: Router, private http: Http, private admin: AdminService) {
   const fb = new FormBuilder();
    this.formModel = fb.group({
      'name' : [''],
      'code': [''],
    });
  }

  ngOnInit() {
  }
  /**/
  public submit() {
    if (!this.detailFlag) {
      this.admin.getAdminInformation(this.formModel.value).subscribe({
        next: (res) => {/* Swal('注册成功', '请进行其他操作', 'success');*/
          this.rootAdminDetail = res.data;
          if (this.rootAdminDetail.name) {
            /*如果有值，则修改标志位*/
            this.detailFlag = true;
            this.adminid = this.rootAdminDetail.id;
          }
        },
        error: () => { Swal('查询失败', '请联系管理员查询具体原因', 'error').then(value => {
          this.router.navigate(['admin/reg']);
        } ); }
      });
    } else {
      Swal('请注册', '系统已查到具人员的信息', 'error');
    }

}
/*注册逻辑*/
  public regAdmin() {
  if (this.detailFlag) {
      this.admin.regAdminRoot(this.adminid, 2).subscribe({
        next: (res) => {
          // console.log(res);
          if (res.status) {
            Swal('权限修改成功', '请进行其他操作', 'success').then(value => {
              this.router.navigate(['admin/show']);
            } );
          } else {
            Swal('权限修改失败', '请联系系统管理员', 'error').then(value => {
              this.router.navigate(['admin/reg']);
            } );
          }
    },
          error: () => {
            (Swal('发生未知失败', '请重新操作或联系系统管理员', 'error'));
          }
      });
  } else {
    Swal('请先查询', '', 'warning');
  }
}
}
