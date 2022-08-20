import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FlexLayoutModule
  ],
  declarations: [MoviesComponent]
})
export class MoviesModule { }
