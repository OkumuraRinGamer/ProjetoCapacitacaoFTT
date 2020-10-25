import { Component, OnInit } from '@angular/core';
import Secao from '../secao';
import { SecaoService } from '../secao.service';

@Component({
  selector: 'app-secao-ver-estante',
  templateUrl: './secao-ver-estante.component.html',
  styleUrls: ['./secao-ver-estante.component.css'],
})
export class SecaoVerEstanteComponent implements OnInit {
  constructor(private secaoService: SecaoService) {}

  secoes: Secao[] = [];

  ngOnInit(): void {
    this.findAllSecoes();
  }

  findAllSecoes() {
    this.secaoService
      .findAll()
      .subscribe((response) => (this.secoes = response));
  }

  deleteById(id: number): void {
    this.secaoService.deleteById(id).subscribe(() => this.findAllSecoes());
  }
}
