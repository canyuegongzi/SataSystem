import { Component, OnInit } from '@angular/core';
import {HomeotherService} from '../../serve/homeother.service';
import Swal from 'sweetalert2';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  private formModel: FormGroup;
  private companydesc: any;
  constructor(private company: HomeotherService) {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      'name' : [''],
    });
  }

  ngOnInit() {
     this.company.getCompanyDetail().subscribe({
      next: (res) => {
        console.log(res);
        this.companydesc = res.data;
      },
       error: () => {
        Swal('位置错误');
       }
    });
  }
  submit(): void {
    console.log(this.formModel.value);
  }

}
