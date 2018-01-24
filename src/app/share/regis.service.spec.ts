import { TestBed, inject } from '@angular/core/testing';

import { RegisService } from './regis.service';

describe('RegisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisService]
    });
  });

  it('should be created', inject([RegisService], (service: RegisService) => {
    expect(service).toBeTruthy();
  }));
});
