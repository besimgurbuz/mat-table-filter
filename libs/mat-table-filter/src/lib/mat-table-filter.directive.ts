import {
  AfterViewInit,
  ContentChildren,
  Directive,
  Host,
  QueryList,
  Self,
} from '@angular/core';
import {MatTable} from '@angular/material/table';
import {Subscription, merge, of, switchMap} from 'rxjs';
import {MatTableFilterHeaderDirective} from './mat-table-filter-header.directive';

@Directive({
  selector: 'mat-table[matTableFilter],[mat-table][matTableFilter]',
})
export class MatTableFilterDirective implements AfterViewInit {
  @ContentChildren(MatTableFilterHeaderDirective)
  filterableHeaders!: QueryList<MatTableFilterHeaderDirective>;

  _filterChangeSubs?: Subscription;

  constructor(@Host() @Self() private _matTable: MatTable<unknown>) {}

  ngAfterViewInit(): void {
    this._filterChangeSubs = this.filterableHeaders.changes
      .pipe(
        switchMap((headers: QueryList<MatTableFilterHeaderDirective>) => {
          if (headers.length <= 0) return of();
          return merge(...headers.map((header) => header.selectedFilter$));
        })
      )
      .subscribe((selection) => {
        console.log(selection);
      });
  }
}
