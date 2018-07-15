import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlTableComponent } from './tl-table.component';

describe('TlTableComponent', () => {
  let component: TlTableComponent;
  let fixture: ComponentFixture<TlTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
