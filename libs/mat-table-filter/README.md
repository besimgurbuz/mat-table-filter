# ng-mat-table-filter

This library adds MatSort like column based filter functionality to [Angular Material MatTable component](https://material.angular.io/components/table/overview).

## How to use

Assuming your application is already up and running using Angular Material, you can add this library by following these steps:

1. Install `ng-mat-table-filter`:

   ```bash
   npm i ng-mat-table-filter
   ```

2. Import the `MatTableFilterModule` and add it to the module that declares your component:

   ```ts
   import {MatTableModule} from '@angular/material/table';
   import {MatTableFilterModule} from 'ng-mat-table-filter';

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

### Rendered template

As default `MatTableFilterComponent` using for filter triggerer. But you can give your custom components that extends `MatTableFilterTriggerer<T>` base class as well:

```ts
import {MatTableModule} from '@angular/material/table';
import {MAT_TABLE_TRIGGERER_TYPE, MatTableFilterSelection, MatTableFilterModule, MatTableFilterTriggerer} from 'ng-mat-table-filter';

@Component({
  /**/
})
class MyCustomComponent extends MatTableFilterTriggerer<MatTableFilterSelection> {}

@NgModule({
  declarations: [MyComponent],
  imports: [MatTableModule, MatTableFilterModule],
  providers: [
    {
      provide: MAT_TABLE_TRIGGERER_TYPE,
      useValue: Type<MyCustomComponent>,
    },
  ],
})
export class MyModule {}
```

### Header type

There are 3 different types of default `MatTableFilterButton`. `string`, `number` and `boolean`. By default every filter header directive type is `string`. You can define the type by giving `matTableFilterHeaderType` input to `mat-table-filter-header`;

```html
<ng-container matColumnDef="weight">
  <th mat-header-cell mat-table-filter-header matTableFilterHeaderType="number" *matHeaderCellDef>Weight</th>
  <td mat-cell *matCellDef="let element">{{ element.weight }}</td>
</ng-container>
<ng-container matColumnDef="learned">
  <th mat-header-cell mat-table-filter-header matTableFilterHeaderType="boolean" *matHeaderCellDef>Learned</th>
  <td mat-cell *matCellDef="let element">{{ element.learned ? 'Yes' : 'No' }}</td>
</ng-container>
```

[Live stackblitz demo](https://stackblitz.com/edit/stackblitz-starters-ptbjcs?file=src%2Fmain.html)
