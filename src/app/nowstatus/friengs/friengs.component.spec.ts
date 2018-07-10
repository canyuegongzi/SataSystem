import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriengsComponent } from './friengs.component';

describe('FriengsComponent', () => {
  let component: FriengsComponent;
  let fixture: ComponentFixture<FriengsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriengsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriengsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
