import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AibarComponent } from './aibar.component';

describe('AibarComponent', () => {
  let component: AibarComponent;
  let fixture: ComponentFixture<AibarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AibarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AibarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
