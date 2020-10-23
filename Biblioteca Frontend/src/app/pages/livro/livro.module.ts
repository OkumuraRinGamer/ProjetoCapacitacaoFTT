import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { LivroRoutingModule } from './livro-routing.module';
import { LivroListComponent } from './list/livro-list.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LivroService } from './livro.service';



@NgModule({
  declarations: [LivroListComponent],
  imports: [
    CommonModule,
    LivroRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [LivroService],
})
export class LivroModule { }