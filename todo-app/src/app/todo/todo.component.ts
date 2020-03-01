import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() {

  }
 todoList = [ 
  {task: "Laundary"},
  {task: "Cleaning"},
  {task: "Cooking"}
  ];

  ngOnInit(): void {
  }

add(todo:string){
  
  this.todoList.push({task: todo})
}

onDelete(i){
  console.log('print i', i)
this.todoList.splice(i, 1)
}

}
