import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermessageComponent } from './usermessage.component';

describe('UsermessageComponent', () => {
  let component: UsermessageComponent;
  let fixture: ComponentFixture<UsermessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
