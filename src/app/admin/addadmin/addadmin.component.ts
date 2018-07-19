import {ChangeDetectorRef, Component, forwardRef, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {EditAdminIformation} from '../../module/Adminuer';
import {AdminService} from '../../serve/admin.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {
  /*添加用户的信息*/
  private addAdmininformation: EditAdminIformation;
  private labelPosition = 'left';
  validateForm: FormGroup;
  options: any[] = [{
    value: 'mike',
    label: '加奶油',
    children: [{
      value: 'hot',
      label: '热奶油',
      children: [{
        value: 'more',
        label: '多糖',
      }, {
        value: 'half',
        label: '半糖',
      }, {
        value: 'few',
        label: '少糖',
      }],
    }],
  }, {
    value: 'cafe',
    label: '加咖啡',
    children: [{
      value: 'cubita',
      label: '古巴咖啡',
    }, {
      value: 'brazil',
      label: '巴西咖啡',
    }, {
      value: 'jamaica',
      label: '牙买加咖啡',
    }, {
      value: 'mamba',
      label: '曼巴咖啡',
    }],
  }];
  constructor(@Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder,
              private admin: AdminService,
              private changeDetectorRef: ChangeDetectorRef,
              private router: Router
              ) { }
  submit(): void {
    console.log(this.validateForm.value);
    this.admin.addAdminInformation(this.validateForm.value).subscribe(
     /* {
        next : x => {},
        error: err => {}
      }*/
     res => {
       console.log(res);
       if (res.status) {
         Swal('添加成功', '请进行其他操作', 'success');
         this.router.navigate(['/admin/show']);
       } else {
         Swal('添加失败', '请重新操作', 'success');
       }
     }
    );
  }

  reset(): void {
    this.validateForm.reset();
  }

  ctrl(item: string): AbstractControl {
    return this.validateForm.controls[item];
  }

  statusCtrl(item: string): string {
    if (!this.validateForm.controls[item]) { return; }
    const control: AbstractControl = this.validateForm.controls[item];
    return control.dirty && control.hasError('status') ? control.errors.status : '';
  }

  messageCtrl(item: string): string {
    if (!this.validateForm.controls[item]) { return ; }
    const control: AbstractControl = this.validateForm.controls[item];
    return control.dirty && control.hasError('message') ? control.errors.message : '';
  }

  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      name: [ '', [this.nameValidator] ],
      code: [ '' ],
      sex: [ 1 ],
      reach: [ '' ],
      data: [],
      age: [ '', [this.timeValidator] ],
      date: [ '', [this.dateValidator] ],
      /*待遇*/
      deal: [[]],
      /*是否应届*/
      fresh: [''],
      identity: [''],
      phone: ['']
    });
  }
  private timeValidator = (control: FormControl) => {
    if (!control.value) {
      return { status: 'error', message: '必须选择配送时间' };
    }
    return { status: 'success' };
  }

  private dateValidator = (control: FormControl) => {
    if (!control.value) {
      return { status: 'error', message: '必须选择配送日期' };
    }
    return { status: 'success' };
  }

  private nameValidator = (control: FormControl) => {
    if (!control.value) {
      return { status: 'error', message: '必须填写城市名' };
    }
    if (!/[一-龥]/.test(control.value)) {
      return { status: 'error', message: '姓名名必须是中文' };
    }
    return { status: 'success' };
  }

}
