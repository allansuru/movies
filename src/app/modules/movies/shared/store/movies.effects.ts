import { Movie } from './../interfaces/movies';
import { MoviesApiService } from './../services/movies-api.service';
import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import {
  catchError,
  map,
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


  searchMovie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MoviesActions.searchMovie),
      switchMap((movie: any) =>
        this.moviesApiService.searchMovie(movie).pipe(map((data: any) =>
          MoviesActions.searchMovieSuccess({ data: data.results })
        ), catchError((error) => of(MoviesActions.searchMovieFailure(error))
        )
        )
      )
    );
  });


  getMovieById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MoviesActions.searchMovieById),
      switchMap((movie: any) =>
        this.moviesApiService.getMovieById(movie).pipe(map((data: Movie) =>
          MoviesActions.searchMovieByIdSuccess({ data })
        ), catchError((error) => of(MoviesActions.searchMovieByIdFailure(error))
        )
        )
      )
    );
  });


}
