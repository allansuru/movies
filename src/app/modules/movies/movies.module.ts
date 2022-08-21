import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';

import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';

import { MatIconModule } from '@angular/material/icon';

import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { MoviesEffects } from './shared/store/movies.effects';
import { EffectsModule } from '@ngrx/effects';

import * as moviesReducers from './shared/store/movies.reducers';
import { MoviesTableComponent } from './movies-table/movies-table.component';
import { SpinnerModule } from '@core/layout/spinner/spinner.module';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MoviesSearchComponent } from './movies-search/movies-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { ContentCardModule } from '@core/layout/content-card/content-card.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MoviesRoutingModule,
    FlexLayoutModule,
    FlexModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    StoreModule.forFeature(
      moviesReducers.MoviesFeatureKey,
      moviesReducers.reducer
    ),
    EffectsModule.forFeature([MoviesEffects]),
    SpinnerModule,
    ContentCardModule,
    RouterModule,
  ],
  declarations: [MoviesComponent, MoviesTableComponent, MoviesSearchComponent, MoviesDetailComponent],

})
export class MoviesModule { }
