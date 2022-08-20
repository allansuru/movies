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


export const selectAllMovies = createSelector(selectMoviesState, state => {
  return fromMovies.selectAll(state);
});
