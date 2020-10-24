import { Routes } from '@angular/router';

export const CONTENT_ROUTE: Routes = [
  {
    path: 'livro',
    loadChildren: () =>
      import('../../pages/livro/livro.module').then((m) => m.LivroModule),
  },
  {
    path: 'categoria',
    loadChildren: () =>
      import('../../pages/categoria/categoria.module').then(
        (m) => m.CategoriaModule
      ),
  },
  {
    path: 'estante',
    loadChildren: () =>
      import('../../pages/estante/estante.module').then((m) => m.EstanteModule),
  },
  {
    path: 'secao',
    loadChildren: () =>
      import('../../pages/secao/secao.module').then((m) => m.SecaoModule),
  },
];
