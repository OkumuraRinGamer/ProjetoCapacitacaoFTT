import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Categoria from '../../categoria/categoria';
import { CategoriaService } from '../../categoria/categoria.service';
import Estante from '../../estante/estante';
import { EstanteService } from '../../estante/estante.service';
import Livro from '../livro';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrls: ['./livro-form.component.css'],
})
export class LivroFormComponent implements OnInit {
  constructor(
    private router: Router,
    private builder: FormBuilder,
    private livroService: LivroService,
    private categoriaService: CategoriaService,
    private estanteService: EstanteService,
    private activatedRoute: ActivatedRoute
  ) {}

  livroForm: FormGroup;
  categorias: Categoria[] = [];
  estantes: Estante[] = [];
  action: string;

  ngOnInit(): void {
    this.createForm();
    this.findAllCategorias();
    this.findAllEstantes();
    this.action = this.activatedRoute.snapshot.url[0].path;

    if (this.action == 'alterar') {
      this.setValue();
    }
  }

  setValue() {
    const id = this.activatedRoute.snapshot.url[1].path;
    this.livroService
      .findById(Number(id))
      .subscribe((response) => this.livroForm.patchValue(response));
  }

  createForm(): void {
    this.livroForm = this.builder.group({
      id: null,
      titulo: [null, [Validators.required, Validators.maxLength(120)]],
      autor: [null, [Validators.required, Validators.maxLength(120)]],
      isbn: [
        null,
        [
          Validators.required,
          Validators.maxLength(13),
          Validators.minLength(13),
        ],
      ],
      categoria: null,
      estante: null,
    });
  }

  findAllCategorias() {
    this.categoriaService.findAll().subscribe((response) => {
      this.categorias = response;
      if (this.action == 'alterar') {
        this.setValue();
      }
    });
  }

  findAllEstantes() {
    this.estanteService.findAll().subscribe((response) => {
      this.estantes = response;
      if (this.action == 'alterar') {
        this.setValue();
      }
    });
  }

  onlyNumbers(event): void {
    const { value } = event.target;
    this.livroForm.get('isbn').setValue(value.replace(/\D/g, ''));
  }

  onSave(value: Livro): void {
    if (this.livroForm.invalid) {
      return;
    }

    console.log(value);
    this.livroService
      .save(value)
      .subscribe((response) => this.router.navigate(['livro']));
  }

  onCancel(): void {
    this.router.navigate(['livro']);
  }
}
