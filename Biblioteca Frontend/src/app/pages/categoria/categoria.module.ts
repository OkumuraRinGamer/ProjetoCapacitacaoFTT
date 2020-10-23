import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaComponent } from './categoria.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CategoriaComponent],
  imports: [CommonModule, CategoriaRoutingModule, MatCardModule],
  providers: [],
})
export class CategoriaModule { }