import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepassComponent } from './repass.component';

describe('RepassComponent', () => {
  let component: RepassComponent;
  let fixture: ComponentFixture<RepassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
