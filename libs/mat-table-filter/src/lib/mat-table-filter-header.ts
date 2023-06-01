/* eslint-disable @angular-eslint/component-class-suffix */
import {
  AfterViewInit,
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';
import {Observable} from 'rxjs';
import {
  MAT_TABLE_TRIGGERER_TYPE,
  MatTableTriggerer,
} from './mat-table-filter-triggerer';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[mat-table-filter-header],mat-table-filter-header',
  exportAs: 'matTableFilterHeader',
  templateUrl: './mat-table-filter-header.html',
  styleUrls: ['./mat-table-filter-header.scss'],
})
export class MatTableFilterHeader implements AfterViewInit {
  private triggererComponentType = inject(MAT_TABLE_TRIGGERER_TYPE);

  @ViewChild('tableFilterTriggerer', {read: ViewContainerRef})
  triggererViewContainerRef!: ViewContainerRef;

  _triggererComponentRef!: ComponentRef<MatTableTriggerer<unknown>>;

  ngAfterViewInit(): void {
    this._triggererComponentRef =
      this.triggererViewContainerRef.createComponent(
        this.triggererComponentType
      );
  }

  get selectedFilter$(): Observable<unknown> {
    return this._triggererComponentRef?.instance.selectedFilter$;
  }
}
