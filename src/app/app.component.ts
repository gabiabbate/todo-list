import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos : any[] = [];
  public title: string = 'Minhas tarefas';
  
  constructor() {
    this.todos.push('passear com cachorro');
    this.todos.push('ir ao supermercado');
    this.todos.push('cortar cabelo');

  }

  alterarTexto() {
    this.title = 'Texto alterado'
  }
}
