import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-to-do',
  imports: [
    FormsModule
  ],
  templateUrl: './to-do.html',
  styleUrl: './to-do.css'
})
export class ToDo {
  toDoList: string[] = [];
  newTask: string = '';

  onInputChange(event: any) {
    this.newTask = event.target.value;
  }

  addToDo() {
    if (this.newTask === '')
      return;
    this.toDoList.push(this.newTask);
    this.newTask = '';
  }
}
