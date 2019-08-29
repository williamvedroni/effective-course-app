import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoriaService {

  
  public CATEGORIA_API = '//localhost:8080/api/v1/categorias';

  constructor(public http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.CATEGORIA_API);
  }
}