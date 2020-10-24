import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecaoFormComponent } from './form/secao-form.component';
import { SecaoListComponent } from './list/secao-list.component';

const routes: Routes = [
  {
    path: '',
    component: SecaoListComponent,
  },
  {
    path: 'cadastrar',
    component: SecaoFormComponent,
  },
  {
    path: 'alterar/:id',
    component: SecaoFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecaoRoutingModule {}
