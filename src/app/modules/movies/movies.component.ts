import { Movies } from './shared/interfaces/movies';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { myAnimations } from '@core/animations';
import { MoviesApiService } from './shared/services/movies-api.service';
import { Store } from '@ngrx/store';
import { fetchMovies } from './shared/store/movies.actions';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  animations: myAnimations,
  encapsulation: ViewEncapsulation.None,
})
export class MoviesComponent implements OnInit {

  constructor(private moviesStore: Store<{ movies: Movies }>, ) { }

  ngOnInit() {
    this.fetchMyMovies();
  }

  private fetchMyMovies() {
    this.moviesStore.dispatch(fetchMovies())
  }

}
