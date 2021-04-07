import { Component, OnInit } from '@angular/core';
import { Book } from '../books/book.model';
import { BookService } from '../books/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  constructor(private bookService: BookService) {}

  ngOnInit() {}
}
