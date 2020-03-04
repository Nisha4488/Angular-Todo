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
  {
    task: "Laundary", 
    status: true
  },
  {
    task: "Cleaning",
    status: false
  },
  {
    task: "Cooking",
    status: false
  }
];
 // todoList[1].task="Nisha"

  ngOnInit(): void {
  }

add(todo:string){
  
  this.todoList.push({task: todo, status:false})
}

onDelete(i){
  console.log('print i', i)
this.todoList.splice(i, 1)
}

onStatusChange($event, i){
this.todoList[i].status = $event.target.checked


  }


}
