import * as fromMoviesReducers from './movies.reducers';
import * as fromMoviesActions from './movies.actions';

describe('MoviesReducer', () => {
  describe('loadMovies', () => {
    it('should loadMovies', () => {
      const { initialState } = fromMoviesReducers;
      const action = fromMoviesActions.loadMovies;
      const state = fromMoviesReducers.reducer(initialState, action);

      expect(state.loading).toEqual(false);

    });
  });
});
