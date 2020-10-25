import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstanteFormComponent } from './form/estante-form.component';
import { EstanteListComponent } from './list/estante-list.component';
import { EstanteVerLivroComponent } from './ver-livro/estante-ver-livro.component';

const routes: Routes = [
  {
    path: '',
    component: EstanteListComponent,
  },
  {
    path: 'cadastrar',
    component: EstanteFormComponent,
  },
  {
    path: 'alterar/:id',
    component: EstanteFormComponent,
  },
  {
    path: 'ver-livros/:id',
    component: EstanteVerLivroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstanteRoutingModule {}
