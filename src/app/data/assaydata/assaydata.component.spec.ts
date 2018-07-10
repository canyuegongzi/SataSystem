import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssaydataComponent } from './assaydata.component';

describe('AssaydataComponent', () => {
  let component: AssaydataComponent;
  let fixture: ComponentFixture<AssaydataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssaydataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssaydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
