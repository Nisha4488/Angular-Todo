import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {


  
  constructor() { }
  
  todoForm = new FormGroup({

    task: new FormControl('')
    
  })

  @Output() addTodo = new EventEmitter<string>()

  onSubmit(){
    console.log('value', this.todoForm.value.task)
    this.addTodo.emit(this.todoForm.value.task)
    
  }
  
  
  ngOnInit(): void {
    
  }
  
  
  

}
