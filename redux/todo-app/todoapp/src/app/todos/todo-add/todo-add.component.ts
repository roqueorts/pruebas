import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';
import { TodoModule } from '../todo.module';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [TodoModule],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent {
  txtInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('Hola', Validators.required);
  }

  ngOnInit(): void {
  }

  agregar() {

    if (this.txtInput.invalid) { return; }

    this.store.dispatch(actions.crear({ texto: this.txtInput.value }));

    this.txtInput.reset();
  }
}
