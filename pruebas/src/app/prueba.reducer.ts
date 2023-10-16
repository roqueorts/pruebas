import { Action } from '@ngrx/store';
import { prueba } from './prueba.actions';

export function pruebaReducer( state: number = 10, action: Action ) {

    switch ( action.type ) {
        case prueba.type:
            return state + 1;

        default:
            return state;
    }
}