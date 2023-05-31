import {
  ComponentRef,
  Directive,
  ElementRef,
  HostBinding,
  OnInit,
  Renderer2,
  ViewContainerRef,
  inject,
} from '@angular/core';
import {Observable, of} from 'rxjs';
import {
  MAT_TABLE_TRIGGERER_TYPE,
  MatTableTriggerer,
} from './mat-table-filter-triggerer';

@Directive({
  selector:
    'th[mat-table-filter-header],mat-header-cell[mat-table-filter-header]',
  standalone: true,
})
export class MatTableFilterHeaderDirective implements OnInit {
  private _triggererComponentType = inject(MAT_TABLE_TRIGGERER_TYPE);
  private renderer = inject(Renderer2);
  private elementRef = inject(ElementRef);
  private viewContainerRef = inject(ViewContainerRef);

  private _filterTriggererComponent?: ComponentRef<MatTableTriggerer<unknown>>;

  @HostBinding('class')
  _className = 'mat-table-filter-header';

  ngOnInit(): void {
    this.viewContainerRef.createComponent(this._triggererComponentType, {});
  }

  get selectedFilter$(): Observable<unknown> {
    return of('filter');
  }
}
