import { Component, OnInit, Signal, WritableSignal, afterNextRender, signal } from '@angular/core';
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
export class AppComponent {
  title = 'chat-frontend';
  data: any = {};

  constructor(
    private http: HttpClient,
  ) {
    afterNextRender(() => {

      setInterval(() => {
        this.http.get('http://localhost:8080/server').subscribe((data) => {
          this.data = data;

        });
      }, 2000);
    });
  }


}
