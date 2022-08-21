import * as fromMovies from './movies.actions';

describe('Movies Actions', () => {
  it('should create an action', () => {
    const action = fromMovies.loadMovies();

    expect({ ...action }).toEqual({ type: '[MOVIES API] Loading..' });

  });
});
