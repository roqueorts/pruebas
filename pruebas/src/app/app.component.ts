import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';
import assign from 'lodash/assign';
import * as actions from './prueba.actions';

interface AppState {

  prueba: number;
}



@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [CommonModule, RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pruebas';
  prueba: number = 0;

  constructor(private store: Store<AppState>) {

    /*this.store.subscribe( state => {
      console.log( state );
      this.prueba = state.prueba;

    } );*/
    // El subscribe solo se ejecuta si cambia una parte del estado, en este caso el campo prueba
    this.store.select('prueba')
      .subscribe(prueba => this.prueba = prueba);
  }


  hello = function name(params: string) {
    const a = 2;
    const hola = (a || a);
    console.log('test ');

    return ' aa ';
  };

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.hello);
    _.padStart('Hello TypeScript!', 20, ' ');
    const test = 'a';
    let a = null;
    a = assign(a, test);
    console.log(a);



  }

  incrementar() {

    this.store.dispatch(actions.prueba());
  }



}
