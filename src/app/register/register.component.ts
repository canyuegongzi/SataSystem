import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../serve/login.service';
import {Http} from '@angular/http';
import {timer} from 'rxjs';
import {success} from 'element-angular/release/message/images';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  /*显示内容*/
  private noticeessage = '获取验证码';
  /*是否再次点击*/
  private otherClick = true;
  /*数字的显示*/
  private messageNum = 60;
  /*定时器*/
  private timer = null;
  formModel: FormGroup;
  registerParams: string[];
  registerStaue: boolean;
  constructor(private loginService: LoginService, private http: Http, private router: Router) {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      phone: ['', this.phoneValidator],
      password: [null, this.passwordValidator],
      protocol: ['' , this.protocolValidator],
      message: ['', Validators.required]
    });
  }
  /*用户名的校验器*/
  phoneValidator(control: FormControl) {
    const phone = control.value;
    if (!phone) {
      return null;
    }
    if (phone.length >= 11) {
      return null;
    } else {
      return {phone : true};
    }
  }
  /*密码的校验器*/
  passwordValidator(control: FormControl) {
    const password = control.value;
    if (!password) {
      return null;
    }
    if (password.length > 3) {
      return null;
    } else {
      return { password: true};
    }
  }
  /*用户是否同意协议的校验器*/
  protocolValidator(control: FormControl) {
    const protocol = control.value;
    /*//console.log(protocol);*/
  }
  /*短信码的校验器*/
  repassValidator(control: FormControl) {
    let repass = control.value;
    if (!repass) {
      return null;
    }
    console.log(repass.length);
    if (repass.length = 5) {
      // noinspection JSAnnotator
      repass = control.value;
      this.loginService.regNumber(repass).subscribe(
        status => {
            console.log(status);
            if (status) {
              return null;
            }
        }
      );
    } else {
      return { repass: true};
    }
  }
  submit() {
    if (this.formModel.value) {
      this.registerParams = this.formModel.value;
    }
    this.loginService.register(this.registerParams).subscribe({
      next: (res) => {
        console.log(res);
        if (res.status === true) {
          Swal('注册成功', '请登录', 'success').then(value => {
            this.router.navigate(['/']);
          });
        } else if (res.status === 'message') {
          Swal('验证码错误', '请重新注册', 'error');
        } else if (res.status === 'same') {
          Swal('你已经注册过', '请直接登录', 'error').then(value => {
            this.router.navigate(['/']);
          });
        } else {
          Swal('未知错误', '请联系管理员', 'error');
        }
      },
      error: (err) => {
        Swal('注册失败', '请联系管理员', 'error');
      }
    });
  }
  ngOnInit() {
  }
  /*获取验证码*/
  private sendMessage(): void {
    if (this.otherClick) {
      this.otherClick = false;
      this.loginService.regNumber((this.formModel.value).phone).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        }
      });
      this.timer = setInterval(() => {
        this.messageNum--;
        this.noticeessage = this.messageNum + 's后重发';
        if (this.messageNum <= 1) {
          this.otherClick = true;
          clearInterval(this.timer);
          this.noticeessage = '获取验证码';
        }
      }, 1000);
    }
  }

}
