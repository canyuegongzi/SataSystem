import { TestBed, inject } from '@angular/core/testing';

import { LifeService } from './life.service';

describe('LifeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LifeService]
    });
  });

  it('should be created', inject([LifeService], (service: LifeService) => {
    expect(service).toBeTruthy();
  }));
});
