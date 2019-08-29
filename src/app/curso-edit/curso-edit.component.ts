import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '../shared/curso/curso.service';
import { CategoriaService } from '../shared/categoria/categoria.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-curso-edit',
  templateUrl: './curso-edit.component.html',
  styleUrls: ['./curso-edit.component.css']
})
export class CursoEditComponent implements OnInit, OnDestroy  {

  curso: any = {};
  categorias: Array<any>;
  msg: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cursoService: CursoService,
              private categoriaService: CategoriaService) { 


  }

  ngOnInit() {

  	this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.cursoService.get(id).subscribe((curso: any) => {
          if (curso) {

            this.curso = curso;

          } else {
            console.log('Cusso não encontrado:' + '${id}');
            this.gotoList();
          }
        });
      }
    });

    this.categoriaService.getAll().subscribe(data => {
      this.categorias = data;
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/curso-list']);
  }

  save(form: NgForm) {
    this.cursoService.save(form).subscribe(result => {
      this.gotoList();

    }, obj => {
    	console.log(obj);
    	this.msg = obj;

    });
  }

  remove(href) {
    this.cursoService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  	compareObjects(o1: any, o2: any): boolean {

  	if(!o2){
  		return false;
  	}

 	 return o1.id === o2.id;
	}

}
