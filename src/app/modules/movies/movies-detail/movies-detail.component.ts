import { Movie } from './../shared/interfaces/movies';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { searchMovieById } from '../shared/store/movies.actions';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.scss']
})
export class MoviesDetailComponent implements OnInit {
  private id!: string;
  constructor(private activatedRoute: ActivatedRoute, private moviesStore: Store<{ movie: Movie }>) { }

  ngOnInit() {
    this.id = this.activatedRoute?.snapshot?.params?.['id'];
    this.initStore();
  }

  private initStore() {
    this.moviesStore.dispatch(searchMovieById({ data: this.id }))
  }

}
