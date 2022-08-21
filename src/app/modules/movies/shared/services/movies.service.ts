import { Injectable } from '@angular/core';
import { ComponentEventHandler } from '@core/abstract-classes/component-event-handler/component-event-handler';
import { MoviesAction } from '../enums/movies-action.enum';

@Injectable({
  providedIn: 'root'
})
export class MoviesService extends ComponentEventHandler<
MoviesAction,
any
> {

  tableDisplayedColumns: string[] = [
    'backdrop_path',
    'original_title',
    'overview',
    'release_date',
    'vote_average',
  ];

  constructor() {
    super();
  }

}
