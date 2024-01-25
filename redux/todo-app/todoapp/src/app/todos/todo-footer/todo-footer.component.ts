import { Component, OnInit } from '@angular/core';
import { TodoModule } from '../todo.module';

@Component({
  selector: 'app-todo-footer',
  standalone: true,
  imports: [TodoModule], // Podría poner en este caso sólo el Commonsodule
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.css'
})
export class TodoFooterComponent implements OnInit {

  filtroActual = ''; //: actions.filtrosValidos = 'todos';
  filtros = []; //: actions.filtrosValidos[] = ['todos', 'completados', 'pendientes'];

  pendientes: number = 0;

  constructor(/* private store: Store<AppState>*/) { }

  ngOnInit(): void {

    // this.store.select('filtro')
    //   .subscribe( filtro => this.filtroActual = filtro );
    /*this.store.subscribe( state => {

      this.filtroActual = state.filtro;
      this.pendientes   = state.todos.filter( todo => !todo.completado ).length;

    });*/

  }

  cambiarFiltro(filtro: any /*filtro: actions.filtrosValidos */) {

    // this.store.dispatch( actions.setFiltro({ filtro }) );

  }

  limpiarCompletados() {

    //this.store.dispatch( limpiarTodos() )

  }
}
