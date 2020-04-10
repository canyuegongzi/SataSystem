import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {LoginService} from '../serve/login.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModel: FormGroup;
  loginParams: string[];
  constructor(private loginService: LoginService, private router: Router) {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      phone: ['', this.phoneValidator],
      password: [null, this.passwordValidator],
      protocol: ['' , this.protocolValidator]
    });
  }
  phoneValidator(control: FormControl) {
    const phone = control.value;
    if (!phone) {
      return null;
    }
    if (phone.length >= 3) {
      return null;
    } else {
      return {phone : true};
    }
  }
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
  protocolValidator(control: FormControl) {
    const protocol = control.value;
    /*//console.log(protocol);*/
  }
  submit() {
    if (this.formModel.value) {
      console.log(this.formModel.value);
      this.loginParams = this.formModel.value;
    }
    this.loginService.doLogin(this.formModel.value).subscribe({
      next: (res) => {
        if (res.status) {
          this.router.navigate(['data']);
          res.data[0].ip = res.ip;
          const user = JSON.stringify(res.data[0]);
          sessionStorage.setItem('user', user );
        } else {
          switch (res.message) {
            case 'error':
              Swal('密码或者用户名错误');
              break;
            case 'noperson':
              Swal('你还未注册， 请先注册').then(value => {
                this.router.navigate(['register']);
              });
              break;
          }
        }
      }
    });
  }
  ngOnInit() {
  }

}
