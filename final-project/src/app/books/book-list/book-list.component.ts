import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  subscription: Subscription;
  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.subscription = this.bookService.bookListChangedEvent.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );

    this.bookService.getBooks();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
