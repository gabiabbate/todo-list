import { Component } from '@angular/core';
import { Todo } from './models/todo.model';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public todos: Todo[] = [];
  public title: String = 'Minhas tarefas';
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });
  }

  //para remover um item é preciso fazer splice
  ///então vamos receber o índice do item de todo
  remove(item: Todo) {
    const index = this.todos.indexOf(item);
    if (index !== -1) {
      // verifica se o todo está na lista, se for !== -1 está na lista, ai pode remover
      this.todos.splice(index, 1);
      //pega o item que vai ser removido e diz quantos itens precisa remover
      this.saveData();
    }
  }

  markAsDone(todo: Todo) {
    todo.done = true;
    this.saveData();
  }

  markAsUndone(todo: Todo) {
    todo.done = false;
    this.saveData();
  }


  add() {

    //pode ser feito pra ter uma json
    //  this.form.value => {title : 'Titulo}
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false));
    this.saveData();
    this.clear();
  }

  clear() {
    this.form.reset();
  }
  
  saveData() {
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data);
  }
  loadData() {
    const data = localStorage.getItem('todos');
    this.todos = JSON.parse(data);
  }
}