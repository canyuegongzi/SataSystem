import { TestBed, inject } from '@angular/core/testing';

import { GetdataService } from './getdata.service';

describe('GetdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetdataService]
    });
  });

  it('should be created', inject([GetdataService], (service: GetdataService) => {
    expect(service).toBeTruthy();
  }));
});
