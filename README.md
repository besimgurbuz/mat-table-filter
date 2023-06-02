# MatTableFilter

This library adds very flexible filter functionality to [MatTable component](https://material.angular.io/components/table/overview).

## How to use

Assuming your application is already up and running using Angular Material, you can add this library by following these steps:

1. Install `mat-table-filter`:

   ```bash
   npm i mat-table-filter
   ```

2. Import the `MatTableFilterModule` and add it to the module that declares your component:

   ```ts
   import {MatTableModule} from '@angular/material/table';
   import {MatTableFilterModule} from 'mat-table-filter';

   @NgModule({
     declarations: [MyComponent],
     imports: [MatTableModule, MatTableFilterModule],
   })
   export class MyModule {}
   ```

3. Use the directives in your component's template:

   ```html
   <table mat-table matTableFilter [dataSource]="dataSource">
     <ng-container matColumnDef="position">
       <th mat-header-cell mat-table-filter-header *matHeaderCellDef>No.</th>
       <td mat-cell *matCellDef="let data">{{data.position}}</td>
     </ng-container>

     <ng-container matColumnDef="name">
       <th mat-header-cell mat-table-filter-header *matHeaderCellDef>Name</th>
       <td mat-cell *matCellDef="let data">{{data.name}}</td>
     </ng-container>

     <tr mat-header-row *matHeaderRowDef="myColumns"></tr>
     <tr mat-row *matRowDef="let row; columns: myColumns;"></tr>
   </table>
   ```

### Using `mat-filter-table-header` with `mat-sort-header`

To use both `mat-filter-table-header` and `mat-sort-header` together:

```html
<ng-container matColumnDef="position">
  <th mat-header-cell mat-table-filter-header *matHeaderCellDef>
    <div mat-sort-header>No.</div>
  </th>
  <td mat-cell *matCellDef="let data">{{data.position}}</td>
</ng-container>
```
