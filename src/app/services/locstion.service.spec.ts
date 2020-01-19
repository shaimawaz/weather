import { TestBed } from '@angular/core/testing';

import { LocstionService } from './locstion.service';

describe('LocstionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocstionService = TestBed.get(LocstionService);
    expect(service).toBeTruthy();
  });
});
