import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { TodoPageComponent } from './todos/todo-page/todo-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FooterComponent, RouterOutlet, TodoPageComponent] // podría importar todo un módulo TodoModule]
})
export class AppComponent {
  title = 'todoapp';
}
