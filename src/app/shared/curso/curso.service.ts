import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CursoService {

	public API = '//localhost:8080/api/v1/cursos';
  	

	constructor(private http: HttpClient) { 

	}

	getAll(): Observable<any> {
		return this.http.get(this.API);
	}

	get(id: string) {
    	return this.http.get(this.API + '/' + id);
  	}

  	save(curso: any): Observable<any> {
	    
	    let result: Observable<Object>;

	    if (curso.id) {
	      result = this.http.put(this.API + '/' + curso.id, curso);

	    } else {
	      result = this.http.post(this.API, curso);
	    }

	    return result;
	 }

	remove(id: string) {
		return this.http.delete(this.API + '/' + id);
	}

	search(nome: string) {
		return this.http.get(this.API + '/find?nome=' + nome);
	}

}
