import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { LivroRoutingModule } from './livro-routing.module';
import { LivroComponent } from './livro.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [LivroComponent],
  imports: [CommonModule, LivroRoutingModule, MatCardModule],
  providers: [],
})
export class LivroModule { }