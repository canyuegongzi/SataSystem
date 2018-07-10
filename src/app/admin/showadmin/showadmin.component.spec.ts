import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowadminComponent } from './showadmin.component';

describe('ShowadminComponent', () => {
  let component: ShowadminComponent;
  let fixture: ComponentFixture<ShowadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
