import { MoviesAction } from './shared/enums/movies-action.enum';
import { Observable, Subject } from 'rxjs';
import { Movies } from './shared/interfaces/movies';
import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { myAnimations } from '@core/animations';
import { Store, select } from '@ngrx/store';
import { fetchMovies, searchMovie } from './shared/store/movies.actions';
import { MoviesService } from './shared/services/movies.service';
import { selectMoviesLoading, selectMoviesEntities, selectAllMovies } from './shared/store/movies.selectors';
import { ComponentEvent } from '@core/abstract-classes/component-event-handler/component-event';
import { filter, pluck, tap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  animations: myAnimations,
  encapsulation: ViewEncapsulation.None,
})
export class MoviesComponent implements OnInit, OnDestroy {
  movies$!: Observable<any>;
  loading$!: Observable<boolean>;
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(private moviesStore: Store<{ movies: Movies }>, public moviesService: MoviesService) { }

  ngOnInit() {

    this.childrenListner();
    this.fetchMyMovies();
    this.initStore();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  private fetchMyMovies() {
    this.moviesStore.dispatch(fetchMovies())
  }

  private initStore() {
    this.loading$ = this.moviesStore.pipe(select(selectMoviesLoading));
    this.movies$ = this.moviesStore.pipe(select(selectAllMovies));
  }


  private childrenListner() {
    this.moviesService.onEvent
      .pipe(takeUntil(this.onDestroy$), tap((event) => {
        this.childComponentsActionReducer(event);
      }))
      .subscribe();
  }


  private childComponentsActionReducer(
    event: ComponentEvent<MoviesAction, any>
  ) {

    switch (event.action) {
      case MoviesAction.FETCH:
        this.fetchMyMovies();
        break;
      case MoviesAction.SEARCH:
        this.moviesStore.dispatch(searchMovie({ data: event.data }))
        break;

      default:
        break;
    }
  }

}
