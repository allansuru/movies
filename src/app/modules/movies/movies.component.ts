import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { myAnimations } from '@core/animations';
import { MoviesApiService } from './shared/services/movies-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  animations: myAnimations,
  encapsulation: ViewEncapsulation.None,
})
export class MoviesComponent implements OnInit {

  constructor(public moviesApiService: MoviesApiService) { }

  ngOnInit() {
    this.moviesApiService.fetchMovies().subscribe((teste: any) => {
      debugger
    })
  }

}
