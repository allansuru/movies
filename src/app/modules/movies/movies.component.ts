import { Observable } from 'rxjs';
import { Movies } from './shared/interfaces/movies';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { myAnimations } from '@core/animations';
import { Store, select } from '@ngrx/store';
import { fetchMovies } from './shared/store/movies.actions';
import { MoviesService } from './shared/services/movies.service';
import { selectMoviesLoading, selectMoviesEntities, selectAllMovies } from './shared/store/movies.selectors';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  animations: myAnimations,
  encapsulation: ViewEncapsulation.None,
})
export class MoviesComponent implements OnInit {
  movies$!: Observable<any>;
  loading$!: Observable<boolean>;

  constructor(private moviesStore: Store<{ movies: Movies }>, public moviesService: MoviesService) { }

  ngOnInit() {
    this.fetchMyMovies();
    this.privateInitStore();
  }

  private fetchMyMovies() {
    this.moviesStore.dispatch(fetchMovies())
  }

  privateInitStore() {
    this.loading$ = this.moviesStore.pipe(select(selectMoviesLoading));
    this.movies$ = this.moviesStore.pipe(select(selectAllMovies));
  }

}
