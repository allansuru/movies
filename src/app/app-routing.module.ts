import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouteLinks } from '@core/enums/app-route-links.enum';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: AppRouteLinks.MOVIES },
  {
    path: AppRouteLinks.MOVIES,

    loadChildren: () =>
      import('./modules/movies/movies.module').then(m => m.MoviesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
