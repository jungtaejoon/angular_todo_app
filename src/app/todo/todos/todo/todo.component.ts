import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../share/todo.model';

@Component({
  selector: 'app-todo',
  template: '<input type="checkbox" [checked]="todo.done"> {{todo.text}}',
  styleUrls: []
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  constructor() { }

  ngOnInit() {
  }

}
