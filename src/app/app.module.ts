import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule, 
		 MatCardModule, MatInputModule, MatListModule, 
		 MatToolbarModule, MatDatepickerModule, 
		 MatNativeDateModule,
		 MatTableModule } from '@angular/material';

import {MatSelectModule} from '@angular/material/select';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CursoService } from './shared/curso/curso.service';
import { CategoriaService } from './shared/categoria/categoria.service';
import { HttpClientModule } from '@angular/common/http';
import { CursoListComponent } from './curso-list/curso-list.component';
import { CursoEditComponent } from './curso-edit/curso-edit.component';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/curso-list', pathMatch: 'full' },
  {
    path: 'curso-list',
    component: CursoListComponent
  },
  {
    path: 'curso-add',
    component: CursoEditComponent
  },
  {
    path: 'curso-edit/:id',
    component: CursoEditComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    CursoListComponent,
    CursoEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    MatTableModule,
    MatSelectModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CursoService, CategoriaService, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
