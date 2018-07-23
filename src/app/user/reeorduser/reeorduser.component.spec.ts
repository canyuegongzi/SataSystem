import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReeorduserComponent } from './reeorduser.component';

describe('ReeorduserComponent', () => {
  let component: ReeorduserComponent;
  let fixture: ComponentFixture<ReeorduserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReeorduserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReeorduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
