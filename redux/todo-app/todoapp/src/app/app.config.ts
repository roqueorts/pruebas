import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { todoReducer } from './todos/todo.reducer';

export const appConfig: ApplicationConfig = {
  // provideRouterStore(), se necesita @ngrx/router-store
  providers: [provideRouter(routes), provideStore({ todos: todoReducer }), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
