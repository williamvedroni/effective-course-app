import { Component, OnInit } from '@angular/core';
import { CursoService } from '../shared/curso/curso.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})

export class CursoListComponent implements OnInit {

  cursos: Array<any>;
  filtro: any = {nome: ''};

  displayedColumns: string[] = ['nome', 'inicio', 'termino', 'alunos', 'categoria'];

  constructor(private cursoService: CursoService) { }

  ngOnInit() {

  	this.cursoService.getAll().subscribe(data => {
      this.cursos = data;
    });
  }


  search() {
    this.cursoService.search(this.filtro.nome).subscribe(data => {
       this.cursos = data;
    });
  }

}
