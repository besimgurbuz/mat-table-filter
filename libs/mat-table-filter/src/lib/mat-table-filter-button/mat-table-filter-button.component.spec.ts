import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatTableFilterButtonComponent} from './mat-table-filter-button.component';

describe('MatTableFilterButtonComponent', () => {
  let component: MatTableFilterButtonComponent;
  let fixture: ComponentFixture<MatTableFilterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTableFilterButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MatTableFilterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
