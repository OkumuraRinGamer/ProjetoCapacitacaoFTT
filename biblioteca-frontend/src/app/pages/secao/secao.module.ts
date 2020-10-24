import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SecaoRoutingModule } from './secao-routing.module';
import { SecaoListComponent } from './list/secao-list.component';
import { SecaoService } from './secao.service';
import { SecaoFormComponent } from './form/secao-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [SecaoListComponent, SecaoFormComponent],
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
  providers: [SecaoService],
})
export class SecaoModule {}
