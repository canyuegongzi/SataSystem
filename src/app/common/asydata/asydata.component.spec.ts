import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsydataComponent } from './asydata.component';

describe('AsydataComponent', () => {
  let component: AsydataComponent;
  let fixture: ComponentFixture<AsydataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsydataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
