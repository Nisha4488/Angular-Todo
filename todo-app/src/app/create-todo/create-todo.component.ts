import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {


  
  constructor() { }
  
  task = new FormControl('');
  createTask(){
    this.task.setValue("shopping")
  }
  ngOnInit(): void {
    
  }
  
  
  

}
