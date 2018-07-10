import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResdataComponent } from './resdata.component';

describe('ResdataComponent', () => {
  let component: ResdataComponent;
  let fixture: ComponentFixture<ResdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
