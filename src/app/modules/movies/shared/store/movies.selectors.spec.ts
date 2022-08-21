import * as fromMoviesExtratoSelectors from './movies.selectors';


describe('Selectors SaldoExtrato', () => {
  const initialState = {
    loading: false,
  };


  it('should select select loading from movies', () => {
    const result = fromMoviesExtratoSelectors.selectMoviesLoading.projector(initialState.loading);

    expect(result).toBeUndefined();
  });

});
