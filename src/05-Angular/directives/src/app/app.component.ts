import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  color = 'red';
  attachClass = false;
  switch = true;
  elements = [1, 2, 3, 4, 5];
  value = 10;

  constructor() {
    setTimeout(() => {
      this.color = 'blue';
      this.value = 100;
    }, 1000);

    setTimeout(() => {
      this.attachClass = true;
      this.value = 1000;
    }, 2000);
  }
}
