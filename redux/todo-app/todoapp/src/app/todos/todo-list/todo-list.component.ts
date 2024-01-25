import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { filtrosValidos } from '../../filtro/filtro.actions';
import { Todo } from '../models/todo.model';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoModule } from '../todo.module';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtroActual!: filtrosValidos;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('todos')
      .subscribe(todos => this.todos = todos);
    /* this.store.subscribe( ({ todos, filtro }) => {
 
       this.todos        = todos;
       this.filtroActual = filtro;
 
     });*/

  }
}
