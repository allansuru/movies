import { MoviesService } from './../shared/services/movies.service';

import { Component, OnInit, Input, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { Movies } from '../shared/interfaces/movies';
import { myAnimations } from '@core/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MoviesAction } from '../shared/enums/movies-action.enum';

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
  dataSource: MatTableDataSource<Movies> = new MatTableDataSource(this.data);

  constructor(private moviesService: MoviesService) { }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator

  }
  gotoDetailHandler(item: any, event: Event) {
    event.preventDefault();
    event.stopImmediatePropagation();

    this.moviesService.dispatchAction({
      action: MoviesAction.DETAIL,
      data: { id: item.id }
    })



  }


}
