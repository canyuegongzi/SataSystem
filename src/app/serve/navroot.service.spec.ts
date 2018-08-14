import { TestBed, inject } from '@angular/core/testing';

import { NavrootService } from './navroot.service';

describe('NavrootService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavrootService]
    });
  });

  it('should be created', inject([NavrootService], (service: NavrootService) => {
    expect(service).toBeTruthy();
  }));
});
