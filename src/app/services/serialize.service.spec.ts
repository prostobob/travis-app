import { TestBed } from '@angular/core/testing';

import { SerializeService } from './serialize.service';

describe('SerializeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SerializeService = TestBed.get(SerializeService);
    expect(service).toBeTruthy();
  });
});
