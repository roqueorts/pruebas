import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    // TodoPageComponent,
  ],
  exports: [
    ReactiveFormsModule,
    CommonModule,
  ]
})
export class TodoModule { }
