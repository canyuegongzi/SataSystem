import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordEditComponent } from './word-edit.component';

describe('WordEditComponent', () => {
  let component: WordEditComponent;
  let fixture: ComponentFixture<WordEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
