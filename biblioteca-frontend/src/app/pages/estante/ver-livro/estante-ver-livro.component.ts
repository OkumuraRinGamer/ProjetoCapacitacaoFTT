import { Component, OnInit } from '@angular/core';
import Estante from '../estante';
import { EstanteService } from '../estante.service';

@Component({
  selector: 'app-estante-ver-livro',
  templateUrl: './estante-ver-livro.component.html',
  styleUrls: ['./estante-ver-livro.component.css'],
})
export class EstanteVerLivroComponent implements OnInit {
  constructor(private estanteService: EstanteService) {}

  estantes: Estante[] = [];

  ngOnInit(): void {
    this.findAllEstantes();
  }

  findAllEstantes() {
    this.estanteService
      .findAll()
      .subscribe((response) => (this.estantes = response));
  }

  deleteById(id: number): void {
    this.estanteService.deleteById(id).subscribe(() => this.findAllEstantes());
  }
}
