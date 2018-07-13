import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidetoolsComponent } from './slidetools.component';

describe('SlidetoolsComponent', () => {
  let component: SlidetoolsComponent;
  let fixture: ComponentFixture<SlidetoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidetoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidetoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
