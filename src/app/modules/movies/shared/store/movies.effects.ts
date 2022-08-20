import { MoviesApiService } from './../services/movies-api.service';
import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import {
  catchError,
  exhaustMap,
  filter,
  map,
  mergeMap,
  switchMap,
  tap,
} from 'rxjs/operators';

import * as MoviesActions from './movies.actions';
import { Movies } from '../interfaces/movies';


@Injectable()
export class MoviesEffects {
  constructor(
    private actions$: Actions,
    private moviesApiService: MoviesApiService
  ) { }

  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MoviesActions.fetchMovies),
      switchMap(() =>
        this.moviesApiService.fetchMovies().pipe(
          map((data: any) =>
            MoviesActions.fetchMoviesSuccess({ data: data.results })
          ),
          catchError((error) =>
            of(MoviesActions.fetchMoviesFailure(error))
          )
        )
      )
    );
  });


}
