import { Movies } from '../interfaces/movies';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import * as MoviesActions from './movies.actions';

export const MoviesFeatureKey = 'MoviesState';

export interface State extends EntityState<Movies> {
  loading: boolean;
  results: Movies[];
}

export function selectIdByExtract(extract: any) {
  return extract.id;
}

export const adapter: EntityAdapter<Movies> = createEntityAdapter<Movies>({
  selectId: selectIdByExtract,
});

export const initialState: State = adapter.getInitialState({
  loading: false,
  results: [],
});

export const { selectAll, selectEntities, selectIds, selectTotal } =
  adapter.getSelectors();

const MoviesReducer = createReducer(
  initialState,

  on(MoviesActions.fetchMovies, (state) => {

    return ({
      ...state,
      ...{ loading: true },
    });
  }),

  on(MoviesActions.fetchMoviesFailure, (state, action) => ({
    ...state,
    ...{ loading: false, },
  })),

  on(MoviesActions.fetchMoviesSuccess, (state, action) => {

    return adapter.setAll(action.data, {
      ...state,
      ...{ loading: false, },
    });
  }
  ),

  on(MoviesActions.searchMovie, (state) => {

    return ({
      ...state,
      ...{ loading: true },
    });
  }),

  on(MoviesActions.searchMovieFailure, (state, action) => ({
    ...state,
    ...{ loading: false, },
  })),

  on(MoviesActions.searchMovieSuccess, (state, action) => {

    return adapter.setAll(action.data, {
      ...state,
      ...{ loading: false, },
    });
  }
  ),

);


export function reducer(state: State | undefined, action: Action) {
  return MoviesReducer(state, action);
}
