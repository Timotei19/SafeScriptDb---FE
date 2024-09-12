import { Component } from '@angular/core';
import { ApiService } from '../../APIService/api.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'logs-page',
  templateUrl: './logs-page.component.html',
  styleUrl: './logs-page.component.scss'
})
export class LogsPageComponent {
  users: User[] = [];

  constructor(private userService: ApiService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(
      (users: User[]) => {
        this.users = users;
      },
      (error: any) => {
        console.error('Failed to load users:', error);
      }
    );
  }
}
