import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './book.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  bookListChangedEvent = new Subject<Book[]>();
  private books: Book[] = [];

  constructor(private http: HttpClient) {}

  sortAndSend() {
    this.books.sort((a, b) =>
      a.title > a.title ? 1 : b.title > a.title ? -1 : 0
    );
    this.bookListChangedEvent.next(this.books.slice());
  }

  addBook(book: Book) {
    if (!book) {
      return;
    }

    book.id = '';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    this.http
      .post<{
        message: string;
        book: Book;
      }>('http:localhost:3000/books', book, {
        headers: headers,
      })
      .subscribe((responseData) => {
        this.books.push(responseData.book);
        this.sortAndSend();
      });
  }

  deleteBook(book: Book) {
    if (!book) {
      return;
    }
    const pos = this.books.findIndex((b) => b.id === book.id);
    if (pos < 0) {
      return;
    }

    this.http
      .delete('http://localhost:3000/books/' + book.id)
      .subscribe((response: Response) => {
        this.books.splice(pos, 1);
        this.sortAndSend();
      });
  }

  getBook(id: string) {
    return this.http.get<{
      message: string;
      book: Book;
    }>('http://localhost:3000/books' + id);
  }
  getBooks() {
    this.http
      .get<{
        message: String;
        book: Book[];
      }>('http://localhost:3000/books')
      .subscribe(
        (responseData) => {
          this.books = responseData.book;
          this.sortAndSend();
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  updateBook(originalBook: Book, newBook: Book) {
    if (!originalBook || !newBook) {
      return;
    }

    const pos = this.books.findIndex((b) => b.id === originalBook.id);

    if (pos < 0) {
      return;
    }

    newBook.id = originalBook.id;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    this.http
      .put<{
        message: string;
        book: Book;
      }>('http:localhost:3000/books/' + originalBook.id, newBook, {
        headers: headers,
      })
      .subscribe((responseData) => {
        this.books[pos] = newBook;
        this.sortAndSend();
      });
  }
}
