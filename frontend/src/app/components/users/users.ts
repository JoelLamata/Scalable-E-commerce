import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users implements OnInit {
  users: any[] = [];

  constructor(private apiService: ApiService)  {}

  ngOnInit(): void {
    this.apiService.getUsers().subscribe(data => {
      this.users = data;
    })
  }
}