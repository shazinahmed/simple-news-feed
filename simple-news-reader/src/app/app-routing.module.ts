import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteValues } from './config/route-values.enum';


const routes: Routes = [
  {
    path: RouteValues.Home,
    loadChildren: () => import('./newsfeed/newsfeed.module').then(m => m.NewsfeedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
