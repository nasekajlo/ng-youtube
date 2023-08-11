import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { outputAst } from '@angular/compiler';
import { TodosService } from '../share/todos.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public  loading:boolean = true
  public searchString: string =''

  constructor(public todosService: TodosService){

  }

  ngOnInit(){
    this.todosService.fetchTodos()
    .pipe(delay(2000))
    .subscribe( () => {
      this.loading = false
    })
  }
  
  onChange(id: number){
    //this.onToggle.emit(id)
    this.todosService.onToggle(id)
  }

  removeTodo(id: number){
    this.todosService.removeTodo(id)
  }
}
