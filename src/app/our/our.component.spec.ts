import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurComponent } from './our.component';

describe('OurComponent', () => {
  let component: OurComponent;
  let fixture: ComponentFixture<OurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
