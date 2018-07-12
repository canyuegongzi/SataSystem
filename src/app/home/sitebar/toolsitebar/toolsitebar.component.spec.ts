import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsitebarComponent } from './toolsitebar.component';

describe('ToolsitebarComponent', () => {
  let component: ToolsitebarComponent;
  let fixture: ComponentFixture<ToolsitebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsitebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsitebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
