import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EstanteRoutingModule } from './estante-routing.module';
import { EstanteListComponent } from './list/estante-list.component';
import { EstanteService } from './estante.service';
import { EstanteFormComponent } from './form/estante-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [EstanteListComponent, EstanteFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    EstanteRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [EstanteService],
})
export class EstanteModule {}
