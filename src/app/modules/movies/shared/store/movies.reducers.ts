import { Movies, Movie } from '../interfaces/movies';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import * as MoviesActions from './movies.actions';
import { act } from '@ngrx/effects';

export const MoviesFeatureKey = 'MoviesState';

export interface State extends EntityState<Movies> {
  loading: boolean;
  movie: Movie;
  loading_movie: boolean;
}

export function selectIdByExtract(extract: any) {
  return extract.id;
}

export const adapter: EntityAdapter<Movies> = createEntityAdapter<Movies>({
  selectId: selectIdByExtract,
});

export const initialState: State = adapter.getInitialState({
  loading: false,
  movie: {},
  loading_movie: false,
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

  on(MoviesActions.searchMovieById, (state) => {

    return ({
      ...state,
      ...{ loading_movie: true },
    });
  }),

  on(MoviesActions.searchMovieByIdFailure, (state) => {

    return ({
      ...state,
      ...{ loading_movie: false },
    });
  }),


  on(MoviesActions.searchMovieByIdSuccess, (state, action) => {
    debugger

    return ({
      ...state,
      ...{ loading_movie: false },
      ...{ movie: action.data }
    });
  }),

);


export function reducer(state: State | undefined, action: Action) {
  return MoviesReducer(state, action);
}
