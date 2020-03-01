import { Component, OnInit } from '@angular/core';
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

  onSubmit(){
    console.log(this.todoForm.value)
  }
  
  
  ngOnInit(): void {
    
  }
  
  
  

}
