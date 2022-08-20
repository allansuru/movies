
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Movies } from '../shared/interfaces/movies';
import { myAnimations } from '@core/animations';

@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.scss'],
  animations: myAnimations,
  encapsulation: ViewEncapsulation.None,
})
export class MoviesTableComponent implements OnInit {

  @Input() displayedColumns!: string[];
  @Input() data!: Movies[];

  constructor() { }

  ngOnInit() {

  }
  gotoDetail(item: any, event: Event) {
    event.preventDefault();
    event.stopImmediatePropagation();

  }


}
