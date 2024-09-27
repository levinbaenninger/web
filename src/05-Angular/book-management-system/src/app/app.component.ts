import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookComponent } from './book/book.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, BookComponent]
})
export class AppComponent {
  title = 'book-management-system';
}
