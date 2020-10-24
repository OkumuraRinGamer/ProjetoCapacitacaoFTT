import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Estante from './estante';

@Injectable({
  providedIn: 'root',
})
export class EstanteService {
  protected url = 'http://localhost:8080/estante';

  constructor(protected http: HttpClient) {}

  findAll(): Observable<Estante[]> {
    return this.http.get<Estante[]>(this.url);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  save(data: Estante): Observable<Estante> {
    if (data.id) {
      return this.http.put<Estante>(this.url, data);
    } else {
      return this.http.post<Estante>(this.url, data);
    }
  }

  findById(id: number): Observable<Estante> {
    return this.http.get<Estante>(`${this.url}/${id}`);
  }
}
