import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableFilterComponent } from './mat-table-filter.component';

describe('MatTableFilterComponent', () => {
  let component: MatTableFilterComponent;
  let fixture: ComponentFixture<MatTableFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatTableFilterComponent]
    });
    fixture = TestBed.createComponent(MatTableFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
