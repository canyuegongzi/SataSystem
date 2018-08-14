import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../serve/user.service';
import Swal from 'sweetalert2';
import {AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  public id: number;
  public name: string;
  public current: any;
  public formModel: FormGroup;
  /*表单的初始化*/
  private loginname = new FormControl('');
  private sex = new FormControl('');
  private date = new FormControl('', Validators.required);
  private phone = new FormControl('', Validators.required);
  private root = new FormControl('', Validators.required);
  private address = new FormControl('', Validators.required);
  private birthday = new FormControl('', Validators.required);
  private desc = new FormControl('', Validators.required);
  private headphoto = new FormControl('', Validators.required);
  private job = new FormControl('', Validators.required);
  constructor(private routeInfo: ActivatedRoute, private user: UserService, private fb: FormBuilder, private router: Router) {
    this.formModel = this.fb.group({
      'name': this.loginname,
      'sex': this.sex,
      'date': this.date,
      'phone': this.phone,
      'root': this.root,
      'address': this.address,
      'birthday': this.birthday,
      'desc': this.desc,
      'headphoto': this.headphoto,
      'job': this.job,
    });
  }
  ngOnInit() {
    this.id = this.routeInfo.snapshot.queryParams['id'];
    this.name = this.routeInfo.snapshot.queryParams['name'];
    this.user.getcurrentUser(this.id, this.name).subscribe({
        next: (res) => {
          console.log(res);
          this.current = res;
        },
        error: () => {
          Swal('未知错误', '', 'error');
        }
      }
    );
  }
  public statusCtrl(item: string): string {
    if (!this.formModel.controls[item]) {
      return;
    }
    const control: AbstractControl = this.formModel.controls[item];
    return control.dirty && control.hasError('status') ? control.errors.status : '';
  }

  public messageCtrl(item: string): string {
    if (!this.formModel.controls[item]) {
      return;
    }
    const control: AbstractControl = this.formModel.controls[item];
    return control.dirty && control.hasError('message') ? control.errors.message : '';
  }
  public submit(): void {
    console.log(this.formModel.value);
    for (const key in this.formModel.value) {
      if (this.formModel.value[key] === '') {
        this.formModel.value[key] = this.current[key];
      }
    }
    if (this.formModel.value) {
      console.log(this.formModel.value);
      /*将用户的id加入数据中*/
      this.formModel.value.id = this.id;
      this.user.editUserDetail(this.formModel.value).subscribe(
        {
          next: (res) => {
            console.log(res);
            if (res.status) {
              Swal('信息修改成功', '请进行其他操作', 'success').then(value => {
                this.router.navigate(['/user']);
              });
            } else {
              Swal('信息修改失败', '请进行其他操作', 'error').then(value => {
                this.router.navigate(['/user']);
              });
            }
          },
          error: () => {
            Swal('未知错误', '' , 'error').then(value => {
              this.router.navigate(['/user']);
            });
          }
        }
      );
    }
  }
  public reset(): void {
    this.formModel.reset();
  }
  public handle($event): void {
  }
}
