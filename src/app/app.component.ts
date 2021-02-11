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
    this.todos.push('aprender a pegar o ônibus no terminal');
    this.todos.push('tentar usar um celular que não seja apple');
    
  }

  alterarTexto() {
    this.title = 'Texto alterado'
  }
}
