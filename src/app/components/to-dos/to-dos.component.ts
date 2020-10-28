import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import {TodoService} from 'src/app/services/todo.service'

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
  todos:Todo[];
  constructor( private todoService:TodoService) { }

  ngOnInit(): void {
  this.todoService.getTodos().subscribe(todos=>{
    this.todos = todos;
  });
  }
  deleteTodo(todo:Todo){
    this.todos = this.todos.filter(t=> t.id!== todo.id);  //Remove from UI
    this.todoService.deleteTodo(todo).subscribe(); // remove from server
  }

  addTodo(todo:Todo){
  this.todoService.addTodo(todo).subscribe(todo =>{
    this.todos.push(todo);
  })
  }

}
