import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todos: Array<Todo> = [];

  constructor() { }

  ngOnInit(): void {
    let items :any = localStorage.getItem('todos')
    let todos = JSON.parse(items)
    if (!todos) {
      this.todos = []
    } else {
      this.todos = todos
    }
  }

  addTodo(title: string){
    if (title) {
      const id = this.todos.length + 1;
      this.todos.push(new Todo(id, title, false))
      console.log(this.todos);
      this.storageTodos()
    }
  }

  storageTodos(){
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  removeTodo(todo: any) {
    let index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
    this.storageTodos()
  }

}
