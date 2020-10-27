import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SecaoRoutingModule } from './secao-routing.module';
import { SecaoListComponent } from './list/secao-list.component';
import { SecaoService } from './secao.service';
import { SecaoFormComponent } from './form/secao-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SecaoVerEstanteComponent } from './ver-estante/secao-ver-estante.component';

@NgModule({
  declarations: [
    SecaoListComponent,
    SecaoFormComponent,
    SecaoVerEstanteComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    SecaoRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [SecaoService],
})
export class SecaoModule {}
