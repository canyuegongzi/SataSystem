import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserindexComponent } from './userindex.component';

describe('UserindexComponent', () => {
  let component: UserindexComponent;
  let fixture: ComponentFixture<UserindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
