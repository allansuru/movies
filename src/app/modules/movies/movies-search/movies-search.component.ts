import { MoviesAction } from './../shared/enums/movies-action.enum';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MoviesService } from '../shared/services/movies.service';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MoviesSearchComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private moviesService: MoviesService) { }

  get title() {
    return this.form.get('title')?.value
  }

  ngOnInit() {
    this.initForm();
  }

  resetHandler() {
    this.form.reset()
    this.moviesService.dispatchAction({
      action: MoviesAction.FETCH,
    });
  }

  searchHandler() {

    this.moviesService.dispatchAction({
      action: MoviesAction.SEARCH,
      data: this.title,
    });
  }


  private initForm(): void {
    this.form = this.formBuilder.group({
      title: [null]
    });
  }

}
