import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear } from './todo.actions';

export const initialState: Todo[] = [
    new Todo('Primer todo'),
    new Todo('Comprar café'),
    new Todo('regar planta'),
];

export const todoReducer = createReducer(
    initialState,
    on(crear, (state, { texto }) => [...state, new Todo(texto)]), // siempre hay que devolver un nuevo state, porque los objetos pasan por referencia
);