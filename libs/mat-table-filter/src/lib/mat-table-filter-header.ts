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
  MAT_TABLE_TRIGGERER_TYPE,
  MatTableTriggerer,
} from './mat-table-filter-triggerer';
import {MatTableDefaultFilterSelection} from './models';
import {MatTableHeaderType} from './models/header-type';
import { CaseSensitivityType } from './models/case-sensitivity';

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
  @Input({required: false}) isHeaderCaseSensitive : CaseSensitivityType =
    true;
  private triggererComponentType = inject(MAT_TABLE_TRIGGERER_TYPE);
  private triggererInstance?: MatTableTriggerer<MatTableDefaultFilterSelection>;

  @HostListener('mouseenter', ['$event'])
  handleMouseEnter() {
    if (this.triggererInstance) {
      this.triggererInstance.parentHovered = true;
    }
  }

  @HostListener('mouseleave', ['$event'])
  handleMouseLeave() {
    if (this.triggererInstance) {
      this.triggererInstance.parentHovered = false;
    }
  }

  @ViewChild('tableFilterTriggerer', {read: ViewContainerRef})
  triggererViewContainerRef!: ViewContainerRef;

  _triggererComponentRef!: ComponentRef<
    MatTableTriggerer<MatTableDefaultFilterSelection>
  >;

  ngAfterViewInit(): void {
    this._triggererComponentRef =
      this.triggererViewContainerRef.createComponent(
        this.triggererComponentType
      );
    this.triggererInstance = this._triggererComponentRef.instance;
    this.triggererInstance.headerType = this.matTableFilterHeaderType;
    this.triggererInstance.sensitivityType = this.isHeaderCaseSensitive;
  }

  get selectedFilter$(): Observable<MatTableDefaultFilterSelection> {
    return this._triggererComponentRef?.instance.selectedFilter$;
  }
}
