import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../serve/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Http} from '@angular/http';
import Swal from 'sweetalert2';
import {LoginService} from '../../serve/login.service';
@Component({
  selector: 'app-repass',
  templateUrl: './repass.component.html',
  styleUrls: ['./repass.component.css']
})
export class RepassComponent implements OnInit {

  /*id*/
  private id: number;
  /*name*/
  private name: string;
  private formModel: FormGroup;
  /*表单的初始化*/
  private oldpass = new FormControl('', Validators.required);
  private newpass = new FormControl('', Validators.required);
  private repass = new FormControl('', Validators.required);
  /*发送的数据*/
  private par: any;
  constructor(private user: UserService, private http: Http,
              private routeInfo: ActivatedRoute,
              private router: Router, private fb: FormBuilder,
              private login: LoginService) {
    this.formModel = this.fb.group({
      'oldpass': this.oldpass,
      'newpass': this.newpass,
      'repass': this.repass,
    });
  }

  ngOnInit() {
    this.id = this.routeInfo.snapshot.queryParams['id'];
    this.name = this.routeInfo.snapshot.queryParams['name'];
  }

  submit() {
    console.log(this.formModel.value);
    if (this.formModel.value) {
      const newpass = this.formModel.value.newpass;
      if (this.formModel.value.newpass !== this.formModel.value.repass) {
        Swal('警告', '你两次输入的密码不相同', 'error');
        return;
      } else {
            this.par = {
              oldpass: this.formModel.value.oldpass,
              newpass: this.formModel.value.newpass,
              id: this.id,
              name: this.name
        };
        this.user.editUserPass(this.par).subscribe({
          next: (res) => {
            switch (res.status) {
              case 'same':
               Swal('你修改的密码与原来相同');
                break;
              case true:
                Swal('修改成功', '请重新登录', 'success').then(value => {
                  localStorage.removeItem('user');
                  this.router.navigate(['/']);
                });
                break;
              case false:
                Swal('修改失败', '请联系管理员', 'error').then(value => {
                  this.router.navigate(['/user']);
                });
                break;
              case 'different':
                Swal('修改失败', '旧密码不正确', 'error').then(value => {
                  this.router.navigate(['/user']);
                });
                break;
            }
          },
          error: () => {
            Swal('未知错误', '请联系管理员', 'error');
          }
        });
      }
    }
  }
  reset(): void {
    this.formModel.reset();
  }
  statusCtrl(item: string): string {
    if (!this.formModel.controls[item]) {
      return;
    }
    const control: AbstractControl = this.formModel.controls[item];
    return control.dirty && control.hasError('status') ? control.errors.status : '';
  }

  messageCtrl(item: string): string {
    if (!this.formModel.controls[item]) {
      return;
    }
    const control: AbstractControl = this.formModel.controls[item];
    return control.dirty && control.hasError('message') ? control.errors.message : '';
  }
}
