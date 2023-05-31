import {Component} from '@angular/core';
import {MatTableTriggerer} from '../mat-table-filter-triggerer';
import {MatTableDefaultFilterSelection} from '../models/filter-selection';

@Component({
  selector: 'mat-table-filter-button',
  templateUrl: './mat-table-filter-button.component.html',
  styleUrls: ['./mat-table-filter-button.component.scss'],
})
export class MatTableFilterButtonComponent extends MatTableTriggerer<MatTableDefaultFilterSelection> {}
