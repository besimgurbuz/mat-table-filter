import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  HostBinding,
  Injector,
  OnInit,
  Renderer2,
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
  private renderer = inject(Renderer2);
  private elementRef = inject(ElementRef);
  // TODO: replace the depricated ComponentFacotryResolver with ViewContainerRef when hostElement option has released
  private componentFactoryResolver = inject(ComponentFactoryResolver);
  private injector = inject(Injector);
  private appRef = inject(ApplicationRef);
  private _triggererComponentType = inject(MAT_TABLE_TRIGGERER_TYPE);
  private _filterTriggererComponent?: ComponentRef<MatTableTriggerer<unknown>>;

  @HostBinding('class')
  _className = 'mat-table-filter-header';

  ngOnInit(): void {
    this._embedTriggerer();
  }

  get selectedFilter$(): Observable<unknown> {
    return of('filter');
  }

  private _embedTriggerer() {
    const container = this.renderer.createElement('div');
    this.renderer.setAttribute(
      container,
      'class',
      'mat-table-filter-header-container'
    );
    this.renderer.appendChild(this.elementRef.nativeElement, container);
    const triggerer = this.componentFactoryResolver.resolveComponentFactory(
      this._triggererComponentType
    );
    this._filterTriggererComponent = triggerer.create(
      this.injector,
      [],
      container
    );
    this.appRef.attachView(this._filterTriggererComponent.hostView);
  }
}
