/* eslint-disable @angular-eslint/component-class-suffix */
import {
  AfterViewInit,
  Component,
  ComponentRef,
  HostListener,
  Input,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';
import {Observable} from 'rxjs';
import {
  MAT_TABLE_FILTER_TRIGGERER_TYPE,
  MatTableFilterTriggerer,
} from './mat-table-filter-triggerer';
import {MatTableFilterSelection} from './models';
import {MatTableHeaderType} from './models/header-type';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[mat-table-filter-header],mat-table-filter-header',
  exportAs: 'matTableFilterHeader',
  templateUrl: './mat-table-filter-header.html',
  styleUrls: ['./mat-table-filter-header.scss'],
})
export class MatTableFilterHeader implements AfterViewInit {
  @Input({required: false}) matTableFilterHeaderType: MatTableHeaderType =
    'string';
  private triggererComponentType = inject(MAT_TABLE_FILTER_TRIGGERER_TYPE);
  private triggererInstance?: MatTableFilterTriggerer<MatTableFilterSelection>;

  @HostListener('mouseenter', ['$event'])
  handleMouseEnter() {
    if (this.triggererInstance) {
      this.triggererInstance.parentHovered.set(true);
    }
  }

  @HostListener('mouseleave', ['$event'])
  handleMouseLeave() {
    if (this.triggererInstance) {
      this.triggererInstance.parentHovered.set(false);
    }
  }

  @ViewChild('tableFilterTriggerer', {read: ViewContainerRef})
  triggererViewContainerRef!: ViewContainerRef;

  _triggererComponentRef!: ComponentRef<
    MatTableFilterTriggerer<MatTableFilterSelection>
  >;

  ngAfterViewInit(): void {
    this._triggererComponentRef =
      this.triggererViewContainerRef.createComponent(
        this.triggererComponentType
      );
    this.triggererInstance = this._triggererComponentRef.instance;
    this.triggererInstance.headerType = this.matTableFilterHeaderType;
  }

  get selectedFilter$(): Observable<MatTableFilterSelection> {
    return this._triggererComponentRef?.instance.selectedFilter$;
  }
}
