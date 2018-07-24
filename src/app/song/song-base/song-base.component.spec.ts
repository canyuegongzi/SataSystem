import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongBaseComponent } from './song-base.component';

describe('SongBaseComponent', () => {
  let component: SongBaseComponent;
  let fixture: ComponentFixture<SongBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
