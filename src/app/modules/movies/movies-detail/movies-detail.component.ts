import { selectMovieLoading } from './../shared/store/movies.selectors';
import { Observable } from 'rxjs';
import { Movie } from './../shared/interfaces/movies';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { searchMovieById } from '../shared/store/movies.actions';
import { selectMovie } from '../shared/store/movies.selectors';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MoviesDetailComponent implements OnInit {
  private id!: string;
  movie$!: Observable<Movie>
  loading$!: Observable<boolean>
  constructor(private activatedRoute: ActivatedRoute, private moviesStore: Store<{ movie: Movie }>) { }

  ngOnInit() {
    this.id = this.activatedRoute?.snapshot?.params?.['id'];
    this.initStore();
  }

  private initStore() {
    this.moviesStore.dispatch(searchMovieById({ data: this.id }))

    this.movie$ = this.moviesStore.pipe(select(selectMovie))
    this.loading$ = this.moviesStore.pipe(select(selectMovieLoading))
  }

}
