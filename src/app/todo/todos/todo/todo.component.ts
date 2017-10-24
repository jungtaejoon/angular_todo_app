import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../share/todo.model';

@Component({
  selector: 'app-todo',
  template: '<input type="checkbox" [checked]="todo.done"> <label>{{todo.text}}</label>',
  styles: [`
    :host {
      display: block;
      padding: 16px;
      color: #343434;
      background-color: white;
    }
    input {
      position: relative;
    }
    input:before {
      content: '';
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      border: 1px solid dimgray;
      background-color: white;
      top: -6px;
      left: -8px;
      position: absolute;
    }
    input:checked:after {
      content: '\\2713';
      display: inline-block;
      font-size: 18px;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      border: 1px solid dimgray;
      background-color: dimgray;
      top: -6px;
      left: -8px;
      position: absolute;
      text-align: center;
      color: white;
    }
    input:checked + label {
      text-decoration: line-through;
      color: dimgray;
    }
  `]
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  constructor() { }

  ngOnInit() {
  }

}
