import {AfterViewInit, ChangeDetectorRef, Component, forwardRef, Inject, OnDestroy, OnInit} from '@angular/core';
import {AdminService} from '../../serve/admin.service';
import {Observable, Subscription} from 'rxjs';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, AfterViewInit, OnDestroy {
  id: any;
  labelPosition = 'left';
  /*数据回填1*/
  private forminit: any;
  /*用来从服务中接受具体的信息的，在组件销毁时可以用来取消订阅的流*/
  private subscription: Subscription;
  validateForm: FormGroup;
  public  reach = [{value: 1, label: '策划' }, { value: 2, label: '行政' },
    { value: 3, label: '公关' }, { value: 4, label: '研发二' },
    { value: 5, label: '市场二' }, { value: 6, label: '设计二' },
    { value: 7, label: '市场一' }, { value: 8, label: '研发三' }];

  private name = new FormControl('');
  private code = new FormControl('', Validators.required);
  private sex = new FormControl('');
  private reach = new FormControl([{}] , Validators.required);
  private date = new FormControl('', Validators.required);
  private deal = new FormControl([], Validators.required);
  private fresh = new FormControl('', Validators.required);
  private identity = new FormControl('', Validators.required);
  private phone = new FormControl('', Validators.required);
  private root = new FormControl('', Validators.required);
  private address = new FormControl('', Validators.required);
  private demerits = new FormControl('', Validators.required);
  private star = new FormControl('', Validators.required);
  private age = new FormControl('', Validators.required);
  /*通报次数*/
  private demer: any;
 /*综合登记*/
 private  stars: number;
 /*是否修改成功的标志位*/
 private editflag: boolean;
  constructor(private admin: AdminService, private changeDetectorRef: ChangeDetectorRef, private router: Router,
               private routerInfo: ActivatedRoute,
              @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder, private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      'name': this.name,
      'code': this.code,
      'sex': this.sex,
      'reach': this.reach,
      'date': this.date,
      'age': this.age,
      /*待遇*/
      'deal': this.deal,
      /*是否应届*/
      'fresh': this.fresh,
      'identity': this.identity,
      'phone': this.phone,
      'root': this.root,
      'address': this.address,
      'demerits': this.demerits,
      'star': this.star,
    });
  }

/*
:
  Id_no
    :
    "420101198101017802"
  age
    :
    35
  code
    :
    "GyDy"
  date
    :
    "2018-07-19"
  demerits
    :
    1
  headphoto
    :
    ""
  id
    :
    1532002354442
  job
    :
    "研发二"
  name
    :
    "顾佳怡"
  phone
    :
    "13180519553"
  reach
    :
    "设计一"
  sex
    :
    0
  star
    :
    2
  __proto__
    :
    Object
  1
    :
    address
:
  "暂时没有模拟的家庭住址的数据"
  deal
    :
    []
  demerits
    :
    [{…}]
  experience
    :
    [{…}]
  fresh
    :
    1
  id
    :
    1532002354442
  identity
    :
    "420101198101017802"*/
  ngOnInit() {
  this.formInit();
  console.log(this.name.value);
  }
  ngAfterViewInit() {
    this.changeDetectorRef.markForCheck();
    this.changeDetectorRef.detectChanges();
  }
  formInit() {
    /*表单的初始化*/
    this.id = this.routerInfo.snapshot.queryParams['id'];
    /**
     * 根据id湖区具体的信息进行回填数据
     * 第一次的通过服务拿数据，有时拿不到数据，导致数据无法回填
     * 第二次通过element进行数据绑定，抛出异常暂时无法解决
     * */
    this.admin.getdetailInformation(this.id).subscribe((res: any) => {
      /*把返回的数据进行合并成一个对象的格式*/
      this.forminit = Object.assign(res[0], res[1]);
      this.demer  = Number(this.forminit.demerits);
      this.stars  = Number(this.forminit.star);
      console.log(this.validateForm.value);
    });

  }
  ngOnDestroy() {
    // this.subscription.unsubscribe();
    this.changeDetectorRef.detach();
  }

  submit(): void {
      for (const key in this.validateForm.value) {
        if (this.validateForm.value[key] === '') {
            this.validateForm.value[key] = this.forminit[key];
        }
      }
     console.log(this.validateForm.value);
     if (this.validateForm.value) {
      this.admin.editAdminInformation(this.validateForm.value, this.id).subscribe(res => {
          if (res.status) {
            Swal('修改成功成功', '请进行其他操作', 'success').then(value => {
              this.router.navigate(['/admin/show']);
            });
          }
      });
    }
  }

  reset(): void {
    this.validateForm.reset();
  }

  ctrl(item: string): AbstractControl {
    return this.validateForm.controls[item];
  }

  statusCtrl(item: string): string {
    if (!this.validateForm.controls[item]) {
      return;
    }
    const control: AbstractControl = this.validateForm.controls[item];
    return control.dirty && control.hasError('status') ? control.errors.status : '';
  }

  messageCtrl(item: string): string {
    if (!this.validateForm.controls[item]) {
      return;
    }
    const control: AbstractControl = this.validateForm.controls[item];
    return control.dirty && control.hasError('message') ? control.errors.message : '';
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
      return {status: 'error', message: '必须填写城市名'};
    }
    if (!/[一-龥]/.test(control.value)) {
      return { status: 'error', message: '城市名必须是中文' };
    }
    return { status: 'success' };
  }
  /*日期选择的函数*/
  private handle(par) {
    console.log(par);
  }
  private starrate(event) {
    console.log(event);
  }
  private changeDemerits(event) {
    console.log(event);
  }
  /*canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (2 > 1) {
      Swal('确定要离开');
      return false;
    }
  }*/private isObjectValueEqual(a, b) {

    const aProps = Object.getOwnPropertyNames(a);
    const bProps = Object.getOwnPropertyNames(b);
    for (let i = 0; i < aProps.length; i++) {
      const propName = aProps[i];

      if (a[propName] !== b[propName]) {
        return false;
      }
    }

    return true;
  }
}




