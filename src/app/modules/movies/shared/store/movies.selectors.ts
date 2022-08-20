import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMovies from './movies.reducers';

export const selectMoviesState = createFeatureSelector<fromMovies.State>(
  fromMovies.MoviesFeatureKey
);

export const selectSaldoExtratoLoading = createSelector(
  selectMoviesState,
  (state) => state.loading
);

export const selectExtractEntities = createSelector(
  selectMoviesState,
  fromMovies.selectEntities
);
