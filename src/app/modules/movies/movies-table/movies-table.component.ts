
import { Component, OnInit, Input, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { Movies } from '../shared/interfaces/movies';
import { myAnimations } from '@core/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.scss'],
  animations: myAnimations,
  encapsulation: ViewEncapsulation.None,
})
export class MoviesTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() displayedColumns!: string[];
  @Input() data!: Movies[];
  dataSource!: MatTableDataSource<Movies>;

  constructor() { }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator

  }
  gotoDetail(item: any, event: Event) {
    event.preventDefault();
    event.stopImmediatePropagation();

  }


}
