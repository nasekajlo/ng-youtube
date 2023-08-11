import { Component } from '@angular/core';
import { Todo, TodosService } from '../share/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  title: string = ''

  constructor(private todosService: TodosService){

  }

  addTodo(){
    const todo: Todo ={
      title: this.title,
      id: Date.now(),
      completed:false,
      date: new Date()
    }
    this.todosService.addTodo(todo)
    this.title =''
  }
}
