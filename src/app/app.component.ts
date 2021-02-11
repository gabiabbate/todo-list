import { Component } from '@angular/core';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos : Todo[] = [];
  public title: string = 'Minhas tarefas';
  
  constructor() {
    this.todos.push();
    this.todos.push();
    
  }

  alterarTexto() {
    this.title = 'Texto alterado'
  }
}
