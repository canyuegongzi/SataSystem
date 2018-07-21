import { TestBed, inject } from '@angular/core/testing';

import { HomeotherService } from './homeother.service';

describe('HomeotherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeotherService]
    });
  });

  it('should be created', inject([HomeotherService], (service: HomeotherService) => {
    expect(service).toBeTruthy();
  }));
});
