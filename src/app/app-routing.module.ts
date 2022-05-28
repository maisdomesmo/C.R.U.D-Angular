import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { BooksComponent } from './pages/books/books.component';

import { TodolistComponent } from './pages/todo/todolist/todolist.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'user',
    component: UsersListComponent
  },
  {
    path: 'form',
    component: UserFormComponent
  },
  {
    path: 'form/:id',
    component: UserFormComponent
  },
  {
    path: 'todo', component: TodolistComponent
  },
  {
    path: 'books', component: BooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
