import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriaRoutingModule } from './categoria-routing.module';

import { MatCardModule } from '@angular/material/card';
import { CategoriaListComponent } from './list/categoria-list.component';

@NgModule({
  declarations: [CategoriaListComponent],
  imports: [CommonModule, CategoriaRoutingModule, MatCardModule],
  providers: [],
})
export class CategoriaModule {}
