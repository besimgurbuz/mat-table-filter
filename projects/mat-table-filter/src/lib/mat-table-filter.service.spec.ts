import { TestBed } from '@angular/core/testing';

import { MatTableFilterService } from './mat-table-filter.service';

describe('MatTableFilterService', () => {
  let service: MatTableFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatTableFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
