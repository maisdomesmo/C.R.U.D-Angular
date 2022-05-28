import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodolistComponent } from '../todolist/todolist.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input () todo!: Todo;

  @Output() remove = new EventEmitter;

  done = false;

  constructor(private todoList: TodolistComponent) { }

  ngOnInit(): void {
  }

  removeTodo():void{
    this.remove.emit(this.todo)
  }

  markAsDone():void{
    this.done = !this.done;
    this.todo.done=!this.todo.done
    this.storageTodo()
  }

  storageTodo() {
    this.todoList.storageTodos()
  }

}
