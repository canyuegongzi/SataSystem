import {AfterContentInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from '../../serve/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class AdminDetailComponent implements OnInit, AfterContentInit {
  /*当前员工的唯一标识*/
  public id: number;
  /*具体的所有的信息*/
  public detailInformation = [];
  /**/
  // private othersInformation:
  public sex: any;
  constructor(private routerInfo: ActivatedRoute, private admin: AdminService,
              private changeDetectorRef: ChangeDetectorRef, private router: Router) { }

  ngOnInit() {
    this.id = this.routerInfo.snapshot.queryParams['id'];
     this.admin.getdetailInformation(this.id).subscribe((res: any) => {
      console.log(res[0]);
       this.detailInformation = res;
      if (Number(res[0].sex) === 0) {
        this.sex = '女';
      } else {
        this.sex = '男';
      }
      console.log(this.detailInformation);
    });
  }
  ngAfterContentInit() {
  }
  public editadmin() {
    console.log(this.id);
    Swal ('确定离开详情页面前往修改页面').then(value => {
      this.router.navigate(['admin/edit'], { queryParams: { id: this.id}} );
      /*向服务发送具体的信息*/
      this.admin.setFormDetail(this.detailInformation);
    });

}
  public deleteadmin() {
  Swal ({
    title: '确定删除？',
    text: '这将导致这名用户的信息在公司资料库中消失！',
  })
    .then((value) => {
      // console.log(ref.rowData.id);
      this.admin.deleteAdminInformation({id: this.id})
        .subscribe(res => {
          if (res.status) {
            Swal ('删除成功！');
            this.router.navigate(['admin/show']);
          } else {
            Swal ('删除失败！');
          }
        });
    });
}
}
