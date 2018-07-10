import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeladminComponent } from './deladmin.component';

describe('DeladminComponent', () => {
  let component: DeladminComponent;
  let fixture: ComponentFixture<DeladminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeladminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeladminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
