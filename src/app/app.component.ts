import { Component } from '@angular/core';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public listaDeTarefas: Todo[] = [];
  public title: String = 'Minhas tarefas';

  constructor() {
    this.listaDeTarefas.push(new Todo(1, 'Passear com o cachorro', false));
    this.listaDeTarefas.push(new Todo(2, 'Ir ao supermercado', true));
    this.listaDeTarefas.push(new Todo(3, 'Cortar o cabelo', false));

  }

  //para remover um item é preciso fazer splice
  ///então vamos receber o índice do item de todo
  remove(item: Todo) {
    const index = this.listaDeTarefas.indexOf(item);
    if (index !== -1) {
      // verifica se o todo está na lista, se for !== -1 está na lista, ai pode remover
      this.listaDeTarefas.splice(index, 1);
      //pega o item que vai ser removido e diz quantos itens precisa remover
    }
  }

  markAsDone(todo: Todo) {
    todo.done = true;
  }

  markAsUndone(todo: Todo) {
    todo.done = false;
  }
}