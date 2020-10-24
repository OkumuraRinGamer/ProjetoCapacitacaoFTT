import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Estante from '../estante';
import { EstanteService } from '../estante.service';

@Component({
  selector: 'app-estante-form',
  templateUrl: './estante-form.component.html',
  styleUrls: ['./estante-form.component.css'],
})
export class EstanteFormComponent implements OnInit {
  constructor(
    private router: Router,
    private builder: FormBuilder,
    private estanteService: EstanteService,
    private activatedRoute: ActivatedRoute
  ) {}

  estanteForm: FormGroup;
  action: string;

  ngOnInit(): void {
    this.createForm();
    this.action = this.activatedRoute.snapshot.url[0].path;

    if (this.action == 'alterar') {
      this.setValue();
    }
  }

  setValue() {
    const id = this.activatedRoute.snapshot.url[1].path;
    this.estanteService
      .findById(Number(id))
      .subscribe((response) => this.estanteForm.patchValue(response));
  }

  createForm(): void {
    this.estanteForm = this.builder.group({
      id: null,
      nome: [null, [Validators.required, Validators.maxLength(120)]],
    });
  }

  onSave(value: Estante): void {
    if (this.estanteForm.invalid) {
      return;
    }

    console.log(value);
    this.estanteService
      .save(value)
      .subscribe((response) => this.router.navigate(['estante']));
  }

  onCancel(): void {
    this.router.navigate(['estante']);
  }
}
