import { Component } from '@angular/core';
import * as _ from 'lodash';
import assign from 'lodash/assign';
@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
} )
export class AppComponent {
  title = 'pruebas';

  hello = function name( params: string ) {
    const a = 2;
    const hola = ( a || a );
    console.log( 'test ' );

    return ' aa ';
  };

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log( this.hello );
    _.padStart( 'Hello TypeScript!', 20, ' ' );
    const test = 'a';
    let a = null;
    a = assign( a, test );
    console.log( a );


  }


}
