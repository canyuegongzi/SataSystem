import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AdminService} from '../serve/admin.service';
import {RootService} from '../serve/root.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  /*用户的数据的数组*/
  public user: any;
  /*用户数据的总数*/
  public total: number;
  constructor(private getUser: RootService, private router: Router, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.getUser.getLoginUser(1).subscribe(res => {
        this.user = res.data;
        this.total = res.total;
    });
  }

  protected pagination(event) {
    console.log(event);
    this.changeDetectorRef.markForCheck();
    this.changeDetectorRef.detectChanges();
    this.getUser.getLoginUser(event).subscribe(res => {
      this.user = res.data;
      this.total = res.total;
    });
  }
  protected changeUserRoot(ref: any) {
    console.log(ref.rowData.id);
    this.getUser.changeUserRoot(ref.rowData.id, 2.0).subscribe(res => {

      if (res.status) {
        Swal('修改权限成功').then(value => {
          this.router.navigate(['/setting']);
        });
      } else {
        Swal('修改权限失败').then(value => {
          this.router.navigate(['/setting']);
        });
      }
    });
  }
  protected limitUserLogin(ref: any) {
    console.log(ref.rowData.id);
    this.getUser.changeUserRoot(ref.rowData.id, 0.0).subscribe(res => {

      if (res.status) {
        Swal('禁用用户成功').then(value => {
          this.router.navigate(['/setting']);
        });
      } else {
        Swal('禁用用户失败').then(value => {
          this.router.navigate(['/setting']);
        });
      }
    });
  }
}
