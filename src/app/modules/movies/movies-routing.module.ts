import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';

const routes: Routes = [

  {
    path: '',
    component: MoviesComponent,
  },
  {
    path: ':id',
    component: MoviesDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
