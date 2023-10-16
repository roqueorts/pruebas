import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { pruebaReducer } from './prueba.reducer';

@NgModule( {
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot( { prueba: pruebaReducer }, {} ),
    StoreDevtoolsModule.instrument( { maxAge: 25, logOnly: !isDevMode() } )
  ],
  providers: [],
  bootstrap: [AppComponent]
} )
export class AppModule { }
