import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapdataComponent } from './mapdata.component';

describe('MapdataComponent', () => {
  let component: MapdataComponent;
  let fixture: ComponentFixture<MapdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
