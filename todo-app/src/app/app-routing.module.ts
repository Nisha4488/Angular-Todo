import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'todos', component:  TodoComponent, pathMatch: 'full'},
  { path: 'users', component:  UserDetailsComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
