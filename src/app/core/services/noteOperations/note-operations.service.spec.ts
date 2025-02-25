import { TestBed } from '@angular/core/testing';

import { NoteOperationsService } from './note-operations.service';

describe('NoteOperationsService', () => {
  let service: NoteOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
