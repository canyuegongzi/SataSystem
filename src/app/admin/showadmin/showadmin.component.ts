import {ChangeDetectorRef, Component, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../serve/admin.service';
import Swal from 'sweetalert2';
import {AdminUser} from '../../module/Adminuer';
import {Router} from '@angular/router';
@Component({
  selector: 'app-showadmin',
  templateUrl: './showadmin.component.html',
  styleUrls: ['./showadmin.component.css']
})
export class ShowadminComponent implements OnInit, OnChanges {
  private formModel: FormGroup;
  public reach = null;
  private adminNumber:  any;
  private total: number;
  private ages: null;
  private currentpage: number;
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
      this. adminNumber = res[0].data;
      this.total = res[1].total;
      this.reach = res[2].reach;
      this.ages = res[3].ages;
    });
  }
  ngOnChanges() {
  }
  /*查询函数*/
  private submit() {
    this.changeDetectorRef.markForCheck();
    this.changeDetectorRef.detectChanges();
    /*变更检测机制*/
    if (this.formModel.value) {
      this.admin.getAdminInformation(this.formModel.value).subscribe(res => {
        this.adminNumber = res;
        this.total = res.length;
      },
        error => {
          Swal('输入不合法');
        });
    }
  }
  /*删除函数*/
  private deleteAdmin(type: string, ref: any) {
    console.log(ref);
    Swal ({
      title: '确定删除？',
      text: '这将导致这名用户的信息在公司资料库中消失！',
    })
      .then((value) => {
        // noinspection JSIgnoredPromiseFromCall
        Swal ('删除失败！');
      });
  }
  /*详情函数*/
  private detailAdmin(ref: any) {
    console.log(ref.rowData.id);
    if (ref.rowData.id) {
      this.admin.getAdminInformation({id: ref.rowData.id}).subscribe(res => {
        // console.log('这里是获取职工的具体信息的逻辑');
        this.router.navigate(['/admin/show/detail'], { queryParams: { name: 1 }} );
      });
    } else {
      // noinspection JSIgnoredPromiseFromCall
      Swal('获取失败', 'error');
    }
  }
    /*原来所谓的捕获事件是这样*/
  private pagination(event) {
    console.log(event);
    if (event) {
      this.admin.getAdminInformation({page: event}).subscribe(res => {
          this.changeDetectorRef.markForCheck();
          this.changeDetectorRef.detectChanges();
          this.adminNumber = res;
          this.total = res.length;
        },
        error => {
          Swal('输入不合法');
        });
    }
  }
}
