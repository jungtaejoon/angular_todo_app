import { Component, OnInit } from '@angular/core';
import {Todo} from "../share/todo.model";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor() {
    this.todos = [
      {done : false, text : 'test'},
      {done : true, text : 'test2'}
    ];
  }
  toggleDone(todo) {
    todo.done = !todo.done;
  }
  addTodo(text) {
    this.todos.push({
      done: false,
      text: text
    });
  }
  ngOnInit() {
  }

}
