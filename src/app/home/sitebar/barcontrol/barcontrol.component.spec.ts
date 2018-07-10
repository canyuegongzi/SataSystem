import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcontrolComponent } from './barcontrol.component';

describe('BarcontrolComponent', () => {
  let component: BarcontrolComponent;
  let fixture: ComponentFixture<BarcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
