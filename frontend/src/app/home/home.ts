import { Component } from '@angular/core';
import { Api } from '../api';
import { MatCard, MatCardModule } from "@angular/material/card";

@Component({
  selector: 'app-home',
  imports: [MatCard, MatCardModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  hellostr = "";
  constructor(private apiService: Api) { } ngOnInit() {
    this.apiService.getDemoMethod().subscribe((data: any) => {
      console.log(data);
      this.hellostr = data;
    })
  }
}
