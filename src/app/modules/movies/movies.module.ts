import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatIconModule } from '@angular/material/icon';

import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { MoviesEffects } from './shared/store/movies.effects';
import { EffectsModule } from '@ngrx/effects';

import * as moviesReducers from './shared/store/movies.reducers';
import { MoviesTableComponent } from './movies-table/movies-table.component';
import { SpinnerModule } from '@core/layout/spinner/spinner.module';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatSnackBarModule,
    StoreModule.forFeature(
      moviesReducers.MoviesFeatureKey,
      moviesReducers.reducer
    ),
    EffectsModule.forFeature([MoviesEffects]),
    SpinnerModule,

  ],
  declarations: [MoviesComponent, MoviesTableComponent],

})
export class MoviesModule { }
