import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatTableFilterHeader} from './mat-table-filter-header';

describe('MatTableFilterHeader', () => {
  let fixture: ComponentFixture<MatTableFilterHeader>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatTableFilterHeader],
    });

    fixture = TestBed.createComponent(MatTableFilterHeader);
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
  });
});
