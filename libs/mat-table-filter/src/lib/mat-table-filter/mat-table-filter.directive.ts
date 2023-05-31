import { Directive, Host, Self } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Directive({
  selector: 'mat-table[mat-table-filter],[mat-table][mat-table-filter]',
  standalone: true,
})
export class MatTableFilterDirective {
  constructor(@Host() @Self() private _matTable: MatTable<unknown>) {
    console.log('mat-table-filter: injected');
  }
}
