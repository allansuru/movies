import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatIconModule } from '@angular/material/icon';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    HttpClientModule,
    MatSnackBarModule,

  ],
  declarations: [MoviesComponent],

})
export class MoviesModule { }
