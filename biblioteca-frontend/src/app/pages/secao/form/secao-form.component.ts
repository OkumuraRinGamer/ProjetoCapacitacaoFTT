import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Secao from '../secao';
import { SecaoService } from '../secao.service';

@Component({
  selector: 'app-secao-form',
  templateUrl: './secao-form.component.html',
  styleUrls: ['./secao-form.component.css'],
})
export class SecaoFormComponent implements OnInit {
  constructor(
    private router: Router,
    private builder: FormBuilder,
    private secaoService: SecaoService,
    private activatedRoute: ActivatedRoute
  ) {}

  secaoForm: FormGroup;
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
    this.secaoService
      .findById(Number(id))
      .subscribe((response) => this.secaoForm.patchValue(response));
  }

  createForm(): void {
    this.secaoForm = this.builder.group({
      id: null,
      nome: [null, [Validators.required, Validators.maxLength(120)]],
    });
  }

  onSave(value: Secao): void {
    if (this.secaoForm.invalid) {
      return;
    }

    console.log(value);
    this.secaoService
      .save(value)
      .subscribe((response) => this.router.navigate(['secao']));
  }

  onCancel(): void {
    this.router.navigate(['secao']);
  }
}
