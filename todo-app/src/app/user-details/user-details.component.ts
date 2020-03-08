import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users-service/users.service'
import User from '../users-service/User'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  users
  constructor(
    private usersService: UsersService
  ) { 
    this.usersService = usersService
  }

  ngOnInit(): void {
    this.showUsers();
  }

  showUsers() {
    this.usersService.getUsers()
      .subscribe((data: User[]) => this.users = data); // users is assigned to data
  }

}
