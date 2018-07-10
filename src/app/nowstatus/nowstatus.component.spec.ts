import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowstatusComponent } from './nowstatus.component';

describe('NowstatusComponent', () => {
  let component: NowstatusComponent;
  let fixture: ComponentFixture<NowstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
