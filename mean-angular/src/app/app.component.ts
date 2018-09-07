import { Response } from '@angular/http';
import { TodoService } from './services/todo.service';
import ToDo from './models/todo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    //Private todoservice will be injected into the component by Angular Dependency Injector
    private todoService: TodoService
  ) { }

  //Declaring the new todo Object and initilizing it
  public newTodo: ToDo = new ToDo()

  //An Empty list for the visible todo list
  todosList: ToDo[];
  editTodos: ToDo[] = [];


  ngOnInit(): void {

    //At component initialization the 
    this.todoService.getToDos()
      .subscribe(todos => {
        //assign the todolist property to the proper http response
        this.todosList = todos
        console.log(todos)
      })
  }


  //This method will get called on Create button event
  create() {
    this.todoService.createTodo(this.newTodo)
      .subscribe((res) => {
        // push the saved todo into todoList and clear the newTodo for next time use
        this.todosList.push(res.data)
        this.newTodo = new ToDo()
      })
  }

  // edit the selected todo
  editTodo(todo: ToDo) {
    console.log(todo)
    if(this.todosList.includes(todo)){
      if(!this.editTodos.includes(todo)){
        this.editTodos.push(todo)
      }else{
        // remove todo from editTodos
        this.editTodos.splice(this.editTodos.indexOf(todo), 1)
        this.todoService.editTodo(todo).subscribe(res => {
          console.log('Update Succesful')
        }, err => {
          this.editTodo(todo)
          console.error('Update Unsuccesful')
        })
      }
    }
  }

  // Update todo status to done
  doneTodo(todo:ToDo){
    todo.status = 'Done'
    this.todoService.editTodo(todo).subscribe(res => {
      console.log('Update Succesful')
    }, err => {
      this.editTodo(todo)
      console.error('Update Unsuccesful')
    })
  }

  // When in inline-edit mode, if pressing enter key, try to save
  submitTodo(event, todo:ToDo){
    if(event.keyCode ==13){
      this.editTodo(todo)
    }
  }

  // Right now there is an issue with delete api
  // Even though underneath the data is removed from mongodb
  // The status code returned is 400
  // So to make the ui happy, after issuing the request
  // I will assume it succeeds and remove the todo directly
  deleteTodo(todo: ToDo) {
    this.todoService.deleteTodo(todo._id).subscribe(res => {
      // If success, remove the todo from todoList
      // Comment out due to the above reason
      // this.todosList.splice(this.todosList.indexOf(todo), 1);
    })
    this.todosList.splice(this.todosList.indexOf(todo), 1);
  }

}