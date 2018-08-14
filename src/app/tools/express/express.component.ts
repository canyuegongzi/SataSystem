import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {LifeService} from '../../serve/life.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-express',
  templateUrl: './express.component.html',
  styleUrls: ['./express.component.css']
})
export class ExpressComponent implements OnInit {

  public formModel: FormGroup;
  public expressname = new FormControl('', Validators.required);
  public expressnum = new FormControl('', Validators.required);
  constructor(private router: Router, private http: Http, private fb: FormBuilder, private life: LifeService) {
    this.formModel = this.fb.group({
      'name': this.expressname,
      'num': this.expressnum ,
    });
  }

  ngOnInit() {
  }

  submit(): void {
    console.log(this.formModel.value);
    this.life.searchExpress((this.formModel.value).name, (this.formModel.value).num).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: () => {
        Swal('发生错误');
      }
    });
  }
}
