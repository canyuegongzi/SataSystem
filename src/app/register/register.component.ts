import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {LoginService} from '../serve/login.service';
import {Http} from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formModel: FormGroup;
  registerParams: string[];
  registerStaue: boolean;
  constructor(private loginService: LoginService, private http: Http) {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      phone: ['', this.phoneValidator],
      password: [null, this.passwordValidator],
      protocol: ['' , this.protocolValidator],
      repass: ['']
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
    this.loginService.register(this.registerParams);
  }
  ngOnInit() {
  }

}
