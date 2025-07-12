import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { Users } from './components/users/users';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Users],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'frontend';
}
