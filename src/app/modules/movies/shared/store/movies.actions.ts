import { createAction, props } from '@ngrx/store';

export const fetchMovies = createAction(
  '[MOVIES API] Load Now Playing'
);

export const fetchMoviesSuccess = createAction(
  '[MOVIES API] Load Now Playing Success',
  props<{ data: any }>()
);

export const fetchMoviesFailure = createAction(
  '[MOVIES API] Load Now Playing Failure',
  props<{ error: any }>()
);


export const loadMovies = createAction(
  '[MOVIES API] Loading..'
);
