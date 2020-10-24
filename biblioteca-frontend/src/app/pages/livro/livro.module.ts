import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LivroRoutingModule } from './livro-routing.module';
import { LivroListComponent } from './list/livro-list.component';
import { LivroService } from './livro.service';
import { LivroFormComponent } from './form/livro-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriaService } from '../categoria/categoria.service';
import { EstanteService } from '../estante/estante.service';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [LivroListComponent, LivroFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    LivroRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [LivroService, CategoriaService, EstanteService],
})
export class LivroModule {}
