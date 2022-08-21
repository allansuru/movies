import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMovies from './movies.reducers';

export const selectMoviesState = createFeatureSelector<fromMovies.State>(
  fromMovies.MoviesFeatureKey
);

export const selectMoviesLoading = createSelector(
  selectMoviesState,
  (state) => state.loading
);

export const selectMoviesEntities = createSelector(
  selectMoviesState,
  fromMovies.selectEntities
);

export const selectAllMovies = createSelector(selectMoviesState, state =>
  fromMovies.selectAll(state)
);

export const selectMovieLoading = createSelector(
  selectMoviesState,
  (state) => state.loading_movie
);

export const selectMovie = createSelector(
  selectMoviesState,
  (state) => state.movie
);
