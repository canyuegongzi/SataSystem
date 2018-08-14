import {ChangeDetectorRef, Component, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../serve/admin.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-showadmin',
  templateUrl: './showadmin.component.html',
  styleUrls: ['./showadmin.component.css']
})
export class ShowadminComponent implements OnInit, OnChanges {
  public tabtitle = '职员管理';
  public formModel: FormGroup;
  public reach: any = '';
  public adminNumber: any =  '';
  public total: number;
  public ages: any = '';
  constructor(private admin: AdminService, private changeDetectorRef: ChangeDetectorRef, private router: Router) {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      name: ['', Validators.required],
      age: ['-1'],
      code: [''],
      data: [''],
      reach: ['-1'],
    });
  }
  ngOnInit() {
    /*所有的用户的信息的初始化*/
    this.admin.getAdminInformation().subscribe(res => {
      this.personInfo(res);
      // console.log(res);
    });
  }
  ngOnChanges() {
  }
  /*查询函数*/
  public submit() {
    this.changeDetectorRef.markForCheck();
    this.changeDetectorRef.detectChanges();
    /*变更*/
    if (this.formModel.value) {
      this.admin.getAdminInformation(this.formModel.value).subscribe(res => {
        if (!res.status) {
          Swal('没查询到先关人员');
        } else if (res.status) {
          this.personInfo(res);
        } else {
            this.adminNumber = res;
            this.total = res.length;
            console.log(res);
        }
      },
        error => {
          Swal('输入不合法');
        });
    }
  }
  /*删除函数*/
  public deleteAdmin(type: string, ref: any) {
    console.log(ref.rowData.id);
    Swal ({
      title: '确定删除？',
      text: '这将导致这名用户的信息在公司资料库中消失！',
    })
      .then((value) => {
        this.admin.deleteAdminInformation({id: ref.rowData.id})
          .subscribe(res => {
            if (res.status) {
              Swal('删除成功', '请进行其他操作', 'success').then(value2 => {
                this.router.navigate(['admin/show']);
                this.changeDetectorRef.markForCheck();
                this.changeDetectorRef.detectChanges();
                this.admin.getAdminInformation().subscribe(ress => {
                  this.personInfo(ress);
                  // console.log(res);
                });
              });
            } else {
              Swal ('删除失败！');
            }
        });
      });
  }
  /*详情函数*/
  public detailAdmin(ref: any) {
    // console.log(ref.rowData.id);
    if (ref.rowData.id) {
      /*this.admin.getAdminInformation({id: ref.rowData.id}).subscribe(res => {*/
        // console.log('这里是获取职工的具体信息的逻辑');
        this.router.navigate(['admin/detail'], { queryParams: { id: ref.rowData.id }} );
     /* });*/
    } else {
      // noinspection JSIgnoredPromiseFromCall
      Swal('获取失败', 'error');
    }
  }
    /*原来所谓的捕获事件是这样*/
  public pagination(event) {
    console.log(event);
    if (event) {
      this.admin.getAdminInformation({page: event}).subscribe(res => {
          this.personInfo(res);
        },
        error => {
          Swal('输入不合法');
        });
    }
  }
  /*表格信息的重置*/
  private resetAdmin() {
      this.reach = '';
      this.adminNumber =  '';
      this.total = null;
      this.ages = '';
  }
  /*获取人员*/
  private personInfo(res: any): void {
    this.resetAdmin();
    this. adminNumber = res.data;
    this.total = res.total;
    this.reach = res.reach ? res.reach : this.reach;
    this.ages = res.ages ? res.ages : this.ages;
  }
}
