import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { EstanteRoutingModule } from './estante-routing.module';
import { EstanteListComponent } from './list/estante-list.component';
import { EstanteService } from './estante.service';
import { EstanteFormComponent } from './form/estante-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SecaoService } from '../secao/secao.service';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EstanteVerLivroComponent } from './ver-livro/estante-ver-livro.component';

@NgModule({
  declarations: [
    EstanteListComponent,
    EstanteFormComponent,
    EstanteVerLivroComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    EstanteRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [EstanteService, SecaoService],
})
export class EstanteModule {}
