import {
  AfterViewInit,
  ContentChildren,
  Directive,
  Input,
  QueryList,
  inject,
} from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {Subscription, merge, of, switchMap} from 'rxjs';
import {MatTableFilterHeader} from './mat-table-filter-header';
import {MatTableFilterService} from './services/mat-table-filter.service';

@Directive({
  selector: 'mat-table[matTableFilter],[mat-table][matTableFilter]',
  providers: [MatTableFilterService],
})
export class MatTableFilterDirective implements AfterViewInit {
  private filterService = inject(MatTableFilterService);
  private _matTable = inject(MatTable, {host: true, self: true});

  @Input()
  matTableFilterPredicate?: MatTableDataSource<
    Record<string, unknown>
  >['filterPredicate'];

  @ContentChildren(MatTableFilterHeader)
  filterableHeaders!: QueryList<MatTableFilterHeader>;

  _filterChangeSubs?: Subscription;

  ngAfterViewInit(): void {
    this._setupFilter();
    this._filterChangeSubs = this.filterableHeaders.changes
      .pipe(
        switchMap((headers: QueryList<MatTableFilterHeader>) => {
          if (headers.length <= 0) return of();
          return merge(...headers.map((header) => header.selectedFilter$));
        })
      )
      .subscribe((selection) => {
        this.filterService.updateFilter(selection);
        (
          this._matTable.dataSource as MatTableDataSource<
            Record<string, unknown>
          >
        ).filter = JSON.stringify(this.filterService.currentFilters);
      });
  }

  private _setupFilter(): void {
    (
      this._matTable.dataSource as MatTableDataSource<Record<string, unknown>>
    ).filterPredicate =
      this.matTableFilterPredicate || this.filterService.defaultFilterPredicate;
  }
}
