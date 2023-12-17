import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  data: any | undefined;

  constructor(
    private http: HttpClient,
  ) { }

  async ngOnInit(): Promise<void> {
    this.http.get('http://localhost:8080/server').subscribe((data) => {
      this.data = data;
    });
  }


  title = 'chat-frontend';
}
