import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent implements OnInit {
  newBookTitle: string = '';
  newBookAuthor: string = '';

  books: Book[] = [];

  ngOnInit(): void {
    let savedBooks = localStorage.getItem('books');
    this.books = savedBooks ? JSON.parse(savedBooks) : [];
  }

  addBook() {
    if (this.newBookTitle.trim().length && this.newBookAuthor.trim().length) {
      let book: Book = {
        id: Date.now(),
        title: this.newBookTitle,
        author: this.newBookAuthor
      };

      this.books.push(book);

      this.newBookTitle = '';
      this.newBookAuthor = '';

      localStorage.setItem('books', JSON.stringify(this.books));
    }
  }

  deleteBook(index: number) {
    this.books.splice(index, 1);

    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
