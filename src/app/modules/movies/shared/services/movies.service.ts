import { Movies } from './../interfaces/movies';
import { Injectable } from '@angular/core';
import { ComponentEventHandler } from '@core/abstract-classes/component-event-handler/component-event-handler';
import { MoviesAction } from '../enums/movies-action.enum';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceextends extends ComponentEventHandler<
MoviesAction,
Movies
> {
  constructor() {
    super();
  }

}
