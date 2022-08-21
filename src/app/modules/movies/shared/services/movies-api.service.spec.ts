/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MoviesApiService } from './movies-api.service';

describe('Service: MoviesApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesApiService]
    });
  });

  xit('should ...', inject([MoviesApiService], (service: MoviesApiService) => {
    expect(service).toBeTruthy();
  }));
});
