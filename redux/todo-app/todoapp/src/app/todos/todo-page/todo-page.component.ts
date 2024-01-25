import { Component } from '@angular/core';
import { TodoAddComponent } from '../todo-add/todo-add.component';
import { TodoFooterComponent } from '../todo-footer/todo-footer.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [TodoAddComponent, TodoFooterComponent, TodoListComponent],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent {


  toggleAll() {
    // this.completado = !this.completado;

    // this.store.dispatch( actions.toggleAll({ completado: this.completado }) );

  }


}
