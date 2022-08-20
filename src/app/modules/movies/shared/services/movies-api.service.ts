import { Observable } from 'rxjs';
import { Movies } from './../interfaces/movies';
import { Injectable } from '@angular/core';
import { HttpApiService } from '@core/services/http-api.service';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  constructor(private httpApiService: HttpApiService) { }

  fetchMovies = (): Observable<Movies[]> =>
    this.httpApiService.get<Movies[]>(`movie/now_playing?api_key=${environment.api_key}`, null);


  searchMovie = ({ data }: any): Observable<Movies[]> =>
    this.httpApiService.get<Movies[]>(`search/movie?api_key=${environment.api_key}&language=en-US&page=1&include_adult=true&query=${data}`);


}
