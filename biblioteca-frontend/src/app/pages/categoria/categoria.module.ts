import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaListComponent } from './list/categoria-list.component';
import { CategoriaService } from './categoria.service';
import { CategoriaFormComponent } from './form/categoria-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [CategoriaListComponent, CategoriaFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    CategoriaRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [CategoriaService],
})
export class CategoriaModule {}
