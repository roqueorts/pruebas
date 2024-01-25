import { createAction, props } from "@ngrx/store";

export const crear = createAction(
    '[TODO] Crear TODO',
    props<{ texto: string; }>()
);
export const toggle = createAction(
    '[TODO] Toogle TODO',
    props<{ id: number; }>()
);
export const editar = createAction(
    '[TODO] Editar TODO',
    props<{ id: number, texto: string; }>()
);
export const borrar = createAction(
    '[TODO] Borrar TODO',
    props<{ id: number; }>()
);
