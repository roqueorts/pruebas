import { createReducer, on } from '@ngrx/store';
import { decrementar, dividir, incrementar, multiplicar, reset } from './contador.actions';


export const initialState = 20;

const _contadorReducer = createReducer( initialState,
    on( incrementar, state => state + 1 ),
    on( decrementar, state => state - 1 ),
    on( reset, state => initialState ),
    on( multiplicar, ( state, { numero } ) => state * numero ), // podria ser tambien props en vez de { numero }  y cogeriamos props.numero. Se ha hecho la destructuración
    on( dividir, ( state, { numero } ) => state / numero ),
);

export function contadorReducer( state, action ) {
    return _contadorReducer( state, action );
}