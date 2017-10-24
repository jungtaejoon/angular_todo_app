import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: `
    <input type="text" placeholder="할 일 추가" [(ngModel)]="newText" (keydown)="checkKey($event)">
    <button (click)="addTodo(newText)">추가</button>
  `,
  styles: []
})
export class AddTodoComponent implements OnInit {
  @Output() onTodoAdded = new EventEmitter();
  newText = '';
  constructor() { }

  ngOnInit() {
  }
  checkKey(key) {
    if (key.key === 'Enter') {
      this.addTodo(this.newText);
    }
  }

  addTodo(text) {
    this.onTodoAdded.emit(text);
    this.newText = '';
  }

}
