import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {concat} from 'rxjs';
import {LoginService} from '../serve/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModel: FormGroup;
  loginParams: string[];
  constructor(private loginService: LoginService) {
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
    if (phone.length >= 11) {
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
      this.loginParams = this.formModel.value;
    }
    this.loginService.doLogin(this.loginParams);
  }
  ngOnInit() {
  }

}
