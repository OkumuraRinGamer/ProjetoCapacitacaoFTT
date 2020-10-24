import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Secao from './secao';

@Injectable({
  providedIn: 'root',
})
export class SecaoService {
  protected url = 'http://localhost:8080/secao';

  constructor(protected http: HttpClient) {}

  findAll(): Observable<Secao[]> {
    return this.http.get<Secao[]>(this.url);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  save(data: Secao): Observable<Secao> {
    if (data.id) {
      return this.http.put<Secao>(this.url, data);
    } else {
      return this.http.post<Secao>(this.url, data);
    }
  }

  findById(id: number): Observable<Secao> {
    return this.http.get<Secao>(`${this.url}/${id}`);
  }
}
