import { TestBed, inject } from '@angular/core/testing';

import { EditunsaveService } from './editunsave.service';

describe('EditunsaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditunsaveService]
    });
  });

  it('should be created', inject([EditunsaveService], (service: EditunsaveService) => {
    expect(service).toBeTruthy();
  }));
});
