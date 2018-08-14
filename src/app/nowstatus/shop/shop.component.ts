import { Component, OnInit } from '@angular/core';
import {HomeotherService} from '../../serve/homeother.service';
import Swal from 'sweetalert2';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  public formModel: FormGroup;
  public companydesc: any;
  public compsnyControl: FormControl = new FormControl();
  public filtername: string;
  constructor(private company: HomeotherService) {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      'name' : this.compsnyControl
    });
    this.compsnyControl.valueChanges
     // .debounceTime(500)
      .subscribe(
      value => {console.log(value);  this.filtername = value; }
    );
  }

  ngOnInit() {
     this.company.getCompanyDetail({page: 1}).subscribe({
      next: (res) => {
        console.log(res);
        this.companydesc = res;
        console.log(this.companydesc);
      },
       error: () => {
        Swal('位置错误');
       }
    });
  }
  public submit(): void {
    console.log(this.formModel.value);
    this.company.getCompanyDetail({name: this.formModel.value}).subscribe({
      next: (res) => {
        console.log(res);
        this.companydesc = res;
      },
      error: () => {
        Swal('未知错误');
      }
    });
  }
  public input() {
    console.log('dddd');
  }
  public pagination(event) {
    if (event) {
      this.company.getCompanyDetail({page: event}).subscribe({
        next: (res) => {
          console.log(res);
          this.companydesc = res;
        },
        error: () => {
          Swal('未知错误');
        }
      });
    }
  }

}
