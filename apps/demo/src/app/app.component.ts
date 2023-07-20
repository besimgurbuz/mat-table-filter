import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ELEMENT_DATA} from './data';

@Component({
  selector: 'ng-mat-table-filter-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) matSort!: MatSort;
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'learned',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit(): void {
    this.dataSource.sort = this.matSort;
  }
}
