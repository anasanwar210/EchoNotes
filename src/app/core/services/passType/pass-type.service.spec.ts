import { TestBed } from '@angular/core/testing';

import { PassTypeService } from './pass-type.service';

describe('PassTypeService', () => {
  let service: PassTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
