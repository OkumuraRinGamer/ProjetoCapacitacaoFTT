import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layouts/content-layout.component';
import { CONTENT_ROUTE } from './shared/routes/content-routes.routes';


const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: CONTENT_ROUTE,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
